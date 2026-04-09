import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { FullScreenQuad } from 'three/examples/jsm/postprocessing/Pass.js';
import {
  GodRaysDepthMaskShader,
  GodRaysGenerateShader,
  GodRaysCombineShader,
  GodRaysFakeSunShader,
} from 'three/examples/jsm/shaders/GodRaysShader.js';

// ── VFX State ────────────────────────────────────────────
export const VFX = {
  composer: null,
  bloomPass: null,
  colorGradePass: null,
  particles: [],
  cameraShake: { intensity: 0, decay: 0.92, offsetX: 0, offsetY: 0, offsetZ: 0 },
  baseFov: 60,
  currentFov: 60,
  speedLinesMesh: null,
  speedLinesMat: null,
  isNight: false,
  time: 0,
  // God rays state
  godRays: {
    enabled: true,
    sunPosition: new THREE.Vector3(80, 120, 60), // Will sync with sky sun
    sunScreenPos: new THREE.Vector3(0.7, 0.85, 1.0),
    maskRenderTarget: null,
    godRayRenderTarget1: null,
    godRayRenderTarget2: null,
    colorRenderTarget: null,
    depthMaterial: null,
    generateMat1: null,
    generateMat2: null,
    generateMat3: null,
    combineMat: null,
    fsQuad: null,
    intensity: 0.35,
    stepSize: 0.15,
  },
  // Environment reflection
  pmremGenerator: null,
  envTexture: null,
};

