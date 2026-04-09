import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js';
import { MP, getPlayerById } from './network.js';
import {
  VFX, initPostProcessing, resizePostProcessing, setColorGrade,
  renderWithPostProcessing, updateAllVFX, cleanupVFX,
  spawnHitDust, spawnHoleConfetti, spawnWallSparks, triggerCameraShake,
  createAimVisuals, updateAimVisuals, hideAimVisuals, cleanupAimVisuals,
} from './vfx.js';

export const BALL_COLORS = [
  0xff4444, 0x4488ff, 0xffcc00, 0x44cc44,
  0xff88cc, 0xff8800, 0x8844ff, 0x00cccc, 0xffffff, 0x222222,
];

export const Game = {
  scene: null, camera: null, renderer: null, labelRenderer: null,
  controls: null, world: null, clock: null,
  ball: null, ballBody: null, ballColor: BALL_COLORS[0],
  remoteBalls: {},
  courseMeshes: [], courseBodies: [], terrainMesh: null, movingPieces: [],
  lights: [],
  holePosition: new THREE.Vector3(), holeRadius: 0.6,
  startPosition: new THREE.Vector3(), courseBaseY: 8,
  isDragging: false, dragStart: { x: 0, y: 0 }, dragCurrent: { x: 0, y: 0 },
  dragArrow: null, maxPower: 20,
  swings: 0, timerStart: 0, elapsedTime: 0, timeLimit: 120, remainingTime: 120,
  hasFinished: false, spectatorMode: false, currentCourseIndex: -1,
  wind: { x: 0, z: 0 },
  waterZones: [], specialPieces: [],
  lastSafePosition: new THREE.Vector3(), lastSwingPosition: new THREE.Vector3(), waterSplashed: false,
  hat: null, hatMesh: null, glowIntensity: 0,
  trailEnabled: false, trailColor: '#ffffff', trailPoints: [], trailLine: null,
  rainEnabled: false, rainDrops: [],
  prevBallSpeed: 0, vfxTime: 0,
  onSwingCountChanged: null, onTimeUpdate: null, onTimeUp: null,
  onFinishHole: null, onDragChanged: null, onWaterSplash: null,
  // Sky system
  skyDome: null, sunMesh: null, moonMesh: null, starField: null,
  clouds: [], cloudTime: 0,
  // Track players being added to prevent duplicates
  addingPlayers: new Set(),
};

const BALL_RADIUS = 0.2;
const GROUND_MAT = new CANNON.Material('ground');
const SAND_MAT = new CANNON.Material('sand');
const ICE_MAT = new CANNON.Material('ice');
const TRAMPOLINE_MAT = new CANNON.Material('trampoline');
const BALL_MAT_C = new CANNON.Material('ball');

function hash(x, z) {
  const n = Math.sin(x * 127.1 + z * 311.7) * 43758.5453;
  return n - Math.floor(n);
}
function noise2D(x, z) {
  const ix = Math.floor(x), iz = Math.floor(z);
  const fx = x - ix, fz = z - iz;
  const sx = fx * fx * (3 - 2 * fx), sz = fz * fz * (3 - 2 * fz);
  const a = hash(ix, iz), b = hash(ix + 1, iz);
  const c = hash(ix, iz + 1), d = hash(ix + 1, iz + 1);
  return a + (b - a) * sx + (c - a) * sz + (a - b - c + d) * sx * sz;
}
function fbm(x, z) {
  let v = 0, a = 1, tot = 0;
  for (let i = 0; i < 4; i++) { v += a * noise2D(x, z); tot += a; x *= 2; z *= 2; a *= 0.5; }
  return v / tot;
}

export function initScene(container) {
  Game.scene = new THREE.Scene();
  Game.scene.fog = new THREE.Fog(0x87ceeb, 100, 350);

  const aspect = window.innerWidth / window.innerHeight;
  Game.camera = new THREE.PerspectiveCamera(60, aspect, 0.1, 1000);

  // Allow transparent background so CSS sky gradient shows through
  Game.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  Game.renderer.setSize(window.innerWidth, window.innerHeight);
  Game.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  Game.renderer.shadowMap.enabled = true;
  Game.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  Game.renderer.toneMapping = THREE.ACESFilmicToneMapping;
  Game.renderer.toneMappingExposure = 1.0;
  Game.renderer.outputColorSpace = THREE.SRGBColorSpace;
  Game.renderer.setClearColor(0x000000, 0); // Transparent
  container.appendChild(Game.renderer.domElement);

  Game.labelRenderer = new CSS2DRenderer();
  Game.labelRenderer.setSize(window.innerWidth, window.innerHeight);
  Game.labelRenderer.domElement.style.position = 'absolute';
  Game.labelRenderer.domElement.style.top = '0';
  Game.labelRenderer.domElement.style.pointerEvents = 'none';
  container.appendChild(Game.labelRenderer.domElement);

  Game.scene = new THREE.Scene();
  Game.scene.fog = new THREE.Fog(0x87ceeb, 100, 350);
  Game.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 300);
  Game.camera.position.set(0, 15, 20);

  Game.controls = new OrbitControls(Game.camera, Game.renderer.domElement);
  Game.controls.enableDamping = true;
  Game.controls.dampingFactor = 0.1;
  Game.controls.minDistance = 2;
  Game.controls.maxDistance = 50;
  Game.controls.mouseButtons = { LEFT: null, MIDDLE: THREE.MOUSE.DOLLY, RIGHT: THREE.MOUSE.ROTATE };
  Game.controls.touches = { ONE: THREE.MOUSE.ROTATE, TWO: THREE.TOUCH.DOLLY_ROTATE };

  // Improved Lighting
  const sun = new THREE.DirectionalLight(0xfff8e8, 2.4);
  sun.position.set(80, 120, 60);
  sun.castShadow = true;
  sun.shadow.mapSize.width = 2048;
  sun.shadow.mapSize.height = 2048;
  sun.shadow.camera.near = 1;
  sun.shadow.camera.far = 400;
  sun.shadow.camera.left = -80;
  sun.shadow.camera.right = 80;
  sun.shadow.camera.top = 80;
  sun.shadow.camera.bottom = -80;
  sun.shadow.bias = -0.001;
  Game.scene.add(sun);

  const ambientLight = new THREE.AmbientLight(0xd0e8ff, 1.0);
  Game.scene.add(ambientLight);

  const fillLight = new THREE.DirectionalLight(0xb8d8ff, 0.9);
  fillLight.position.set(-40, 30, -40);
  Game.scene.add(fillLight);

  const groundBounce = new THREE.HemisphereLight(0xffe8a0, 0x88cc55, 1.0);
  Game.scene.add(groundBounce);

  Game.clock = new THREE.Clock();
  Game.world = new CANNON.World({ gravity: new CANNON.Vec3(0, -15, 0) });
  Game.world.broadphase = new CANNON.SAPBroadphase(Game.world);
  Game.world.allowSleep = false;
  Game.world.addContactMaterial(new CANNON.ContactMaterial(GROUND_MAT, BALL_MAT_C, { friction: 0.4, restitution: 0.3 }));
  Game.world.addContactMaterial(new CANNON.ContactMaterial(SAND_MAT, BALL_MAT_C, { friction: 2.5, restitution: 0.1 }));
  Game.world.addContactMaterial(new CANNON.ContactMaterial(ICE_MAT, BALL_MAT_C, { friction: 0.02, restitution: 0.15 }));
  Game.world.addContactMaterial(new CANNON.ContactMaterial(TRAMPOLINE_MAT, BALL_MAT_C, { friction: 0.3, restitution: 0.95 }));

  window.addEventListener('resize', onResize);

  // Initialize post-processing and VFX
  initPostProcessing(Game.renderer, Game.scene, Game.camera);
  createAimVisuals(Game.scene);
  initSkySystem();
}

function onResize() {
  Game.camera.aspect = window.innerWidth / window.innerHeight;
  Game.camera.updateProjectionMatrix();
  Game.renderer.setSize(window.innerWidth, window.innerHeight);
  Game.labelRenderer.setSize(window.innerWidth, window.innerHeight);
  resizePostProcessing(window.innerWidth, window.innerHeight);
}

function createTerrainTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  // Base grass green
  ctx.fillStyle = '#4a8c3f';
  ctx.fillRect(0, 0, 512, 512);

  // Noise layer 1: darker patches
  ctx.fillStyle = '#2d6b28';
  for (let i = 0; i < 4000; i++) {
    const x = Math.random() * 512;
    const y = Math.random() * 512;
    const r = Math.random() * 4 + 1;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }

  // Noise layer 2: lighter patches
  ctx.fillStyle = '#6abf5e';
  for (let i = 0; i < 3000; i++) {
    const x = Math.random() * 512;
    const y = Math.random() * 512;
    const r = Math.random() * 3 + 1;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }

  // Fine grain noise
  ctx.fillStyle = 'rgba(0,0,0,0.15)';
  for (let i = 0; i < 50000; i++) {
    const x = Math.random() * 512;
    const y = Math.random() * 512;
    ctx.fillRect(x, y, 1, 1);
  }

  // Mowing stripe patterns
  for (let y = 0; y < 512; y++) {
    const stripe = Math.sin(y * 0.12) * 0.5 + 0.5;
    ctx.fillStyle = stripe > 0.5 ? 'rgba(80,160,60,0.12)' : 'rgba(30,80,20,0.08)';
    ctx.fillRect(0, y, 512, 1);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(12, 12);
  
  // To avoid blurry look since it's procedural pixel noise
  texture.magFilter = THREE.NearestFilter;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  
  return texture;
}

function createGrassTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');

  // Base grass green
  ctx.fillStyle = '#5cb85c';
  ctx.fillRect(0, 0, 256, 256);

  // Small grass blades
  ctx.fillStyle = '#4a9c4a';
  for (let i = 0; i < 2000; i++) {
    const x = Math.random() * 256;
    const y = Math.random() * 256;
    ctx.fillRect(x, y, 2, 4);
  }

  // Lighter highlights
  ctx.fillStyle = '#6bc86b';
  for (let i = 0; i < 500; i++) {
    const x = Math.random() * 256;
    const y = Math.random() * 256;
    ctx.fillRect(x, y, 3, 3);
  }

  // Mowing stripe pattern
  for (let y = 0; y < 256; y++) {
    const stripe = Math.sin(y * 0.15) * 0.5 + 0.5;
    ctx.fillStyle = stripe > 0.5 ? 'rgba(90,180,70,0.1)' : 'rgba(40,100,30,0.07)';
    ctx.fillRect(0, y, 256, 1);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.magFilter = THREE.NearestFilter;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  
  return texture;
}

function createWoodTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');

  // Base wood color
  ctx.fillStyle = '#c8a96e';
  ctx.fillRect(0, 0, 256, 256);

  // Wood grain lines
  ctx.strokeStyle = '#a07850';
  ctx.lineWidth = 2;
  for (let i = 0; i < 30; i++) {
    const y = Math.random() * 256;
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(256, y + Math.random() * 10 - 5);
    ctx.stroke();
  }

  // Darker grain lines
  ctx.strokeStyle = '#7a5030';
  ctx.lineWidth = 1;
  for (let i = 0; i < 20; i++) {
    const y = Math.random() * 256;
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(256, y + Math.random() * 8 - 4);
    ctx.stroke();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.magFilter = THREE.NearestFilter;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  
  return texture;
}

function createLeafTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');

  // Base leaf color (slightly desaturated green)
  ctx.fillStyle = '#6bb86b';
  ctx.fillRect(0, 0, 256, 256);

  // Leaf shapes
  ctx.fillStyle = '#5aa85a';
  for (let i = 0; i < 150; i++) {
    const x = Math.random() * 256;
    const y = Math.random() * 256;
    ctx.beginPath();
    ctx.ellipse(x, y, 8, 4, Math.random() * Math.PI, 0, Math.PI * 2);
    ctx.fill();
  }

  // Lighter leaf highlights
  ctx.fillStyle = '#7cc87c';
  for (let i = 0; i < 80; i++) {
    const x = Math.random() * 256;
    const y = Math.random() * 256;
    ctx.beginPath();
    ctx.ellipse(x, y, 6, 3, Math.random() * Math.PI, 0, Math.PI * 2);
    ctx.fill();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.magFilter = THREE.NearestFilter;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  
  return texture;
}

function createSandTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');

  // Base sand color (warm beige)
  ctx.fillStyle = '#e6d5a8';
  ctx.fillRect(0, 0, 256, 256);

  // Sand grains
  ctx.fillStyle = '#d4c49a';
  for (let i = 0; i < 400; i++) {
    const x = Math.random() * 256;
    const y = Math.random() * 256;
    const size = Math.random() * 2 + 1;
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fill();
  }

  // Lighter sand highlights
  ctx.fillStyle = '#f0e0b8';
  for (let i = 0; i < 200; i++) {
    const x = Math.random() * 256;
    const y = Math.random() * 256;
    const size = Math.random() * 1.5 + 0.5;
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fill();
  }

  // Darker sand shadows
  ctx.fillStyle = '#c8b888';
  for (let i = 0; i < 150; i++) {
    const x = Math.random() * 256;
    const y = Math.random() * 256;
    const size = Math.random() * 1.5 + 0.5;
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fill();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.magFilter = THREE.NearestFilter;
  texture.minFilter = THREE.LinearMipmapLinearFilter;

  return texture;
}

function createShinyTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');

  // Base metallic color
  ctx.fillStyle = '#cccccc';
  ctx.fillRect(0, 0, 256, 256);

  // Shiny highlights
  ctx.fillStyle = '#ffffff';
  for (let i = 0; i < 100; i++) {
    const x = Math.random() * 256;
    const y = Math.random() * 256;
    ctx.beginPath();
    ctx.ellipse(x, y, 20, 8, Math.random() * Math.PI, 0, Math.PI * 2);
    ctx.fill();
  }

  // Darker reflections
  ctx.fillStyle = '#999999';
  for (let i = 0; i < 60; i++) {
    const x = Math.random() * 256;
    const y = Math.random() * 256;
    ctx.beginPath();
    ctx.ellipse(x, y, 15, 6, Math.random() * Math.PI, 0, Math.PI * 2);
    ctx.fill();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.magFilter = THREE.LinearFilter;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  
  return texture;
}

// ── Sky System ─────────────────────────────────────────────
const SkyDomeShader = {
  uniforms: {
    topColor: { value: new THREE.Color(0x0077ff) },
    bottomColor: { value: new THREE.Color(0xffffff) },
    offset: { value: 33 },
    exponent: { value: 0.6 },
    time: { value: 0 },
  },
  vertexShader: `
    varying vec3 vWorldPosition;
    void main() {
      vec4 worldPosition = modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPosition.xyz;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform vec3 topColor;
    uniform vec3 bottomColor;
    uniform float offset;
    uniform float exponent;
    uniform float time;
    varying vec3 vWorldPosition;
    void main() {
      float h = normalize(vWorldPosition + offset).y;
      gl_FragColor = vec4(mix(bottomColor, topColor, max(pow(max(h, 0.0), exponent), 0.0)), 1.0);
    }
  `,
};

export function initSkySystem() {
  // Sky dome
  const skyGeo = new THREE.SphereGeometry(800, 32, 15);
  const skyMat = new THREE.ShaderMaterial({
    uniforms: THREE.UniformsUtils.clone(SkyDomeShader.uniforms),
    vertexShader: SkyDomeShader.vertexShader,
    fragmentShader: SkyDomeShader.fragmentShader,
    side: THREE.BackSide,
  });
  Game.skyDome = new THREE.Mesh(skyGeo, skyMat);
  Game.scene.add(Game.skyDome);

  // Sun
  const sunGeo = new THREE.SphereGeometry(15, 32, 32);
  const sunMat = new THREE.MeshBasicMaterial({ color: 0xffff88 });
  Game.sunMesh = new THREE.Mesh(sunGeo, sunMat);
  Game.sunMesh.position.set(80, 120, 60);
  Game.scene.add(Game.sunMesh);

  // Sun glow (larger transparent sphere)
  const sunGlowGeo = new THREE.SphereGeometry(25, 32, 32);
  const sunGlowMat = new THREE.MeshBasicMaterial({
    color: 0xffffcc,
    transparent: true,
    opacity: 0.15,
  });
  const sunGlow = new THREE.Mesh(sunGlowGeo, sunGlowMat);
  Game.sunMesh.add(sunGlow);

  // Moon
  const moonGeo = new THREE.SphereGeometry(12, 32, 32);
  const moonMat = new THREE.MeshStandardMaterial({
    color: 0xdddddd,
    roughness: 0.9,
    metalness: 0.0,
  });
  Game.moonMesh = new THREE.Mesh(moonGeo, moonMat);
  Game.moonMesh.position.set(-80, 120, -60);
  Game.moonMesh.visible = false;
  Game.scene.add(Game.moonMesh);

  // Star field (particles)
  const starCount = 2000;
  const starGeo = new THREE.BufferGeometry();
  const starPositions = new Float32Array(starCount * 3);
  const starSizes = new Float32Array(starCount);

  for (let i = 0; i < starCount; i++) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.random() * Math.PI;
    const r = 600 + Math.random() * 150;

    starPositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    starPositions[i * 3 + 1] = r * Math.cos(phi);
    starPositions[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);
    starSizes[i] = 1 + Math.random() * 2;
  }

  starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
  starGeo.setAttribute('size', new THREE.BufferAttribute(starSizes, 1));

  const starMat = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 2,
    sizeAttenuation: true,
    transparent: true,
    opacity: 0,
  });
  Game.starField = new THREE.Points(starGeo, starMat);
  Game.scene.add(Game.starField);

  // Volumetric voxel clouds
  initClouds();
}

function initClouds() {
  const cloudCount = 15;
  const voxelSize = 8;
  const cloudMat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    roughness: 0.95,
    metalness: 0.0,
    transparent: true,
    opacity: 0.85,
  });

  for (let i = 0; i < cloudCount; i++) {
    const cloud = new THREE.Group();
    const voxelCount = 5 + Math.floor(Math.random() * 8);

    for (let j = 0; j < voxelCount; j++) {
      const voxel = new THREE.Mesh(
        new THREE.BoxGeometry(voxelSize, voxelSize * 0.6, voxelSize),
        cloudMat
      );
      voxel.position.set(
        (Math.random() - 0.5) * voxelSize * 4,
        (Math.random() - 0.5) * voxelSize * 1.5,
        (Math.random() - 0.5) * voxelSize * 4
      );
      voxel.rotation.set(
        Math.random() * 0.1,
        Math.random() * 0.1,
        Math.random() * 0.1
      );
      cloud.add(voxel);
    }

    cloud.position.set(
      (Math.random() - 0.5) * 400,
      80 + Math.random() * 40,
      (Math.random() - 0.5) * 400
    );
    cloud.userData = {
      speed: 0.02 + Math.random() * 0.03,
      baseY: cloud.position.y,
      phase: Math.random() * Math.PI * 2,
    };
    Game.scene.add(cloud);
    Game.clouds.push(cloud);
  }
}

export function updateSkySystem(dt, isNight) {
  Game.cloudTime += dt;

  // Update sky dome colors
  if (Game.skyDome) {
    const u = Game.skyDome.material.uniforms;
    if (isNight) {
      u.topColor.value.setHex(0x0a1020);
      u.bottomColor.value.setHex(0x1a1a3a);
    } else {
      u.topColor.value.setHex(0x4488ff);
      u.bottomColor.value.setHex(0xddeeff);
    }
    u.time.value = Game.cloudTime;
  }

  // Sun/moon visibility
  if (Game.sunMesh && Game.moonMesh) {
    Game.sunMesh.visible = !isNight;
    Game.moonMesh.visible = isNight;
  }

  // Star visibility (fade in/out)
  if (Game.starField) {
    const targetOpacity = isNight ? 0.8 : 0;
    Game.starField.material.opacity += (targetOpacity - Game.starField.material.opacity) * dt * 2;
  }

  // Animate clouds
  for (const cloud of Game.clouds) {
    cloud.position.x += cloud.userData.speed;
    if (cloud.position.x > 250) cloud.position.x = -250;
    cloud.position.y = cloud.userData.baseY + Math.sin(Game.cloudTime + cloud.userData.phase) * 2;
  }

  // Sync god rays sun position with sky sun
  if (Game.sunMesh && VFX.godRays) {
    VFX.godRays.sunPosition.copy(Game.sunMesh.position);
  }
}

export function cleanupSkySystem() {
  if (Game.skyDome) {
    Game.scene.remove(Game.skyDome);
    Game.skyDome.geometry.dispose();
    Game.skyDome.material.dispose();
    Game.skyDome = null;
  }
  if (Game.sunMesh) {
    Game.scene.remove(Game.sunMesh);
    Game.sunMesh.geometry.dispose();
    Game.sunMesh.material.dispose();
    Game.sunMesh = null;
  }
  if (Game.moonMesh) {
    Game.scene.remove(Game.moonMesh);
    Game.moonMesh.geometry.dispose();
    Game.moonMesh.material.dispose();
    Game.moonMesh = null;
  }
  if (Game.starField) {
    Game.scene.remove(Game.starField);
    Game.starField.geometry.dispose();
    Game.starField.material.dispose();
    Game.starField = null;
  }
  for (const cloud of Game.clouds) {
    Game.scene.remove(cloud);
    cloud.traverse((child) => {
      if (child.isMesh) {
        child.geometry.dispose();
        child.material.dispose();
      }
    });
  }
  Game.clouds = [];
}

