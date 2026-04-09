import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';

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
};

// ── Color Grading Shader ─────────────────────────────────
const ColorGradeShader = {
  uniforms: {
    tDiffuse: { value: null },
    brightness: { value: 0.0 },
    contrast: { value: 1.0 },
    saturation: { value: 1.0 },
    warmth: { value: 0.0 },
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
    varying vec2 vUv;

    void main() {
      vec4 color = texture2D(tDiffuse, vUv);
      
      // Brightness
      color.rgb += brightness;
      
      // Contrast
      color.rgb = (color.rgb - 0.5) * contrast + 0.5;
      
      // Saturation
      float grey = dot(color.rgb, vec3(0.299, 0.587, 0.114));
      color.rgb = mix(vec3(grey), color.rgb, saturation);
      
      // Warmth (shift red up, blue down for warm; opposite for cool)
      color.r += warmth * 0.08;
      color.g += warmth * 0.02;
      color.b -= warmth * 0.06;
      
      // Subtle vignette
      vec2 uv = vUv * (1.0 - vUv);
      float vig = uv.x * uv.y * 15.0;
      vig = pow(vig, 0.15);
      color.rgb *= vig;
      
      gl_FragColor = color;
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

// ── Post-Processing Init ─────────────────────────────────
export function initPostProcessing(renderer, scene, camera) {
  const size = new THREE.Vector2();
  renderer.getSize(size);

  VFX.composer = new EffectComposer(renderer);

  const renderPass = new RenderPass(scene, camera);
  renderPass.clearAlpha = 0;
  VFX.composer.addPass(renderPass);

  // Bloom pass
  VFX.bloomPass = new UnrealBloomPass(
    new THREE.Vector2(size.x, size.y),
    0.4,   // strength
    0.6,   // radius
    0.85   // threshold
  );
  VFX.composer.addPass(VFX.bloomPass);

  // Speed lines pass
  VFX.speedLinesPass = new ShaderPass(SpeedLinesShader);
  VFX.composer.addPass(VFX.speedLinesPass);

  // Color grading pass (last)
  VFX.colorGradePass = new ShaderPass(ColorGradeShader);
  VFX.composer.addPass(VFX.colorGradePass);

  // Default day grading
  setColorGrade(false);
}

// ── Color Grading ────────────────────────────────────────
export function setColorGrade(isNight) {
  VFX.isNight = isNight;
  if (!VFX.colorGradePass) return;

  const u = VFX.colorGradePass.uniforms;
  if (isNight) {
    u.brightness.value = -0.03;
    u.contrast.value = 1.15;
    u.saturation.value = 0.8;
    u.warmth.value = -0.6;
  } else {
    u.brightness.value = 0.02;
    u.contrast.value = 1.05;
    u.saturation.value = 1.15;
    u.warmth.value = 0.4;
  }
}

// ── Resize Handler ───────────────────────────────────────
export function resizePostProcessing(w, h) {
  if (VFX.composer) VFX.composer.setSize(w, h);
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
  VFX.time += dt;
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
  updateParticles(dt, scene);
  updateCameraShake(camera, dt);
  updateDynamicFOV(camera, ballSpeed, dt);
  updateSpeedLines(ballSpeed, dt);
}

// ── Render ───────────────────────────────────────────────
export function renderWithPostProcessing() {
  if (VFX.composer) {
    VFX.composer.render();
  }
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
}