// ── Color Grading Shader ─────────────────────────────────
const ColorGradeShader = {
  uniforms: {
    tDiffuse: { value: null },
    brightness: { value: 0.0 },
    contrast: { value: 1.0 },
    saturation: { value: 1.0 },
    warmth: { value: 0.0 },
    time: { value: 0.0 },
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform sampler2D tDiffuse;
    uniform float brightness;
    uniform float contrast;
    uniform float saturation;
    uniform float warmth;
    uniform float time;
    varying vec2 vUv;

    float rand(vec2 co) {
      return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
    }

    void main() {
      vec4 color = texture2D(tDiffuse, vUv);

      // Brightness
      color.rgb += brightness;

      // Contrast
      color.rgb = (color.rgb - 0.5) * contrast + 0.5;

      // Saturation
      float grey = dot(color.rgb, vec3(0.299, 0.587, 0.114));
      color.rgb = mix(vec3(grey), color.rgb, saturation);

      // Warmth
      color.r += warmth * 0.07;
      color.g += warmth * 0.02;
      color.b -= warmth * 0.05;

      // Subtle film grain
      float grain = rand(vUv + fract(time)) * 0.018 - 0.009;
      color.rgb += grain;

      // Vignette — soft, not dramatic
      vec2 uv2 = vUv * (1.0 - vUv);
      float vig = uv2.x * uv2.y * 18.0;
      vig = pow(vig, 0.18);
      color.rgb *= vig;

      // Lift blacks slightly (prevents crushed shadows on grass)
      color.rgb = max(color.rgb, vec3(0.012));

      gl_FragColor = clamp(color, 0.0, 1.0);
    }
  `,
};

// ── Speed Lines Shader ───────────────────────────────────
const SpeedLinesShader = {
  uniforms: {
    tDiffuse: { value: null },
    intensity: { value: 0.0 },
    time: { value: 0.0 },
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform sampler2D tDiffuse;
    uniform float intensity;
    uniform float time;
    varying vec2 vUv;

    void main() {
      vec4 color = texture2D(tDiffuse, vUv);
      
      if (intensity > 0.01) {
        // Radial blur from center
        vec2 center = vec2(0.5);
        vec2 dir = vUv - center;
        float dist = length(dir);
        
        // Only affect edges
        float edgeMask = smoothstep(0.3, 0.7, dist);
        
        // Streaks
        float angle = atan(dir.y, dir.x);
        float streaks = sin(angle * 20.0 + time * 8.0) * 0.5 + 0.5;
        streaks = pow(streaks, 3.0);
        
        // Radial blur by sampling along radial direction
        float blur = intensity * edgeMask * 0.02;
        vec2 blurDir = normalize(dir) * blur;
        vec4 blurred = vec4(0.0);
        for (int i = 0; i < 4; i++) {
          float t = float(i) / 4.0;
          blurred += texture2D(tDiffuse, vUv - blurDir * t);
        }
        blurred /= 4.0;
        
        color = mix(color, blurred, edgeMask * intensity);
        
        // Add white streaks at edges
        float streakAlpha = streaks * edgeMask * intensity * 0.15;
        color.rgb += vec3(streakAlpha);
      }
      
      gl_FragColor = color;
    }
  `,
};

// ── Environment Map Helper ───────────────────────────────
function _rebuildEnvMap(renderer, scene, isNight) {
  if (!VFX.pmremGenerator) return;

  const skyCanvas = document.createElement('canvas');
  skyCanvas.width = 256; skyCanvas.height = 128;
  const ctx = skyCanvas.getContext('2d');

  if (isNight) {
    const grad = ctx.createLinearGradient(0, 0, 0, 128);
    grad.addColorStop(0, '#0a1828');
    grad.addColorStop(1, '#1a2a3a');
    ctx.fillStyle = grad;
  } else {
    const grad = ctx.createLinearGradient(0, 0, 0, 128);
    grad.addColorStop(0, '#87ceeb');
    grad.addColorStop(0.5, '#c8e8ff');
    grad.addColorStop(1, '#f0f8ff');
    ctx.fillStyle = grad;
  }
  ctx.fillRect(0, 0, 256, 128);

  const tex = new THREE.CanvasTexture(skyCanvas);
  tex.mapping = THREE.EquirectangularReflectionMapping;

  if (VFX.envTexture) VFX.envTexture.dispose();
  VFX.envTexture = VFX.pmremGenerator.fromEquirectangular(tex).texture;
  tex.dispose();

  scene.environment = VFX.envTexture;
}

// ── Post-Processing Init ─────────────────────────────────
export function initPostProcessing(renderer, scene, camera) {
  const size = new THREE.Vector2();
  renderer.getSize(size);
  const W = size.x, H = size.y;

  // ── Environment map for reflections ──────────────────
  VFX.pmremGenerator = new THREE.PMREMGenerator(renderer);
  VFX.pmremGenerator.compileEquirectangularShader();
  _rebuildEnvMap(renderer, scene, false);

  // ── God ray render targets ────────────────────────────
  const rtOpts = {
    minFilter: THREE.NearestFilter,
    magFilter: THREE.NearestFilter,
    format: THREE.RGBAFormat,
    type: THREE.HalfFloatType,
  };
  const W4 = Math.floor(W / 4), H4 = Math.floor(H / 4);

  VFX.godRays.maskRenderTarget    = new THREE.WebGLRenderTarget(W4, H4, rtOpts);
  VFX.godRays.godRayRenderTarget1 = new THREE.WebGLRenderTarget(W4, H4, rtOpts);
  VFX.godRays.godRayRenderTarget2 = new THREE.WebGLRenderTarget(W4, H4, rtOpts);
  VFX.godRays.colorRenderTarget   = new THREE.WebGLRenderTarget(W, H, {
    ...rtOpts,
    minFilter: THREE.LinearFilter,
    magFilter: THREE.LinearFilter,
  });

  VFX.godRays.depthMaterial = new THREE.MeshDepthMaterial();
  VFX.godRays.depthMaterial.depthPacking = THREE.RGBADepthPacking;
  VFX.godRays.depthMaterial.blending = THREE.NoBlending;

  VFX.godRays.fsQuad = new FullScreenQuad();

  const makeGenMat = () => new THREE.ShaderMaterial({
    uniforms: THREE.UniformsUtils.clone(GodRaysGenerateShader.uniforms),
    vertexShader: GodRaysGenerateShader.vertexShader,
    fragmentShader: GodRaysGenerateShader.fragmentShader,
  });
  VFX.godRays.generateMat1 = makeGenMat();
  VFX.godRays.generateMat2 = makeGenMat();
  VFX.godRays.generateMat3 = makeGenMat();

  VFX.godRays.combineMat = new THREE.ShaderMaterial({
    uniforms: THREE.UniformsUtils.clone(GodRaysCombineShader.uniforms),
    vertexShader: GodRaysCombineShader.vertexShader,
    fragmentShader: GodRaysCombineShader.fragmentShader,
  });
  VFX.godRays.combineMat.uniforms.fGodRayIntensity.value = VFX.godRays.intensity;

  // ── Main composer (bloom + color grade) ──────────────
  VFX.composer = new EffectComposer(renderer);

  const renderPass = new RenderPass(scene, camera);
  renderPass.clearAlpha = 0;
  VFX.composer.addPass(renderPass);

  // Bloom — dialed back, god rays handle sun glow
  VFX.bloomPass = new UnrealBloomPass(
    new THREE.Vector2(W, H),
    0.18,   // strength — subtle
    0.4,    // radius
    0.97    // threshold — only emissive objects bloom
  );
  VFX.composer.addPass(VFX.bloomPass);

  // Speed lines
  VFX.speedLinesPass = new ShaderPass(SpeedLinesShader);
  VFX.composer.addPass(VFX.speedLinesPass);

  // Color grade — last pass
  VFX.colorGradePass = new ShaderPass(ColorGradeShader);
  VFX.composer.addPass(VFX.colorGradePass);

  // Default day grading
  setColorGrade(false);
}

// ── Color Grading ────────────────────────────────────────
export function setColorGrade(isNight, rendererRef, sceneRef) {
  VFX.isNight = isNight;
  if (!VFX.colorGradePass) return;

  const u = VFX.colorGradePass.uniforms;
  if (isNight) {
    u.brightness.value  = 0.0;
    u.contrast.value    = 1.08;
    u.saturation.value  = 0.8;
    u.warmth.value      = -0.4;
    VFX.godRays.enabled = false;
    if (VFX.bloomPass) {
      VFX.bloomPass.strength = 0.45;
      VFX.bloomPass.threshold = 0.9;
    }
  } else {
    u.brightness.value  = 0.03;
    u.contrast.value    = 1.03;
    u.saturation.value  = 1.12;
    u.warmth.value      = 0.12;
    VFX.godRays.enabled = true;
    VFX.godRays.intensity = 0.35;
    if (VFX.bloomPass) {
      VFX.bloomPass.strength = 0.18;
      VFX.bloomPass.threshold = 0.97;
    }
  }

  if (rendererRef && sceneRef) {
    _rebuildEnvMap(rendererRef, sceneRef, isNight);
  }
}

// ── Resize Handler ───────────────────────────────────────
export function resizePostProcessing(w, h) {
  if (VFX.composer) VFX.composer.setSize(w, h);

  const gr = VFX.godRays;
  const W4 = Math.floor(w / 4), H4 = Math.floor(h / 4);
  if (gr.maskRenderTarget)    gr.maskRenderTarget.setSize(W4, H4);
  if (gr.godRayRenderTarget1) gr.godRayRenderTarget1.setSize(W4, H4);
  if (gr.godRayRenderTarget2) gr.godRayRenderTarget2.setSize(W4, H4);
  if (gr.colorRenderTarget)   gr.colorRenderTarget.setSize(w, h);
}

// ── Particle Systems ─────────────────────────────────────

function createParticle(scene, pos, vel, color, size, lifetime, gravity) {
  const geo = new THREE.SphereGeometry(size, 4, 4);
  const mat = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 1.0 });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.copy(pos);
  scene.add(mesh);
  VFX.particles.push({
    mesh, mat, vel: vel.clone(),
    life: 0, maxLife: lifetime,
    gravity: gravity !== undefined ? gravity : -15,
    startSize: size,
  });
}