export function buildTerrain() {
  if (Game.terrainMesh) {
    Game.scene.remove(Game.terrainMesh);
    Game.terrainMesh.geometry.dispose();
    Game.terrainMesh.material.dispose();
    Game.terrainMesh = null;
  }
  const geo = new THREE.PlaneGeometry(3000, 3000, 200, 200);
  geo.rotateX(-Math.PI / 2);
  const pos = geo.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), z = pos.getZ(i);
    const h = fbm(x * 0.05, z * 0.05) * 4 + fbm(x * 0.1, z * 0.1) * 2;
    pos.setY(i, h - 2);
  }
  geo.computeVertexNormals();

  const terrainTex = createTerrainTexture();
  const mat = new THREE.MeshStandardMaterial({
    color: 0xffffff, // Let texture drive color
    map: terrainTex,
    flatShading: true,
    roughness: 0.9
  });

  Game.terrainMesh = new THREE.Mesh(geo, mat);
  Game.terrainMesh.receiveShadow = true;
  Game.terrainMesh.position.y = -2;
  Game.scene.add(Game.terrainMesh);
}

export function applyDayNightCycle(timeOfDay) {
  const isNight = timeOfDay === 'night';

  // Sky color — set scene.background so post-processing captures it
  const skyColor = isNight ? 0x0a1828 : 0x87ceeb;
  Game.scene.background = new THREE.Color(skyColor);
  Game.scene.fog.color.setHex(isNight ? 0x0d1b2a : 0x87ceeb);
  Game.scene.fog.near = isNight ? 60 : 100;
  Game.scene.fog.far = isNight ? 200 : 350;

  // Update CSS background for sky gradient
  const bg = document.getElementById('game-container');
  if (bg) {
    if (isNight) {
      bg.style.background = 'radial-gradient(ellipse at 50% 0%, #0a1828 0%, #05101a 50%, #000000 100%)';
    } else {
      bg.style.background = 'radial-gradient(ellipse at 50% 0%, #fff8e0 0%, #ffe0a0 25%, #ffcc66 55%, #ffaa33 85%, #dd8822 100%)';
    }
  }

  // Find and update lights
  Game.scene.traverse((obj) => {
    if (obj.isAmbientLight) {
      obj.intensity = isNight ? 0.45 : 0.6;
      obj.color.setHex(isNight ? 0x5577aa : 0xffeedd);
    }
    if (obj.isDirectionalLight) {
      // Sun / Moon
      if (obj.castShadow) {
        obj.intensity = isNight ? 0.6 : 1.5;
        obj.color.setHex(isNight ? 0x99bbee : 0xffddaa);
      } 
      // Fill light
      else {
        obj.intensity = isNight ? 0.25 : 0.4;
        obj.color.setHex(isNight ? 0x5577aa : 0xffcc88);
      }
    }
    if (obj.isHemisphereLight) {
      obj.intensity = isNight ? 0.35 : 0.5;
      obj.color.setHex(isNight ? 0x334466 : 0xffdd99);
      obj.groundColor.setHex(isNight ? 0x1a1a33 : 0x886644);
    }
  });

  // Update terrain color for night
  if (Game.terrainMesh) {
    Game.terrainMesh.material.color.setHex(isNight ? 0x1a3a2a : 0x7aad5c);
  }

  // Update post-processing color grading
  setColorGrade(isNight, Game.renderer, Game.scene);
}

export function applyWindFromMapData(mapData) {
  if (mapData.wind) {
    Game.wind.x = mapData.wind.x || 0;
    Game.wind.z = mapData.wind.z || 0;
  } else {
    Game.wind.x = 0;
    Game.wind.z = 0;
  }
}

function onBouncePadCollision(e, padBody) {
  // Check if the colliding body is the local ball
  if (!Game.ballBody || e.body !== Game.ballBody) return;

  // Check if the ball is moving downward
  const vy = Game.ballBody.velocity.y;
  if (vy >= 0) return; // Only bounce if coming down

  // Double the downward velocity and send upward
  const bounceVelocity = -vy * 2;
  Game.ballBody.velocity.y = bounceVelocity;

  // Add a small boost to ensure it clears the pad
  Game.ballBody.position.y += 0.1;
}

function mt(color, type, rotation) {
  const hex = color.toString(16).toLowerCase();
  
  // Cylinders get shiny/metal texture
  if (type === 'cylinder') {
    return new THREE.MeshStandardMaterial({ 
      color: 0xffffff,
      map: createShinyTexture(),
      roughness: 0.15,
      metalness: 0.85,
      envMapIntensity: 1.0,
    });
  }
  
  // Boxes
  if (type === 'box') {
    // Bounce pad (orange color)
    if (hex === 'ff8800') {
      return new THREE.MeshStandardMaterial({
        color: 0xff8800,
        roughness: 0.5,
        metalness: 0.3,
        emissive: 0xff4400,
        emissiveIntensity: 0.2
      });
    }

    // Gravity inverter (purple color)
    if (hex === 'aa44ff') {
      return new THREE.MeshStandardMaterial({
        color: 0xaa44ff,
        roughness: 0.4,
        metalness: 0.5,
        emissive: 0x6622cc,
        emissiveIntensity: 0.3
      });
    }
    
    // Ice (light blue)
    if (hex === 'ccf2ff') {
      return new THREE.MeshStandardMaterial({
        color: 0xccf2ff, roughness: 0.05, metalness: 0.3,
        emissive: 0x88ccff, emissiveIntensity: 0.1,
      });
    }

    // Trampoline (pink)
    if (hex === 'ff66aa') {
      return new THREE.MeshStandardMaterial({
        color: 0xff66aa, roughness: 0.4, metalness: 0.2,
        emissive: 0xff2288, emissiveIntensity: 0.3,
      });
    }

    // Launcher (hot pink)
    if (hex === 'ff4488') {
      return new THREE.MeshStandardMaterial({
        color: 0xff4488, roughness: 0.3, metalness: 0.4,
        emissive: 0xff2266, emissiveIntensity: 0.4,
      });
    }

    // Cannon (dark red)
    if (hex === '882222') {
      return new THREE.MeshStandardMaterial({
        color: 0x882222, roughness: 0.6, metalness: 0.7,
      });
    }

    // Speed boost (green)
    if (hex === '44ff44') {
      return new THREE.MeshStandardMaterial({
        color: 0x44ff44, roughness: 0.3, metalness: 0.2,
        emissive: 0x22cc22, emissiveIntensity: 0.5,
      });
    }

    // Blower (light blue)
    if (hex === '88ddff') {
      return new THREE.MeshStandardMaterial({
        color: 0x88ddff, roughness: 0.4, metalness: 0.3,
        emissive: 0x44aadd, emissiveIntensity: 0.3,
      });
    }

    // Magnet (red)
    if (hex === 'cc2222') {
      return new THREE.MeshStandardMaterial({
        color: 0xcc2222, roughness: 0.5, metalness: 0.6,
        emissive: 0xcc0000, emissiveIntensity: 0.3,
      });
    }

    // Conveyor (orange-yellow)
    if (hex === 'ffaa00') {
      return new THREE.MeshStandardMaterial({
        color: 0xffaa00, roughness: 0.6, metalness: 0.3,
        emissive: 0xcc8800, emissiveIntensity: 0.2,
      });
    }

    // Teleporter (magenta)
    if (hex === 'ff44ff') {
      return new THREE.MeshStandardMaterial({
        color: 0xff44ff, roughness: 0.2, metalness: 0.4,
        emissive: 0xff22ff, emissiveIntensity: 0.6,
        transparent: true, opacity: 0.7,
      });
    }

    // Checkpoint (yellow)
    if (hex === 'ffff00') {
      return new THREE.MeshStandardMaterial({
        color: 0xffff00, roughness: 0.3, metalness: 0.2,
        emissive: 0xcccc00, emissiveIntensity: 0.4,
      });
    }

    // Bumper (bright red) - handled via cylinder path too
    if (hex === 'ff4444') {
      return new THREE.MeshStandardMaterial({
        color: 0xff4444, roughness: 0.3, metalness: 0.4,
        emissive: 0xff2222, emissiveIntensity: 0.5,
      });
    }

    // Spinner (blue)
    if (hex === '4488ff') {
      return new THREE.MeshStandardMaterial({
        color: 0x4488ff, roughness: 0.5, metalness: 0.4,
        emissive: 0x2266cc, emissiveIntensity: 0.2,
      });
    }

    // Door (brown)
    if (hex === '886644') {
      return new THREE.MeshStandardMaterial({
        color: 0x886644, roughness: 0.8, metalness: 0.1,
      });
    }

    // Wall / Barrier (white or warm sandy brown colors) - muted off-white
    if (hex === 'ffffff' || hex === '885533' || hex === 'a06a44' || hex === 'c8a96e') {
      return new THREE.MeshStandardMaterial({
        color: 0xe8e8e8,
        roughness: 0.85,
        metalness: 0.0,
        envMapIntensity: 0.15,
      });
    }
    
    // Ramp (has rotation on X or Z) - leaf texture
    if (rotation && (rotation[0] !== 0 || rotation[2] !== 0)) {
      return new THREE.MeshStandardMaterial({
        color: 0xe8e8e8,
        map: createLeafTexture(),
        roughness: 0.9,
        metalness: 0.0,
        envMapIntensity: 0.2,
      });
    }

    // Sand (beige color)
    if (hex === 'e6d5a8') {
      return new THREE.MeshStandardMaterial({
        color: 0xe8e0d0,
        map: createSandTexture(),
        roughness: 0.95,
        metalness: 0.0,
        envMapIntensity: 0.1,
      });
    }

    // Default box (fairway/grass) - grass texture
    return new THREE.MeshStandardMaterial({ 
      color: 0xd8e8d0,
      map: createGrassTexture(),
      roughness: 0.85,
      metalness: 0.0,
      envMapIntensity: 0.15,
    });
  }
  
  // Default generic material
  return new THREE.MeshStandardMaterial({ 
    color, 
    roughness: 0.7,
    metalness: 0.1
  });
}