// Grass/dust puffs when ball is hit
export function spawnHitDust(scene, position) {
  const count = 10;
  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = 1.5 + Math.random() * 2;
    const vel = new THREE.Vector3(
      Math.cos(angle) * speed,
      2 + Math.random() * 2,
      Math.sin(angle) * speed
    );
    const color = Math.random() > 0.5 ? 0x6b8e4e : 0x8b7d5e;
    const size = 0.04 + Math.random() * 0.04;
    createParticle(scene, position.clone().add(new THREE.Vector3(0, 0.1, 0)), vel, color, size, 0.5 + Math.random() * 0.3, -8);
  }
}

// Confetti/sparkles when ball sinks into hole
export function spawnHoleConfetti(scene, position) {
  const colors = [0xff4444, 0xffcc00, 0x44cc44, 0x4488ff, 0xff88cc, 0xffffff];
  const count = 30;
  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = 2 + Math.random() * 4;
    const vel = new THREE.Vector3(
      Math.cos(angle) * speed,
      5 + Math.random() * 6,
      Math.sin(angle) * speed
    );
    const color = colors[Math.floor(Math.random() * colors.length)];
    const size = 0.03 + Math.random() * 0.05;
    createParticle(scene, position.clone().add(new THREE.Vector3(0, 0.2, 0)), vel, color, size, 1.2 + Math.random() * 0.5, -10);
  }
}

// Sparks when ball hits wall at high speed
export function spawnWallSparks(scene, position, speed) {
  const count = Math.min(Math.floor(speed * 2), 15);
  for (let i = 0; i < count; i++) {
    const vel = new THREE.Vector3(
      (Math.random() - 0.5) * speed * 0.8,
      Math.random() * speed * 0.5 + 1,
      (Math.random() - 0.5) * speed * 0.8
    );
    const color = Math.random() > 0.3 ? 0xffcc44 : 0xffffff;
    const size = 0.02 + Math.random() * 0.03;
    createParticle(scene, position.clone(), vel, color, size, 0.2 + Math.random() * 0.2, -5);
  }
}

// ── Update Particles ─────────────────────────────────────
export function updateParticles(dt, scene) {
  for (let i = VFX.particles.length - 1; i >= 0; i--) {
    const p = VFX.particles[i];
    p.life += dt;
    if (p.life >= p.maxLife) {
      scene.remove(p.mesh);
      p.mesh.geometry.dispose();
      p.mat.dispose();
      VFX.particles.splice(i, 1);
      continue;
    }
    // Physics
    p.vel.y += p.gravity * dt;
    p.mesh.position.addScaledVector(p.vel, dt);
    // Fade out
    const t = p.life / p.maxLife;
    p.mat.opacity = 1.0 - t;
    // Shrink
    const scale = 1.0 - t * 0.5;
    p.mesh.scale.setScalar(scale);
  }
}

// ── Camera Shake ─────────────────────────────────────────
export function triggerCameraShake(intensity) {
  VFX.cameraShake.intensity = Math.min(intensity, 0.8);
}

export function updateCameraShake(camera, dt) {
  const shake = VFX.cameraShake;
  if (shake.intensity < 0.001) {
    shake.intensity = 0;
    shake.offsetX = 0;
    shake.offsetY = 0;
    shake.offsetZ = 0;
    return;
  }

  shake.offsetX = (Math.random() - 0.5) * shake.intensity * 0.3;
  shake.offsetY = (Math.random() - 0.5) * shake.intensity * 0.2;
  shake.offsetZ = (Math.random() - 0.5) * shake.intensity * 0.3;

  camera.position.x += shake.offsetX;
  camera.position.y += shake.offsetY;
  camera.position.z += shake.offsetZ;

  shake.intensity *= Math.pow(shake.decay, dt * 60);
}

// ── Dynamic FOV ──────────────────────────────────────────
export function updateDynamicFOV(camera, ballSpeed, dt) {
  const targetFov = VFX.baseFov + Math.min(ballSpeed * 0.6, 12);
  VFX.currentFov = THREE.MathUtils.lerp(VFX.currentFov, targetFov, dt * 3);
  camera.fov = VFX.currentFov;
  camera.updateProjectionMatrix();
}

// ── Speed Lines ──────────────────────────────────────────
export function updateSpeedLines(ballSpeed, dt) {
  if (!VFX.speedLinesPass) return;

  const targetIntensity = ballSpeed > 8 ? Math.min((ballSpeed - 8) / 15, 1.0) : 0;
  const current = VFX.speedLinesPass.uniforms.intensity.value;
  VFX.speedLinesPass.uniforms.intensity.value = THREE.MathUtils.lerp(current, targetIntensity, dt * 5);
  VFX.speedLinesPass.uniforms.time.value = VFX.time;
}

// ── Aim Line (Dotted Pulsing) ────────────────────────────
const AIM_DOT_COUNT = 20;
let aimDots = [];
let aimRing = null;
let aimRingInner = null;

export function createAimVisuals(scene) {
  // Dots for aiming line
  for (let i = 0; i < AIM_DOT_COUNT; i++) {
    const geo = new THREE.SphereGeometry(0.06, 6, 6);
    const mat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0,
    });
    const dot = new THREE.Mesh(geo, mat);
    dot.visible = false;
    scene.add(dot);
    aimDots.push({ mesh: dot, mat });
  }

  // Power ring on ground
  const ringGeo = new THREE.RingGeometry(0.3, 0.38, 64, 1, 0, Math.PI * 2);
  const ringMat = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0,
    side: THREE.DoubleSide,
  });
  aimRing = new THREE.Mesh(ringGeo, ringMat);
  aimRing.rotation.x = -Math.PI / 2;
  aimRing.visible = false;
  scene.add(aimRing);

  // Inner fill for power
  const innerGeo = new THREE.RingGeometry(0.0, 0.28, 64, 1, 0, Math.PI * 2);
  const innerMat = new THREE.MeshBasicMaterial({
    color: 0x44ff88,
    transparent: true,
    opacity: 0,
    side: THREE.DoubleSide,
  });
  aimRingInner = new THREE.Mesh(innerGeo, innerMat);
  aimRingInner.rotation.x = -Math.PI / 2;
  aimRingInner.visible = false;
  scene.add(aimRingInner);
}