function addPiece(g, c, p, r, type = 'box') {
  const geo = new THREE.BoxGeometry(g[0], g[1], g[2]);
  const mat = mt(c, 'box', r);
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.set(p[0], p[1], p[2]);
  if (r) mesh.rotation.set(r[0], r[1], r[2]);
  mesh.castShadow = true; mesh.receiveShadow = true;
  mesh.userData.pieceType = type; // Store type for later reference
  Game.scene.add(mesh); Game.courseMeshes.push(mesh);

  // Pick physics material based on type
  const hex = c.toString(16).toLowerCase();
  const isSand = hex === 'e6d5a8' || type === 'sand';
  const isIce = type === 'ice';
  const isTrampoline = type === 'trampoline';
  const bodyMat = isSand ? SAND_MAT : isIce ? ICE_MAT : isTrampoline ? TRAMPOLINE_MAT : GROUND_MAT;

  const body = new CANNON.Body({ mass: 0, material: bodyMat });
  body.addShape(new CANNON.Box(new CANNON.Vec3(g[0] / 2, g[1] / 2, g[2] / 2)));
  body.position.set(p[0], p[1], p[2]);
  if (r) {
    const q = new THREE.Quaternion().setFromEuler(new THREE.Euler(r[0], r[1], r[2]));
    body.quaternion.set(q.x, q.y, q.z, q.w);
  }
  Game.world.addBody(body); Game.courseBodies.push(body);
  return mesh;
}

function addCyl(rt, rb, h, seg, c, p) {
  const geo = new THREE.CylinderGeometry(rt, rb, h, seg);
  const mesh = new THREE.Mesh(geo, mt(c, 'cylinder', null));
  mesh.position.set(p[0], p[1], p[2]);
  mesh.castShadow = true; mesh.receiveShadow = true;
  Game.scene.add(mesh); Game.courseMeshes.push(mesh);
  const body = new CANNON.Body({ mass: 0, material: GROUND_MAT });
  body.addShape(new CANNON.Cylinder(rt, rb, h, seg));
  body.position.set(p[0], p[1], p[2]);
  Game.world.addBody(body); Game.courseBodies.push(body);
}

export let mapManifest = [];

function parseColor(c) {
  if (typeof c === 'number') return c;
  if (typeof c === 'string') return parseInt(c.replace('#', ''), 16);
  return 0xffffff;
}

// Generic helper for decorative/custom-geometry pieces
function addDecorPiece(p, threeGeo, cannonShape) {
  const color = parseColor(p.color);
  const isGlass = p.type === 'glass';
  const mat = isGlass
    ? new THREE.MeshPhysicalMaterial({ color, roughness: 0.05, metalness: 0.1, transparent: true, opacity: 0.35, clearcoat: 1 })
    : new THREE.MeshStandardMaterial({ color, roughness: 0.7, metalness: 0.1 });
  const mesh = new THREE.Mesh(threeGeo, mat);
  mesh.position.set(p.position[0], p.position[1], p.position[2]);
  if (p.rotation) mesh.rotation.set(p.rotation[0], p.rotation[1], p.rotation[2]);
  mesh.castShadow = true; mesh.receiveShadow = true;
  mesh.userData.pieceType = p.type;
  Game.scene.add(mesh); Game.courseMeshes.push(mesh);

  const body = new CANNON.Body({ mass: 0, material: GROUND_MAT });
  body.addShape(cannonShape);
  body.position.set(p.position[0], p.position[1], p.position[2]);
  if (p.rotation) {
    const q = new THREE.Quaternion().setFromEuler(new THREE.Euler(p.rotation[0], p.rotation[1], p.rotation[2]));
    body.quaternion.set(q.x, q.y, q.z, q.w);
  }
  Game.world.addBody(body); Game.courseBodies.push(body);
  return mesh;
}

// ── Custom Geometry Helpers (game) ───────────────────────
function createStepGeo(width, totalH, depth, n) {
  const geos = [];
  const sH = totalH / n, sD = depth / n;
  for (let i = 0; i < n; i++) {
    const g = new THREE.BoxGeometry(width, sH, sD);
    g.translate(0, sH * i + sH / 2, -sD * i - sD / 2);
    geos.push(g);
  }
  return mergeGeos(geos);
}

function createBridgeGeo(w, thick, len, archH) {
  const segs = 12, hw = w / 2, positions = [], indices = [];
  for (let i = 0; i <= segs; i++) {
    const t = i / segs, z = (t - 0.5) * len, y = Math.sin(t * Math.PI) * archH;
    positions.push(-hw, y, z, hw, y, z, -hw, y - thick, z, hw, y - thick, z);
  }
  for (let i = 0; i < segs; i++) {
    const a = i * 4;
    indices.push(a,a+4,a+5, a,a+5,a+1, a+2,a+7,a+6, a+2,a+3,a+7, a,a+2,a+6, a,a+6,a+4, a+1,a+5,a+7, a+1,a+7,a+3);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.setIndex(indices);
  geo.computeVertexNormals();
  return geo;
}

function createTubeGeo(outerR, innerR, h, segs) {
  const pts = [new THREE.Vector2(innerR,0), new THREE.Vector2(outerR,0), new THREE.Vector2(outerR,h), new THREE.Vector2(innerR,h)];
  return new THREE.LatheGeometry(pts, segs);
}

function mergeGeos(geos) {
  let tv = 0;
  for (const g of geos) tv += g.attributes.position.count;
  const pos = new Float32Array(tv * 3), idx = [];
  let off = 0;
  for (const g of geos) {
    pos.set(g.attributes.position.array, off * 3);
    if (g.index) for (let i = 0; i < g.index.count; i++) idx.push(g.index.array[i] + off);
    off += g.attributes.position.count;
  }
  const m = new THREE.BufferGeometry();
  m.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  if (idx.length) m.setIndex(idx);
  m.computeVertexNormals();
  return m;
}

export function buildCourseFromJSON(data) {
  Game.movingPieces = [];
  Game.specialPieces = [];
  const BOX_TYPES = ['box','sand','bouncepad','gravinv','ramp','wall','ice','trampoline',
    'launcher','cannon','speedboost','blower','magnet','conveyor','spinner','windmill',
    'door','teleporter','checkpoint','killbrick'];

  for (const p of data.pieces) {
    let mesh, bodyIdx;
    if (BOX_TYPES.includes(p.type) && p.size) {
      mesh = addPiece(p.size, parseColor(p.color), p.position, p.rotation || [0, 0, 0], p.type);
      bodyIdx = Game.courseBodies.length - 1;
    } else if (p.type === 'glass' && p.size) {
      mesh = addPiece(p.size, parseColor(p.color), p.position, p.rotation || [0, 0, 0], 'glass');
      bodyIdx = Game.courseBodies.length - 1;
      // Override material for glass
      mesh.material = new THREE.MeshPhysicalMaterial({
        color: parseColor(p.color), roughness: 0.02, metalness: 0.1,
        transparent: true, opacity: 0.35, clearcoat: 1.0, clearcoatRoughness: 0.02,
        envMapIntensity: 1.8, transmission: 0.6, ior: 1.45,
      });
    } else if (p.type === 'rail' && p.size) {
      mesh = addPiece(p.size, parseColor(p.color), p.position, p.rotation || [0, 0, 0], 'rail');
      bodyIdx = Game.courseBodies.length - 1;
    } else if (p.type === 'step' && p.size) {
      mesh = addDecorPiece(p, createStepGeo(p.size[0], p.size[1], p.size[2], p.steps || 3),
        new CANNON.Box(new CANNON.Vec3(p.size[0]/2, p.size[1]/2, p.size[2]/2)));
      bodyIdx = Game.courseBodies.length - 1;
    } else if (p.type === 'bridge' && p.size) {
      mesh = addDecorPiece(p, createBridgeGeo(p.size[0], p.size[1], p.size[2], p.archHeight || 1.5),
        new CANNON.Box(new CANNON.Vec3(p.size[0]/2, (p.archHeight||1.5)/2, p.size[2]/2)));
      bodyIdx = Game.courseBodies.length - 1;
    } else if (p.type === 'sphere' || p.type === 'dome' || p.type === 'curvedhill') {
      const r = p.radius || 1;
      mesh = addDecorPiece(p, new THREE.SphereGeometry(r, p.segments || 16, p.segments || 16),
        new CANNON.Sphere(r));
      bodyIdx = Game.courseBodies.length - 1;
    } else if (p.type === 'cone' || p.type === 'pyramid') {
      const r = p.radius || 1, h = p.height || 2;
      mesh = addDecorPiece(p, new THREE.ConeGeometry(r, h, p.segments || 16),
        new CANNON.Cylinder(0.01, r, h, p.segments || 8));
      bodyIdx = Game.courseBodies.length - 1;
    } else if (p.type === 'torus') {
      const r = p.radius || 1.5, t = p.tube || 0.3;
      mesh = addDecorPiece(p, new THREE.TorusGeometry(r, t, p.tubeSeg || 12, p.segments || 16),
        new CANNON.Sphere(r + t)); // Approximate with sphere
      bodyIdx = Game.courseBodies.length - 1;
    } else if (p.type === 'halfpipe') {
      const r = p.radius || 3, l = p.length || 6;
      const hpGeo = new THREE.CylinderGeometry(r, r, l, p.segments || 16, 1, true, 0, Math.PI);
      hpGeo.rotateX(Math.PI / 2);
      mesh = addDecorPiece(p, hpGeo,
        new CANNON.Box(new CANNON.Vec3(r, r/2, l/2)));
      bodyIdx = Game.courseBodies.length - 1;
    } else if (p.type === 'tube') {
      const or = p.radiusOuter || 1, h = p.height || 3;
      mesh = addDecorPiece(p, createTubeGeo(or, p.radiusInner || 0.7, h, p.segments || 16),
        new CANNON.Cylinder(or, or, h, p.segments || 8));
      bodyIdx = Game.courseBodies.length - 1;
    } else if (p.type === 'pointlight') {
      const color = parseColor(p.color);
      const light = new THREE.PointLight(color, p.intensity || 1, p.range || 15);
      light.position.set(p.position[0], p.position[1], p.position[2]);
      Game.scene.add(light);
      Game.lights.push(light);
      // Visual representation
      const geo = new THREE.SphereGeometry(0.3, 16, 16);
      const mat = new THREE.MeshStandardMaterial({
        color, emissive: color, emissiveIntensity: 0.8,
        roughness: 0.2, metalness: 0.5
      });
      mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(p.position[0], p.position[1], p.position[2]);
      Game.scene.add(mesh);
      Game.courseMeshes.push(mesh);
    } else if (p.type === 'spotlight') {
      const color = parseColor(p.color);
      const light = new THREE.SpotLight(color, p.intensity || 1, p.range || 20, p.angle || 0.5, p.penumbra || 0.3);
      light.position.set(p.position[0], p.position[1], p.position[2]);
      if (p.rotation) {
        const dir = new THREE.Vector3(0, 0, -1).applyEuler(new THREE.Euler(p.rotation[0], p.rotation[1], p.rotation[2]));
        light.target.position.copy(light.position).add(dir);
        Game.scene.add(light.target);
      }
      Game.scene.add(light);
      Game.lights.push(light, light.target);
      // Visual representation (cone)
      const geo = new THREE.ConeGeometry(0.4, 0.8, 16);
      geo.rotateX(Math.PI / 2);
      const mat = new THREE.MeshStandardMaterial({
        color, emissive: color, emissiveIntensity: 0.8,
        roughness: 0.2, metalness: 0.5
      });
      mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(p.position[0], p.position[1], p.position[2]);
      if (p.rotation) mesh.rotation.set(p.rotation[0], p.rotation[1], p.rotation[2]);
      Game.scene.add(mesh);
      Game.courseMeshes.push(mesh);
    } else if (p.type === 'laser') {
      const color = parseColor(p.color);
      // Laser beam visual (emissive cylinder)
      const geo = new THREE.CylinderGeometry(p.width || 0.1, p.width || 0.1, p.length || 10, 8);
      geo.rotateX(Math.PI / 2);
      const mat = new THREE.MeshStandardMaterial({
        color, emissive: color, emissiveIntensity: 1.0,
        roughness: 0.1, metalness: 0.8, transparent: true, opacity: 0.8
      });
      mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(p.position[0], p.position[1], p.position[2]);
      if (p.rotation) mesh.rotation.set(p.rotation[0], p.rotation[1], p.rotation[2]);
      Game.scene.add(mesh);
      Game.courseMeshes.push(mesh);
      // Add actual light for glow effect
      const light = new THREE.PointLight(color, 0.5, 5);
      light.position.copy(mesh.position);
      Game.scene.add(light);
      Game.lights.push(light);
    } else if (p.type === 'cylinder') {
      addCyl(p.radiusTop, p.radiusBottom, p.height, p.segments || 8, parseColor(p.color), p.position);
      bodyIdx = Game.courseBodies.length - 1;
      mesh = Game.courseMeshes[Game.courseMeshes.length - 1];
    } else if (p.type === 'bumper') {
      addCyl(p.radiusTop, p.radiusBottom, p.height, p.segments || 16, parseColor(p.color), p.position);
      bodyIdx = Game.courseBodies.length - 1;
      mesh = Game.courseMeshes[Game.courseMeshes.length - 1];
      mesh.userData.pieceType = 'bumper';
    } else continue;

    // Bounce pad
    if (p.type === 'bouncepad') {
      const body = Game.courseBodies[bodyIdx];
      body.addEventListener('collide', (e) => onBouncePadCollision(e, body));
    }

    // Launcher — launch ball straight up
    if (p.type === 'launcher') {
      const body = Game.courseBodies[bodyIdx];
      const force = p.launchForce || 20;
      body.addEventListener('collide', (e) => {
        if (e.body === Game.ballBody) {
          Game.ballBody.velocity.y = force;
        }
      });
    }

    // Cannon — launch ball in the direction the piece faces (negative Z in local space)
    if (p.type === 'cannon') {
      const body = Game.courseBodies[bodyIdx];
      const force = p.launchForce || 25;
      const rot = p.rotation || [0, 0, 0];
      const dir = new THREE.Vector3(0, 0.3, -1).applyEuler(new THREE.Euler(rot[0], rot[1], rot[2])).normalize();
      body.addEventListener('collide', (e) => {
        if (e.body === Game.ballBody) {
          Game.ballBody.velocity.set(dir.x * force, dir.y * force, dir.z * force);
        }
      });
    }

    // Speed boost — accelerate ball in piece's forward direction
    if (p.type === 'speedboost') {
      const body = Game.courseBodies[bodyIdx];
      const force = p.boostForce || 12;
      const rot = p.rotation || [0, 0, 0];
      const dir = new THREE.Vector3(0, 0, -1).applyEuler(new THREE.Euler(rot[0], rot[1], rot[2])).normalize();
      body.addEventListener('collide', (e) => {
        if (e.body === Game.ballBody) {
          Game.ballBody.velocity.x += dir.x * force;
          Game.ballBody.velocity.z += dir.z * force;
        }
      });
    }

    // Bumper — bounce ball away from center
    if (p.type === 'bumper') {
      const body = Game.courseBodies[bodyIdx];
      const force = p.bumperForce || 12;
      body.addEventListener('collide', (e) => {
        if (e.body === Game.ballBody) {
          const dx = Game.ballBody.position.x - body.position.x;
          const dz = Game.ballBody.position.z - body.position.z;
          const len = Math.sqrt(dx * dx + dz * dz) || 1;
          Game.ballBody.velocity.x = (dx / len) * force;
          Game.ballBody.velocity.z = (dz / len) * force;
          Game.ballBody.velocity.y = Math.max(Game.ballBody.velocity.y, 2);
        }
      });
    }

    // Store special pieces for per-frame logic
    if (['blower', 'magnet', 'conveyor', 'teleporter', 'checkpoint', 'gravinv'].includes(p.type)) {
      Game.specialPieces.push({
        type: p.type,
        position: [...p.position],
        size: p.size ? [...p.size] : [1, 1, 1],
        rotation: p.rotation || [0, 0, 0],
        // Type-specific data
        blowDir: p.blowDir, blowForce: p.blowForce,
        magnetForce: p.magnetForce, magnetRadius: p.magnetRadius,
        conveyorDir: p.conveyorDir, conveyorSpeed: p.conveyorSpeed,
        target: p.target,
        mesh, body: Game.courseBodies[bodyIdx],
      });
    }

    if (p.motion) {
      const body = Game.courseBodies[bodyIdx];
      body.type = CANNON.Body.KINEMATIC;
      body.mass = 0;
      Game.movingPieces.push({
        mesh, body,
        origin: [...p.position],
        originRot: p.rotation ? [...p.rotation] : [0, 0, 0],
        motion: p.motion,
      });
    }
  }

  // Water zones
  Game.waterZones = [];
  if (data.pieces) {
    for (const p of data.pieces) {
      if (p.type === 'water') {
        const geo = new THREE.BoxGeometry(p.size[0], 0.05, p.size[2]);
        const mat = new THREE.MeshPhysicalMaterial({
          color: 0x1e8cff, transparent: true, opacity: 0.6,
          roughness: 0.05, metalness: 0.0,
          clearcoat: 1.0, clearcoatRoughness: 0.0,
          reflectivity: 1.0, envMapIntensity: 1.2,
          side: THREE.DoubleSide,
        });
        const waterMesh = new THREE.Mesh(geo, mat);
        waterMesh.position.set(p.position[0], p.position[1], p.position[2]);
        waterMesh.receiveShadow = true;
        Game.scene.add(waterMesh);
        Game.courseMeshes.push(waterMesh);
        Game.waterZones.push({
          mesh: waterMesh,
          min: [p.position[0] - p.size[0] / 2, p.position[1] - p.size[1] / 2, p.position[2] - p.size[2] / 2],
          max: [p.position[0] + p.size[0] / 2, p.position[1] + p.size[1] / 2, p.position[2] + p.size[2] / 2],
        });
      }
    }
  }
}

let gameTime = 0;

export function updateMovingPieces(dt) {
  gameTime += dt;
  for (const mp of Game.movingPieces) {
    const m = mp.motion;
    const val = Math.sin((gameTime * m.speed * Math.PI * 2) + (m.phase || 0) * Math.PI * 2) * m.range;
    const axisMap = { x: 0, y: 1, z: 2 };
    const ai = axisMap[m.axis] ?? 0;

    if (m.type === 'translate') {
      const pos = [...mp.origin];
      pos[ai] += val;
      mp.mesh.position.set(pos[0], pos[1], pos[2]);
      mp.body.position.set(pos[0], pos[1], pos[2]);
    } else if (m.type === 'rotate') {
      const rot = [...mp.originRot];
      rot[ai] += val * (Math.PI / 180);
      mp.mesh.rotation.set(rot[0], rot[1], rot[2]);
      const q = new THREE.Quaternion().setFromEuler(new THREE.Euler(rot[0], rot[1], rot[2]));
      mp.body.quaternion.set(q.x, q.y, q.z, q.w);
    }
  }
}

export async function fetchMapManifest() {
  try {
    const res = await fetch('/maps/manifest.json');
    mapManifest = await res.json();
  } catch (e) {
    console.error('Failed to fetch map manifest:', e);
    mapManifest = [];
  }
  return mapManifest;
}

export async function fetchMap(filename) {
  const res = await fetch('/maps/' + filename);
  return res.json();
}

export async function getRandomMaps(count = 3) {
  if (mapManifest.length === 0) await fetchMapManifest();
  const maps = [];
  const indices = [];
  // Pick random indices
  while (indices.length < Math.min(count, mapManifest.length)) {
    const idx = Math.floor(Math.random() * mapManifest.length);
    if (!indices.includes(idx)) indices.push(idx);
  }
  // Fetch only those maps
  for (let i = 0; i < indices.length; i++) {
    const mapData = await fetchMap(mapManifest[indices[i]]);
    maps.push({ ...mapData, _originalIndex: indices[i] });
  }
  return maps;
}

export async function getAllMapData() {
  if (mapManifest.length === 0) await fetchMapManifest();
  const maps = [];
  for (let i = 0; i < mapManifest.length; i++) {
    maps.push(await fetchMap(mapManifest[i]));
  }
  return maps;
}

export function clearCourse() {
  for (const m of Game.courseMeshes) Game.scene.remove(m);
  for (const b of Game.courseBodies) Game.world.removeBody(b);
  for (const l of Game.lights) Game.scene.remove(l);
  Game.courseMeshes = []; Game.courseBodies = []; Game.lights = [];

  // Clear trail
  if (Game.trailLine) {
    Game.scene.remove(Game.trailLine);
    Game.trailLine.geometry.dispose();
    Game.trailLine = null;
  }
  Game.trailPoints = [];

  // Clear rain
  destroyRainSystem();
  Game.rainEnabled = false;

  // Clear VFX particles
  cleanupVFX(Game.scene);
  Game.prevBallSpeed = 0;
  Game.specialPieces = [];
}

export async function buildCourseByIndex(idx) {
  clearCourse();
  if (mapManifest.length === 0) await fetchMapManifest();
  Game.currentCourseIndex = idx;
  const data = await fetchMap(mapManifest[idx]);

  Game.startPosition.set(data.start[0], data.start[1], data.start[2]);
  Game.holePosition.set(data.hole[0], data.hole[1], data.hole[2]);
  buildCourseFromJSON(data);

  // Apply day/night cycle
  applyDayNightCycle(data.timeOfDay || 'day');
  
  // Apply wind from map data
  applyWindFromMapData(data);
  
  // Set time limit
  Game.timeLimit = data.timeLimit !== undefined ? data.timeLimit : 120;
  Game.remainingTime = Game.timeLimit;

  const holeMesh = new THREE.Mesh(
    new THREE.CylinderGeometry(Game.holeRadius, Game.holeRadius, 0.02, 32), 
    new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 1.0 })
  );
  holeMesh.position.copy(Game.holePosition).add(new THREE.Vector3(0, 0.01, 0));
  holeMesh.receiveShadow = true;
  Game.scene.add(holeMesh); Game.courseMeshes.push(holeMesh);

  // Add glowing rim to hole (bloom-visible)
  const rimMesh = new THREE.Mesh(
    new THREE.TorusGeometry(Game.holeRadius, 0.04, 16, 32),
    new THREE.MeshStandardMaterial({ color: 0x44ffaa, emissive: 0x44ffaa, emissiveIntensity: 1.5 })
  );
  rimMesh.position.copy(Game.holePosition).add(new THREE.Vector3(0, 0.02, 0));
  rimMesh.rotation.x = Math.PI / 2;
  Game.scene.add(rimMesh); Game.courseMeshes.push(rimMesh);

  const pole = new THREE.Mesh(
    new THREE.CylinderGeometry(0.04, 0.04, 2, 8), 
    new THREE.MeshStandardMaterial({ color: 0xcccccc, metalness: 0.8, roughness: 0.2 })
  );
  pole.position.copy(Game.holePosition).add(new THREE.Vector3(0, 1, 0));
  pole.castShadow = true; Game.scene.add(pole); Game.courseMeshes.push(pole);
  
  const flag = new THREE.Mesh(
    new THREE.BoxGeometry(0.6, 0.35, 0.02), 
    new THREE.MeshStandardMaterial({ color: 0xff3333, roughness: 0.9 })
  );
  flag.position.copy(Game.holePosition).add(new THREE.Vector3(0.3, 1.8, 0));
  flag.castShadow = true; Game.scene.add(flag); Game.courseMeshes.push(flag);

  // Invisible large hitbox for hole (easier to trigger win)
  const holeHitbox = new CANNON.Body({
    mass: 0,
    isTrigger: true, // Sensor body - no physical collision
    position: new CANNON.Vec3(Game.holePosition.x, Game.holePosition.y + 0.83, Game.holePosition.z)
  });
  holeHitbox.addShape(new CANNON.Cylinder(0.83, 0.83, 1.67, 8));
  Game.world.addBody(holeHitbox);
  Game.courseBodies.push(holeHitbox);
  holeHitbox.addEventListener('collide', (e) => {
    if (e.body === Game.ballBody && !Game.hasFinished) {
      Game.hasFinished = true;
      Game.elapsedTime = (Date.now() - Game.timerStart) / 1000;

      if (Game.ball) {
        Game.ball.visible = false;
        Game.ballBody.velocity.setZero();
        Game.ballBody.angularVelocity.setZero();
      }
      Game.trailPoints = [];

      spawnHoleConfetti(Game.scene, new THREE.Vector3().copy(Game.holePosition));
      if (Game.onFinishHole) Game.onFinishHole();
    }
  });

  buildTerrain();
  
  return data; // Return for wind indicator update
}