export function updateAimVisuals(ballPos, worldDir, ratio, time) {
  if (!worldDir || ratio < 0.02) {
    hideAimVisuals();
    return;
  }

  const pulse = Math.sin(time * 8) * 0.15 + 0.85;
  const length = ratio * 4 + 0.5;

  // Update dots along aim direction
  for (let i = 0; i < AIM_DOT_COUNT; i++) {
    const t = (i + 1) / AIM_DOT_COUNT;
    const d = aimDots[i];
    d.mesh.visible = true;

    // Position along line
    const dist = t * length;
    d.mesh.position.set(
      ballPos.x + worldDir.x * dist,
      ballPos.y,
      ballPos.z + worldDir.z * dist
    );

    // Animated wave offset  
    const wave = Math.sin(time * 6 - t * 8) * 0.03;
    d.mesh.position.y += wave;

    // Gradient opacity: bright near ball, fading away
    const fadeT = 1.0 - t;
    d.mat.opacity = fadeT * 0.8 * pulse;

    // Size: larger near ball, smaller far away
    const scale = (1.0 - t * 0.6) * pulse;
    d.mesh.scale.setScalar(scale);

    // Color: white → green → red based on power
    if (ratio < 0.5) {
      d.mat.color.setHex(0x44ff88);
    } else if (ratio < 0.8) {
      d.mat.color.setHex(0xffcc44);
    } else {
      d.mat.color.setHex(0xff4444);
    }
  }

  // Update power ring on ground
  if (aimRing) {
    aimRing.visible = true;
    aimRing.position.set(ballPos.x, ballPos.y - 0.15, ballPos.z);
    aimRing.material.opacity = 0.6 * pulse;

    // Scale ring based on power
    const ringScale = 1.0 + ratio * 2;
    aimRing.scale.setScalar(ringScale);

    // Color ring by power
    if (ratio < 0.5) {
      aimRing.material.color.setHex(0x44ff88);
    } else if (ratio < 0.8) {
      aimRing.material.color.setHex(0xffcc44);
    } else {
      aimRing.material.color.setHex(0xff4444);
    }
  }

  if (aimRingInner) {
    aimRingInner.visible = true;
    aimRingInner.position.set(ballPos.x, ballPos.y - 0.16, ballPos.z);
    aimRingInner.material.opacity = 0.25 * pulse;
    aimRingInner.scale.setScalar(1.0 + ratio * 2);

    if (ratio < 0.5) {
      aimRingInner.material.color.setHex(0x44ff88);
    } else if (ratio < 0.8) {
      aimRingInner.material.color.setHex(0xffcc44);
    } else {
      aimRingInner.material.color.setHex(0xff4444);
    }
  }
}

export function hideAimVisuals() {
  for (const d of aimDots) {
    d.mesh.visible = false;
  }
  if (aimRing) aimRing.visible = false;
  if (aimRingInner) aimRingInner.visible = false;
}

export function cleanupAimVisuals(scene) {
  for (const d of aimDots) {
    scene.remove(d.mesh);
    d.mesh.geometry.dispose();
    d.mat.dispose();
  }
  aimDots = [];
  if (aimRing) {
    scene.remove(aimRing);
    aimRing.geometry.dispose();
    aimRing.material.dispose();
    aimRing = null;
  }
  if (aimRingInner) {
    scene.remove(aimRingInner);
    aimRingInner.geometry.dispose();
    aimRingInner.material.dispose();
    aimRingInner = null;
  }
}

// ── Master Update ────────────────────────────────────────
export function updateAllVFX(dt, scene, camera, ballSpeed) {
  VFX.time += dt;
  if (VFX.colorGradePass) {
    VFX.colorGradePass.uniforms.time.value = VFX.time;
  }
  updateParticles(dt, scene);
  updateCameraShake(camera, dt);
  updateDynamicFOV(camera, ballSpeed, dt);
  updateSpeedLines(ballSpeed, dt);
}