export function renderMapThumbnail(mapData) {
  const w = 320, h = 200;
  const thumbScene = new THREE.Scene();
  thumbScene.fog = new THREE.Fog(0x87ceeb, 80, 280);
  thumbScene.background = new THREE.Color(0x87ceeb);
  
  const sun = new THREE.DirectionalLight(0xffddaa, 1.5);
  sun.position.set(15, 35, 15);
  thumbScene.add(sun);
  thumbScene.add(new THREE.AmbientLight(0xffeedd, 0.6));

  const fillLight = new THREE.DirectionalLight(0xffcc88, 0.4);
  fillLight.position.set(-20, 20, -20);
  thumbScene.add(fillLight);
  
  thumbScene.add(new THREE.HemisphereLight(0xffdd99, 0x886644, 0.5));

  for (const p of mapData.pieces) {
    let geo, color = parseColor(p.color);
    let mat = mt(color, p.type, p.rotation);
    
    if (p.type === 'box') {
      geo = new THREE.BoxGeometry(p.size[0], p.size[1], p.size[2]);
    } else if (p.type === 'cylinder') {
      geo = new THREE.CylinderGeometry(p.radiusTop, p.radiusBottom, p.height, p.segments || 8);
    } else continue;
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(p.position[0], p.position[1], p.position[2]);
    if (p.rotation) mesh.rotation.set(p.rotation[0], p.rotation[1], p.rotation[2]);
    thumbScene.add(mesh);
  }

  const cx = (mapData.start[0] + mapData.hole[0]) / 2;
  const cy = Math.max(mapData.start[1], mapData.hole[1]);
  const cz = (mapData.start[2] + mapData.hole[2]) / 2;
  const dist = Math.abs(mapData.start[2] - mapData.hole[2]) * 0.7 + 10;

  const cam = new THREE.PerspectiveCamera(50, w / h, 0.1, 300);
  cam.position.set(cx + dist * 0.4, cy + dist * 0.5, cz + dist * 0.6);
  cam.lookAt(cx, cy - 2, cz);

  const thumbRenderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
  thumbRenderer.setSize(w, h);
  thumbRenderer.setClearColor(0x87ceeb);
  thumbRenderer.render(thumbScene, cam);
  const dataUrl = thumbRenderer.domElement.toDataURL('image/png');
  thumbRenderer.dispose();
  return dataUrl;
}

export async function loadMenuBackground() {
  if (mapManifest.length === 0) await fetchMapManifest();
  const idx = Math.floor(Math.random() * mapManifest.length);
  const data = await fetchMap(mapManifest[idx]);
  clearCourse();
  buildCourseFromJSON(data);
  buildTerrain();
  applyDayNightCycle(data.timeOfDay || 'day');

  // Enable rain if map has it or is test.json
  const mapName = (data.name || '').toLowerCase();
  setRainEnabled(data.rain || (mapName === 'test'));

  const cx = (data.start[0] + data.hole[0]) / 2;
  const cy = Math.max(data.start[1], data.hole[1]);
  const cz = (data.start[2] + data.hole[2]) / 2;
  Game.camera.position.set(cx + 20, cy + 12, cz + 20);
  Game.controls.target.set(cx, cy - 2, cz);
  Game.controls.update();
  Game.menuBgCenter = { x: cx, y: cy, z: cz };
}

export function updateMenuCamera(time) {
  if (!Game.menuBgCenter) return;
  const c = Game.menuBgCenter;
  const r = 28;
  Game.camera.position.x = c.x + Math.cos(time * 0.15) * r;
  Game.camera.position.z = c.z + Math.sin(time * 0.15) * r;
  Game.camera.position.y = c.y + 14 + Math.sin(time * 0.1) * 3;
  Game.controls.target.set(c.x, c.y - 2, c.z);
  Game.controls.update();
}

export function createLocalBall(color) {
  const c = color !== undefined ? color : Game.ballColor;

  // Apply glow effect if enabled
  const glowMat = Game.glowIntensity > 0
    ? new THREE.MeshStandardMaterial({
        color: c,
        emissive: c,
        emissiveIntensity: Game.glowIntensity / 100,
        flatShading: true
      })
    : new THREE.MeshStandardMaterial({ color: c, flatShading: true });

  Game.ball = new THREE.Mesh(
    new THREE.SphereGeometry(BALL_RADIUS, 16, 16),
    glowMat
  );
  Game.ball.castShadow = true; Game.scene.add(Game.ball);

  // Add hat if enabled
  if (Game.hat && Game.hat !== 'none') {
    Game.hatMesh = createHatMesh(Game.hat, c);
    Game.ball.add(Game.hatMesh);
  }

  Game.ballBody = new CANNON.Body({
    mass: 1, shape: new CANNON.Sphere(BALL_RADIUS), material: BALL_MAT_C,
    linearDamping: 0.3, angularDamping: 0.4,
  });
  Game.ballBody.position.set(Game.startPosition.x, Game.startPosition.y, Game.startPosition.z);
  Game.world.addBody(Game.ballBody);
  Game.hasFinished = false; Game.spectatorMode = false;
  Game.swings = 0; Game.timerStart = Date.now(); Game.elapsedTime = 0;
  Game.lastSafePosition.copy(Game.startPosition);
  Game.lastSwingPosition.copy(Game.startPosition);
  Game.waterSplashed = false;
}

function createHatMesh(hatType, ballColor) {
  const group = new THREE.Group();
  const mat = new THREE.MeshStandardMaterial({ color: 0x333333, roughness: 0.7 });

  if (hatType === 'tophat') {
    // Top hat cylinder
    const brim = new THREE.Mesh(
      new THREE.CylinderGeometry(0.18, 0.18, 0.02, 16),
      mat
    );
    brim.position.y = 0.2;
    group.add(brim);

    const top = new THREE.Mesh(
      new THREE.CylinderGeometry(0.1, 0.1, 0.15, 16),
      mat
    );
    top.position.y = 0.28;
    group.add(top);
  } else if (hatType === 'baseball') {
    // Baseball cap
    const brim = new THREE.Mesh(
      new THREE.CylinderGeometry(0.18, 0.18, 0.02, 16),
      mat
    );
    brim.position.y = 0.19;
    group.add(brim);

    const dome = new THREE.Mesh(
      new THREE.SphereGeometry(0.12, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2),
      mat
    );
    dome.position.y = 0.19;
    group.add(dome);

    // Visor
    const visor = new THREE.Mesh(
      new THREE.BoxGeometry(0.2, 0.02, 0.08),
      mat
    );
    visor.position.set(0, 0.19, 0.12);
    visor.rotation.x = -0.3;
    group.add(visor);
  } else if (hatType === 'beanie') {
    // Beanie
    const beanie = new THREE.Mesh(
      new THREE.SphereGeometry(0.13, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2),
      new THREE.MeshStandardMaterial({ color: ballColor, roughness: 0.8 })
    );
    beanie.position.y = 0.18;
    group.add(beanie);

    // Fold at bottom
    const fold = new THREE.Mesh(
      new THREE.TorusGeometry(0.13, 0.02, 8, 16),
      new THREE.MeshStandardMaterial({ color: ballColor, roughness: 0.8 })
    );
    fold.position.y = 0.18;
    fold.rotation.x = Math.PI / 2;
    group.add(fold);
  }

  return group;
}

export function updateBallAppearance(hat, glowIntensity, trailEnabled, trailColor) {
  Game.hat = hat;
  Game.glowIntensity = glowIntensity;
  Game.trailEnabled = trailEnabled === 'on';
  Game.trailColor = trailColor || '#ffffff';

  if (Game.ball) {
    // Update material for glow
    const c = Game.ball.material.color.getHex();
    Game.ball.material.dispose();
    Game.ball.material = Game.glowIntensity > 0
      ? new THREE.MeshStandardMaterial({
          color: c,
          emissive: c,
          emissiveIntensity: Game.glowIntensity / 100,
          flatShading: true
        })
      : new THREE.MeshStandardMaterial({ color: c, flatShading: true });

    // Update hat
    if (Game.hatMesh) {
      Game.ball.remove(Game.hatMesh);
      Game.hatMesh = null;
    }

    if (Game.hat && Game.hat !== 'none') {
      Game.hatMesh = createHatMesh(Game.hat, c);
      Game.ball.add(Game.hatMesh);
    }
  }

  // Clear trail if disabled
  if (!Game.trailEnabled && Game.trailLine) {
    Game.scene.remove(Game.trailLine);
    Game.trailLine.geometry.dispose();
    Game.trailLine = null;
    Game.trailPoints = [];
  }
}

export function setRainEnabled(enabled) {
  Game.rainEnabled = enabled;
  if (enabled) {
    createRainSystem();
  } else {
    destroyRainSystem();
  }
}

function createRainSystem() {
  if (Game.rainDrops.length > 0) return;

  const rainCount = 500;
  for (let i = 0; i < rainCount; i++) {
    const drop = new THREE.Mesh(
      new THREE.CylinderGeometry(0.02, 0.02, 0.3, 4),
      new THREE.MeshBasicMaterial({ color: 0x88aacc, transparent: true, opacity: 0.4 })
    );
    drop.position.set(
      (Math.random() - 0.5) * 60,
      Math.random() * 30,
      (Math.random() - 0.5) * 60
    );
    drop.rotation.x = Math.PI / 2;
    drop.userData.speed = 0.5 + Math.random() * 0.3;
    Game.scene.add(drop);
    Game.rainDrops.push(drop);
  }
}

function destroyRainSystem() {
  for (const drop of Game.rainDrops) {
    Game.scene.remove(drop);
    drop.geometry.dispose();
    drop.material.dispose();
  }
  Game.rainDrops = [];
}

export function resetLocalBall() {
  if (!Game.ballBody) return;
  Game.ballBody.position.set(Game.lastSwingPosition.x, Game.lastSwingPosition.y, Game.lastSwingPosition.z);
  Game.ballBody.velocity.setZero(); Game.ballBody.angularVelocity.setZero();

  // Clear trail on reset
  if (Game.trailLine) {
    Game.scene.remove(Game.trailLine);
    Game.trailLine.geometry.dispose();
    Game.trailLine = null;
  }
  Game.trailPoints = [];
}

export function addRemoteBall(playerId, color, playerName) {
  // Prevent duplicate additions due to race conditions
  if (Game.remoteBalls[playerId]) return;
  if (Game.addingPlayers.has(playerId)) return;
  Game.addingPlayers.add(playerId);

  const c = color || 0x4488ff;
  const mesh = new THREE.Mesh(
    new THREE.SphereGeometry(BALL_RADIUS, 16, 16),
    new THREE.MeshStandardMaterial({ color: c, flatShading: true })
  );
  mesh.castShadow = true; mesh.position.copy(Game.startPosition); Game.scene.add(mesh);
  const labelDiv = document.createElement('div');
  labelDiv.className = 'player-label';
  labelDiv.textContent = playerName || 'Player';
  labelDiv.style.color = '#' + c.toString(16).padStart(6, '0');
  const label = new CSS2DObject(labelDiv);
  label.position.set(0, BALL_RADIUS + 0.5, 0);
  mesh.add(label);
  Game.remoteBalls[playerId] = {
    mesh, label,
    targetPos: new THREE.Vector3().copy(Game.startPosition),
    targetVel: new THREE.Vector3(), lastUpdate: Date.now(),
  };

  Game.addingPlayers.delete(playerId);
}

export function removeRemoteBall(pid) {
  const rb = Game.remoteBalls[pid]; if (!rb) return;
  Game.scene.remove(rb.mesh); delete Game.remoteBalls[pid];
}

export function updateRemoteBallState(pid, pos, vel, ts) {
  const rb = Game.remoteBalls[pid]; if (!rb) return;
  rb.targetPos.set(pos.x, pos.y, pos.z);
  rb.targetVel.set(vel.x, vel.y, vel.z);
  rb.lastUpdate = ts || Date.now();
}

function interpolateRemoteBalls(dt) {
  const now = Date.now();
  for (const rb of Object.values(Game.remoteBalls)) {
    const elapsed = (now - rb.lastUpdate) / 1000;
    const predicted = rb.targetPos.clone().add(rb.targetVel.clone().multiplyScalar(elapsed));
    rb.mesh.position.lerp(predicted, Math.min(1, dt * 12));
  }
}

export function setupInput() {
  const cvs = Game.renderer.domElement;
  cvs.addEventListener('mousedown', (e) => {
    if (e.button !== 0 || Game.hasFinished || Game.spectatorMode || !Game.ballBody) return;
    const v = Game.ballBody.velocity;
    if (Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z) > 1.5) return;
    Game.isDragging = true;
    Game.dragStart = { x: e.clientX, y: e.clientY };
    Game.dragCurrent = { x: e.clientX, y: e.clientY };
  });
  cvs.addEventListener('mousemove', (e) => {
    if (!Game.isDragging) return;
    Game.dragCurrent = { x: e.clientX, y: e.clientY };
    updateDragVis();
  });
  window.addEventListener('mouseup', (e) => {
    if (e.button !== 0 || !Game.isDragging) return;
    Game.isDragging = false;
    fireDrag(); clearDragVis();
  });
}

function getDragDir() {
  const dx = Game.dragCurrent.x - Game.dragStart.x;
  const dy = Game.dragCurrent.y - Game.dragStart.y;
  const dist = Math.sqrt(dx * dx + dy * dy);
  const ratio = Math.min(dist / 200, 1);
  const forward = new THREE.Vector3();
  Game.camera.getWorldDirection(forward); forward.y = 0; forward.normalize();
  const right = new THREE.Vector3().crossVectors(forward, new THREE.Vector3(0, 1, 0)).normalize();
  
  // Slingshot style: drag down/back to shoot forward
  // dy > 0 (drag down) → shoot forward (positive forward direction)
  // dx > 0 (drag right) → shoot left (negative right direction)
  const worldDir = new THREE.Vector3().addScaledVector(forward, dy / 200).addScaledVector(right, -dx / 200);
  worldDir.y = 0;
  return { ratio, worldDir: worldDir.length() > 0.01 ? worldDir.normalize() : null };
}

function updateDragVis() {
  const { ratio, worldDir } = getDragDir();
  if (Game.onDragChanged) Game.onDragChanged(ratio, true);
  if (!Game.ballBody || !worldDir || ratio < 0.02) { clearDragVis(); return; }
  const bp = new THREE.Vector3().copy(Game.ballBody.position);
  
  // Use VFX aim visuals: dotted pulsing line + ground power ring
  updateAimVisuals(bp, worldDir, ratio, Game.vfxTime);
}

function clearDragVis() {
  if (Game.dragArrow) { 
    Game.scene.remove(Game.dragArrow); 
    Game.dragArrow = null; 
  }
  hideAimVisuals();
  if (Game.onDragChanged) Game.onDragChanged(0, false);
}

function fireDrag() {
  if (!Game.ballBody || Game.hasFinished) return;
  const { ratio, worldDir } = getDragDir();
  if (ratio < 0.05 || !worldDir) return;
  // Save position before swing
  Game.lastSwingPosition.copy(Game.ballBody.position);
  const power = ratio * Game.maxPower;
  Game.ballBody.velocity.x += worldDir.x * power;
  Game.ballBody.velocity.z += worldDir.z * power;
  Game.swings++;
  if (Game.onSwingCountChanged) Game.onSwingCountChanged(Game.swings);

  // Spawn hit dust particles
  spawnHitDust(Game.scene, new THREE.Vector3().copy(Game.ballBody.position));
}

function checkWin() {
  if (Game.hasFinished || !Game.ballBody) return;
  const bp = Game.ballBody.position;
  const dx = bp.x - Game.holePosition.x, dz = bp.z - Game.holePosition.z;
  if (Math.sqrt(dx * dx + dz * dz) < Game.holeRadius && bp.y < Game.holePosition.y) {
    Game.hasFinished = true;
    Game.elapsedTime = (Date.now() - Game.timerStart) / 1000;

    // Clear trail on finish
    if (Game.trailLine) {
      Game.scene.remove(Game.trailLine);
      Game.trailLine.geometry.dispose();
      Game.trailLine = null;
    }
    Game.trailPoints = [];

    // Spawn hole-in confetti
    spawnHoleConfetti(Game.scene, new THREE.Vector3().copy(Game.holePosition));

    if (Game.onFinishHole) Game.onFinishHole();
  }
}

export function showChatBubble(playerId, text, colorHex) {
  const mesh = playerId === 'local' ? Game.ball :
    (Game.remoteBalls[playerId] ? Game.remoteBalls[playerId].mesh : null);
  if (!mesh) return;

  // Remove existing bubble if any
  const existing = mesh.userData.chatBubble;
  if (existing) {
    mesh.remove(existing);
    if (existing.userData.fadeTimeout) clearTimeout(existing.userData.fadeTimeout);
  }

  const div = document.createElement('div');
  div.className = 'chat-bubble';
  div.textContent = text;
  div.style.borderLeftColor = colorHex || '#ffffff';
  const label = new CSS2DObject(div);
  label.position.set(0, BALL_RADIUS + 1.2, 0);
  mesh.add(label);
  mesh.userData.chatBubble = label;

  label.userData.fadeTimeout = setTimeout(() => {
    div.classList.add('chat-bubble-fade');
    setTimeout(() => {
      if (mesh.userData.chatBubble === label) {
        mesh.remove(label);
        mesh.userData.chatBubble = null;
      }
    }, 500);
  }, 4500);
}

export function enterSpectator() {
  Game.spectatorMode = true;
  Game.controls.mouseButtons = { LEFT: null, MIDDLE: THREE.MOUSE.DOLLY, RIGHT: THREE.MOUSE.ROTATE };
  if (Game.ball) Game.ball.visible = false;
}

export function exitSpectator() {
  Game.spectatorMode = false;
  Game.controls.mouseButtons = { LEFT: null, MIDDLE: THREE.MOUSE.DOLLY, RIGHT: THREE.MOUSE.ROTATE };
  if (Game.ball) Game.ball.visible = true;
}