// ── Render ───────────────────────────────────────────────
export function renderWithPostProcessing(renderer, scene, camera) {
  // Step 1: Normal composer render (scene → bloom → color grade → screen)
  if (VFX.composer) VFX.composer.render();

  // Step 2: God ray overlay (additive blend on top)
  const gr = VFX.godRays;
  if (!gr.enabled || !gr.maskRenderTarget || !gr.fsQuad || !renderer || !scene || !camera) return;

  const sunProj = gr.sunPosition.clone().project(camera);
  if (sunProj.z >= 1.0) return; // sun behind camera, skip

  gr.sunScreenPos.set((sunProj.x + 1) * 0.5, (sunProj.y + 1) * 0.5, sunProj.z);

  // Render occluder depth mask at quarter res
  scene.overrideMaterial = gr.depthMaterial;
  renderer.setRenderTarget(gr.maskRenderTarget);
  renderer.clear();
  renderer.render(scene, camera);
  scene.overrideMaterial = null;
  renderer.setRenderTarget(null);

  const sunVec = new THREE.Vector3(gr.sunScreenPos.x, gr.sunScreenPos.y, 0);

  const runGen = (mat, inputTex, outputRT, step) => {
    mat.uniforms.tInput.value = inputTex;
    mat.uniforms.vSunPositionScreenSpace.value.copy(sunVec);
    mat.uniforms.fStepSize.value = step;
    gr.fsQuad.material = mat;
    renderer.setRenderTarget(outputRT);
    renderer.clear();
    gr.fsQuad.render(renderer);
    renderer.setRenderTarget(null);
  };

  runGen(gr.generateMat1, gr.maskRenderTarget.texture,    gr.godRayRenderTarget1, gr.stepSize);
  runGen(gr.generateMat2, gr.godRayRenderTarget1.texture, gr.godRayRenderTarget2, gr.stepSize * 0.5);
  runGen(gr.generateMat3, gr.godRayRenderTarget2.texture, gr.godRayRenderTarget1, gr.stepSize * 0.25);

  // Additive blend god rays over screen
  gr.combineMat.uniforms.tGodRays.value = gr.godRayRenderTarget1.texture;
  gr.combineMat.uniforms.fGodRayIntensity.value = gr.intensity;
  gr.fsQuad.material = gr.combineMat;
  gr.combineMat.blending = THREE.AdditiveBlending;
  gr.combineMat.depthWrite = false;
  gr.combineMat.depthTest = false;
  gr.combineMat.transparent = true;
  gr.fsQuad.render(renderer);
  gr.combineMat.blending = THREE.NormalBlending;
}

// ── Cleanup ──────────────────────────────────────────────
export function cleanupVFX(scene) {
  for (const p of VFX.particles) {
    scene.remove(p.mesh);
    p.mesh.geometry.dispose();
    p.mat.dispose();
  }
  VFX.particles = [];
  VFX.cameraShake.intensity = 0;

  // Dispose god ray render targets
  const gr = VFX.godRays;
  if (gr.maskRenderTarget)    { gr.maskRenderTarget.dispose();    gr.maskRenderTarget = null; }
  if (gr.godRayRenderTarget1) { gr.godRayRenderTarget1.dispose(); gr.godRayRenderTarget1 = null; }
  if (gr.godRayRenderTarget2) { gr.godRayRenderTarget2.dispose(); gr.godRayRenderTarget2 = null; }
  if (gr.colorRenderTarget)   { gr.colorRenderTarget.dispose();   gr.colorRenderTarget = null; }
  if (gr.depthMaterial)       { gr.depthMaterial.dispose();       gr.depthMaterial = null; }
  if (gr.generateMat1)        { gr.generateMat1.dispose();        gr.generateMat1 = null; }
  if (gr.generateMat2)        { gr.generateMat2.dispose();        gr.generateMat2 = null; }
  if (gr.generateMat3)        { gr.generateMat3.dispose();        gr.generateMat3 = null; }
  if (gr.combineMat)          { gr.combineMat.dispose();          gr.combineMat = null; }
  if (gr.fsQuad)              { gr.fsQuad.dispose();              gr.fsQuad = null; }

  // Dispose env map
  if (VFX.envTexture)         { VFX.envTexture.dispose();         VFX.envTexture = null; }
  if (VFX.pmremGenerator)     { VFX.pmremGenerator.dispose();     VFX.pmremGenerator = null; }
}