export function updateGame(dt) {
  Game.vfxTime += dt;

  if (!Game.hasFinished && Game.timerStart) {
    Game.elapsedTime = (Date.now() - Game.timerStart) / 1000;
    Game.remainingTime = Math.max(0, Game.timeLimit - Game.elapsedTime);
    
    if (Game.onTimeUpdate) Game.onTimeUpdate(Game.remainingTime);

    if (Game.remainingTime <= 0 && !Game.hasFinished) {
      Game.hasFinished = true;
      if (Game.onTimeUp) Game.onTimeUp();
    }
  }

  if (Game.ballBody && !Game.hasFinished && (Game.wind.x !== 0 || Game.wind.z !== 0)) {
    Game.ballBody.applyForce(new CANNON.Vec3(Game.wind.x, 0, Game.wind.z), Game.ballBody.position);
  }

  // Process special pieces (blower, magnet, conveyor, teleporter, checkpoint, gravinv)
  if (Game.ballBody && !Game.hasFinished && Game.specialPieces) {
    const bp = Game.ballBody.position;
    for (const sp of Game.specialPieces) {
      const halfX = sp.size[0] / 2;
      const halfY = sp.size[1] / 2;
      const halfZ = sp.size[2] / 2;
      const px = sp.position[0], py = sp.position[1], pz = sp.position[2];

      if (sp.type === 'gravinv') {
        if (bp.x >= px - halfX && bp.x <= px + halfX &&
            bp.z >= pz - halfZ && bp.z <= pz + halfZ &&
            bp.y >= py - halfY && bp.y <= py + halfY + 5) {
          Game.ballBody.velocity.y = Math.max(Game.ballBody.velocity.y, 12);
          Game.ballBody.velocity.x *= 0.95;
          Game.ballBody.velocity.z *= 0.95;
        }
      }

      if (sp.type === 'blower') {
        const range = 6;
        const dx = bp.x - px, dy = bp.y - py, dz = bp.z - pz;
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < range) {
          const strength = (sp.blowForce || 8) * (1 - dist / range);
          const dir = sp.blowDir || [0, 0, -1];
          Game.ballBody.velocity.x += dir[0] * strength * dt;
          Game.ballBody.velocity.y += dir[1] * strength * dt;
          Game.ballBody.velocity.z += dir[2] * strength * dt;
        }
      }

      if (sp.type === 'magnet') {
        const radius = sp.magnetRadius || 5;
        const dx = px - bp.x, dy = py - bp.y, dz = pz - bp.z;
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < radius && dist > 0.3) {
          const strength = (sp.magnetForce || 6) * (1 - dist / radius);
          Game.ballBody.velocity.x += (dx / dist) * strength * dt;
          Game.ballBody.velocity.y += (dy / dist) * strength * dt;
          Game.ballBody.velocity.z += (dz / dist) * strength * dt;
        }
      }

      if (sp.type === 'conveyor') {
        // Only affect ball when it's on top of the conveyor
        if (bp.x >= px - halfX && bp.x <= px + halfX &&
            bp.z >= pz - halfZ && bp.z <= pz + halfZ &&
            bp.y >= py + halfY - 0.3 && bp.y <= py + halfY + 0.8) {
          const dir = sp.conveyorDir || [0, 0, -1];
          const speed = sp.conveyorSpeed || 5;
          Game.ballBody.velocity.x += dir[0] * speed * dt;
          Game.ballBody.velocity.z += dir[2] * speed * dt;
        }
      }

      if (sp.type === 'teleporter') {
        if (bp.x >= px - halfX && bp.x <= px + halfX &&
            bp.z >= pz - halfZ && bp.z <= pz + halfZ &&
            bp.y >= py - 0.5 && bp.y <= py + 1.5 && sp.target) {
          // Cooldown check to prevent rapid re-teleporting
          const now = Date.now();
          if (!sp._lastTeleport || now - sp._lastTeleport > 1500) {
            sp._lastTeleport = now;
            Game.ballBody.position.set(sp.target[0], sp.target[1], sp.target[2]);
            Game.ballBody.velocity.setZero();
          }
        }
      }

      if (sp.type === 'checkpoint') {
        if (bp.x >= px - halfX && bp.x <= px + halfX &&
            bp.z >= pz - halfZ && bp.z <= pz + halfZ &&
            bp.y >= py - 0.5 && bp.y <= py + 1.0) {
          Game.lastSwingPosition.set(px, py + 0.5, pz);
        }
      }
    }
  }

  Game.world.step(1 / 60, dt, 3);
  if (Game.ball && Game.ballBody && !Game.hasFinished) {
    Game.ball.position.copy(Game.ballBody.position);
    Game.ball.quaternion.copy(Game.ballBody.quaternion);

    // Update trail
    if (Game.trailEnabled && Game.ballBody) {
      Game.trailPoints.push(Game.ballBody.position.clone());
      if (Game.trailPoints.length > 100) Game.trailPoints.shift();

      if (Game.trailPoints.length > 1) {
        if (Game.trailLine) {
          Game.scene.remove(Game.trailLine);
          Game.trailLine.geometry.dispose();
        }

        const points = Game.trailPoints;
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const material = new THREE.LineBasicMaterial({
          color: Game.trailColor,
          transparent: true,
          opacity: 0.6
        });
        Game.trailLine = new THREE.Line(geometry, material);
        Game.scene.add(Game.trailLine);
      }
    }

    // Animate rain
    if (Game.rainEnabled && Game.rainDrops.length > 0) {
      for (const drop of Game.rainDrops) {
        drop.position.y -= drop.userData.speed;
        if (drop.position.y < Game.courseBaseY - 10) {
          drop.position.y = 30;
          drop.position.x = Game.ballBody.position.x + (Math.random() - 0.5) * 40;
          drop.position.z = Game.ballBody.position.z + (Math.random() - 0.5) * 40;
        }
      }
    }
    if (Game.ballBody.position.y < Game.courseBaseY - 3) {
      // Reset to last swing position instead of start
      Game.ballBody.position.set(
        Game.lastSwingPosition.x,
        Game.lastSwingPosition.y,
        Game.lastSwingPosition.z
      );
      Game.ballBody.velocity.setZero();
      Game.ballBody.angularVelocity.setZero();
    }
  }
  // Track last safe position (when ball is on a surface and not in water)
  if (Game.ballBody && !Game.hasFinished) {
    const vel = Game.ballBody.velocity;
    const speed = Math.sqrt(vel.x * vel.x + vel.y * vel.y + vel.z * vel.z);
    if (speed < 2 && !Game.waterSplashed) {
      let inWater = false;
      const bp = Game.ballBody.position;
      for (const wz of Game.waterZones) {
        if (bp.x >= wz.min[0] && bp.x <= wz.max[0] &&
            bp.y >= wz.min[1] - 0.5 && bp.y <= wz.max[1] + 0.5 &&
            bp.z >= wz.min[2] && bp.z <= wz.max[2]) {
          inWater = true; break;
        }
      }
      if (!inWater) {
        Game.lastSafePosition.copy(Game.ballBody.position);
      }
    }
    // Check water splash
    if (!Game.waterSplashed) {
      const bp2 = Game.ballBody.position;
      for (const wz of Game.waterZones) {
        if (bp2.x >= wz.min[0] && bp2.x <= wz.max[0] &&
            bp2.y <= wz.max[1] + 0.3 && bp2.y >= wz.min[1] - 1 &&
            bp2.z >= wz.min[2] && bp2.z <= wz.max[2]) {
          Game.waterSplashed = true;
          Game.ballBody.velocity.setZero();
          Game.ballBody.angularVelocity.setZero();
          spawnSplashParticles(bp2);
          setTimeout(() => {
            Game.ballBody.position.set(
              Game.lastSafePosition.x, Game.lastSafePosition.y + 0.5, Game.lastSafePosition.z
            );
            Game.ballBody.velocity.setZero();
            Game.ballBody.angularVelocity.setZero();
            Game.swings++;
            if (Game.onSwingCountChanged) Game.onSwingCountChanged(Game.swings);
            if (Game.onWaterSplash) Game.onWaterSplash();
            Game.waterSplashed = false;
          }, 800);
          break;
        }
      }
    }
  }
  // Wall collision detection for sparks + camera shake
  if (Game.ballBody && !Game.hasFinished) {
    const vel = Game.ballBody.velocity;
    const currentSpeed = Math.sqrt(vel.x * vel.x + vel.y * vel.y + vel.z * vel.z);
    
    // Detect sudden speed drop = wall collision
    const speedDrop = Game.prevBallSpeed - currentSpeed;
    if (speedDrop > 4 && Game.prevBallSpeed > 5) {
      spawnWallSparks(Game.scene, new THREE.Vector3().copy(Game.ballBody.position), speedDrop);
      triggerCameraShake(Math.min(speedDrop * 0.04, 0.5));
    }
    Game.prevBallSpeed = currentSpeed;

    // Update all VFX systems (particles, camera shake, dynamic FOV, speed lines)
    updateAllVFX(dt, Game.scene, Game.camera, currentSpeed);
  } else {
    updateAllVFX(dt, Game.scene, Game.camera, 0);
  }

  interpolateRemoteBalls(dt);
  if (Game.ball && !Game.spectatorMode) {
    // Compute current offset from target to camera (preserves user's orbit angle)
    const offset = new THREE.Vector3().subVectors(Game.camera.position, Game.controls.target);
    // Snap target to ball
    Game.controls.target.copy(Game.ball.position);
    // Move camera by same offset so it stays locked at same angle/distance
    Game.camera.position.copy(Game.ball.position).add(offset);
  }
  Game.controls.update();

  // Update sky system (determine night from scene background color)
  const isNight = Game.scene.background && Game.scene.background.getHex() === 0x0a1828;
  updateSkySystem(dt, isNight);

  checkWin();
}

function spawnSplashParticles(pos) {
  const count = 12;
  for (let i = 0; i < count; i++) {
    const geo = new THREE.SphereGeometry(0.06, 4, 4);
    const mat = new THREE.MeshBasicMaterial({ color: 0x4db8ff, transparent: true, opacity: 0.8 });
    const p = new THREE.Mesh(geo, mat);
    p.position.set(pos.x, pos.y + 0.1, pos.z);
    Game.scene.add(p);
    const vx = (Math.random() - 0.5) * 3;
    const vy = Math.random() * 4 + 2;
    const vz = (Math.random() - 0.5) * 3;
    const start = Date.now();
    function animate() {
      const t = (Date.now() - start) / 1000;
      if (t > 0.8) { Game.scene.remove(p); return; }
      p.position.x += vx * 0.016;
      p.position.y += (vy - 15 * t) * 0.016;
      p.position.z += vz * 0.016;
      mat.opacity = 0.8 * (1 - t / 0.8);
      requestAnimationFrame(animate);
    }
    animate();
  }
}

export function renderGame() {
  renderWithPostProcessing(Game.renderer, Game.scene, Game.camera);
  Game.labelRenderer.render(Game.scene, Game.camera);
}

export function resetGameState() {
  for (const pid of Object.keys(Game.remoteBalls)) removeRemoteBall(pid);
  Game.addingPlayers.clear();
  if (Game.ball) { Game.scene.remove(Game.ball); Game.ball = null; }
  if (Game.ballBody) { Game.world.removeBody(Game.ballBody); Game.ballBody = null; }
  clearDragVis(); exitSpectator();
  Game.swings = 0; Game.elapsedTime = 0; Game.hasFinished = false;
}

export function destroyScene() {
  window.removeEventListener('resize', onResize);
  cleanupAimVisuals(Game.scene);
  cleanupVFX(Game.scene);
  cleanupSkySystem();
  if (Game.renderer) Game.renderer.dispose();
}
