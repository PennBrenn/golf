import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js';
import { MP, getPlayerById } from './network.js';

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
  holePosition: new THREE.Vector3(), holeRadius: 0.6,
  startPosition: new THREE.Vector3(), courseBaseY: 8,
  isDragging: false, dragStart: { x: 0, y: 0 }, dragCurrent: { x: 0, y: 0 },
  dragArrow: null, maxPower: 20,
  swings: 0, timerStart: 0, elapsedTime: 0, timeLimit: 120, remainingTime: 120,
  hasFinished: false, spectatorMode: false, currentCourseIndex: -1,
  wind: { x: 0, z: 0 },
  waterZones: [], lastSafePosition: new THREE.Vector3(), waterSplashed: false,
  onSwingCountChanged: null, onTimeUpdate: null, onTimeUp: null,
  onFinishHole: null, onDragChanged: null, onWaterSplash: null,
};

const BALL_RADIUS = 0.2;
const GROUND_MAT = new CANNON.Material('ground');
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
  Game.scene.fog = new THREE.Fog(0x87ceeb, 20, 150);

  const aspect = window.innerWidth / window.innerHeight;
  Game.camera = new THREE.PerspectiveCamera(60, aspect, 0.1, 1000);

  // Allow transparent background so CSS sky gradient shows through
  Game.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  Game.renderer.setSize(window.innerWidth, window.innerHeight);
  Game.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  Game.renderer.shadowMap.enabled = true;
  Game.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  Game.renderer.setClearColor(0x000000, 0); // Transparent
  container.appendChild(Game.renderer.domElement);

  Game.labelRenderer = new CSS2DRenderer();
  Game.labelRenderer.setSize(window.innerWidth, window.innerHeight);
  Game.labelRenderer.domElement.style.position = 'absolute';
  Game.labelRenderer.domElement.style.top = '0';
  Game.labelRenderer.domElement.style.pointerEvents = 'none';
  container.appendChild(Game.labelRenderer.domElement);

  Game.scene = new THREE.Scene();
  Game.scene.fog = new THREE.Fog(0x87ceeb, 50, 150);
  Game.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 300);
  Game.camera.position.set(0, 15, 20);

  Game.controls = new OrbitControls(Game.camera, Game.renderer.domElement);
  Game.controls.enableDamping = true;
  Game.controls.dampingFactor = 0.1;
  Game.controls.minDistance = 2;
  Game.controls.maxDistance = 50;
  Game.controls.mouseButtons = { LEFT: THREE.MOUSE.ROTATE, MIDDLE: THREE.MOUSE.DOLLY, RIGHT: THREE.MOUSE.PAN };
  Game.controls.touches = { ONE: THREE.MOUSE.ROTATE, TWO: THREE.TOUCH.DOLLY_ROTATE };

  // Improved Lighting
  const sun = new THREE.DirectionalLight(0xfff5e0, 1.2);
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

  const ambientLight = new THREE.AmbientLight(0xb0d8f0, 0.45);
  Game.scene.add(ambientLight);

  const fillLight = new THREE.DirectionalLight(0x88ccff, 0.3);
  fillLight.position.set(-40, 30, -40);
  Game.scene.add(fillLight);

  const groundBounce = new THREE.HemisphereLight(0x88cc66, 0x334422, 0.4);
  Game.scene.add(groundBounce);

  Game.clock = new THREE.Clock();
  Game.world = new CANNON.World({ gravity: new CANNON.Vec3(0, -15, 0) });
  Game.world.broadphase = new CANNON.SAPBroadphase(Game.world);
  Game.world.allowSleep = false;
  Game.world.addContactMaterial(new CANNON.ContactMaterial(GROUND_MAT, BALL_MAT_C, { friction: 0.4, restitution: 0.3 }));

  window.addEventListener('resize', onResize);
}

function onResize() {
  Game.camera.aspect = window.innerWidth / window.innerHeight;
  Game.camera.updateProjectionMatrix();
  Game.renderer.setSize(window.innerWidth, window.innerHeight);
  Game.labelRenderer.setSize(window.innerWidth, window.innerHeight);
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

export function buildTerrain() {
  if (Game.terrainMesh) {
    Game.scene.remove(Game.terrainMesh);
    Game.terrainMesh.geometry.dispose();
    Game.terrainMesh.material.dispose();
    Game.terrainMesh = null;
  }
  const geo = new THREE.PlaneGeometry(300, 300, 60, 60);
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
  
  // Sky color (fog only, background is transparent to show CSS gradient)
  const skyColor = isNight ? 0x0a1828 : 0x87ceeb;
  Game.scene.fog.color.setHex(skyColor);
  
  // Update CSS background for sky gradient
  const bg = document.getElementById('game-container');
  if (bg) {
    if (isNight) {
      bg.style.background = 'radial-gradient(ellipse at 50% 0%, #0a1828 0%, #05101a 50%, #000000 100%)';
    } else {
      bg.style.background = 'radial-gradient(ellipse at 50% 0%, #b8f0ff 0%, #72d4f0 25%, #3ab8e0 55%, #1a7aaa 85%, #0d4a70 100%)';
    }
  }

  // Find and update lights
  Game.scene.traverse((obj) => {
    if (obj.isAmbientLight) {
      obj.intensity = isNight ? 0.20 : 0.45;
      obj.color.setHex(isNight ? 0x446688 : 0xb0d8f0);
    }
    if (obj.isDirectionalLight) {
      // Sun
      if (obj.castShadow) {
        obj.intensity = isNight ? 0.3 : 1.2;
        obj.color.setHex(isNight ? 0x88aadd : 0xfff5e0);
      } 
      // Fill light
      else {
        obj.intensity = isNight ? 0.1 : 0.3;
        obj.color.setHex(isNight ? 0x224466 : 0x88ccff);
      }
    }
    if (obj.isHemisphereLight) {
      obj.intensity = isNight ? 0.15 : 0.4;
      obj.color.setHex(isNight ? 0x224455 : 0x88cc66);
      obj.groundColor.setHex(isNight ? 0x112211 : 0x334422);
    }
  });

  // Update terrain color for night
  if (Game.terrainMesh) {
    Game.terrainMesh.material.color.setHex(isNight ? 0x1a3a2a : 0x4a8c3f);
  }
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

function mt(color, type, rotation) {
  const hex = color.toString(16).toLowerCase();
  
  // Cylinders get shiny/metal texture
  if (type === 'cylinder') {
    return new THREE.MeshStandardMaterial({ 
      color: 0xffffff,
      map: createShinyTexture(),
      roughness: 0.2,
      metalness: 0.8
    });
  }
  
  // Boxes
  if (type === 'box') {
    // Wall / Barrier (white or warm sandy brown colors) - white
    if (hex === 'ffffff' || hex === '885533' || hex === 'a06a44' || hex === 'c8a96e') {
      return new THREE.MeshStandardMaterial({ 
        color: 0xffffff,
        roughness: 0.7,
        metalness: 0.1
      });
    }
    
    // Ramp (has rotation on X or Z) - leaf texture
    if (rotation && (rotation[0] !== 0 || rotation[2] !== 0)) {
      return new THREE.MeshStandardMaterial({ 
        color: 0xffffff,
        map: createLeafTexture(),
        roughness: 0.85,
        metalness: 0.0
      });
    }
    
    // Default box (fairway/grass) - grass texture
    return new THREE.MeshStandardMaterial({ 
      color: 0xffffff,
      map: createGrassTexture(),
      roughness: 0.8,
      metalness: 0.0
    });
  }
  
  // Default generic material
  return new THREE.MeshStandardMaterial({ 
    color, 
    roughness: 0.7,
    metalness: 0.1
  });
}

function addPiece(g, c, p, r) {
  const geo = new THREE.BoxGeometry(g[0], g[1], g[2]);
  const mat = mt(c, 'box', r);
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.set(p[0], p[1], p[2]);
  if (r) mesh.rotation.set(r[0], r[1], r[2]);
  mesh.castShadow = true; mesh.receiveShadow = true;
  Game.scene.add(mesh); Game.courseMeshes.push(mesh);
  const body = new CANNON.Body({ mass: 0, material: GROUND_MAT });
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

let mapManifest = [];

function parseColor(c) {
  if (typeof c === 'number') return c;
  if (typeof c === 'string') return parseInt(c.replace('#', ''), 16);
  return 0xffffff;
}

function buildCourseFromJSON(data) {
  Game.movingPieces = [];
  for (const p of data.pieces) {
    let mesh, bodyIdx;
    if (p.type === 'box') {
      mesh = addPiece(p.size, parseColor(p.color), p.position, p.rotation || [0, 0, 0]);
      bodyIdx = Game.courseBodies.length - 1;
    } else if (p.type === 'cylinder') {
      addCyl(p.radiusTop, p.radiusBottom, p.height, p.segments || 8, parseColor(p.color), p.position);
      bodyIdx = Game.courseBodies.length - 1;
      mesh = Game.courseMeshes[Game.courseMeshes.length - 1];
    } else continue;

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
        const mat = new THREE.MeshStandardMaterial({
          color: 0x1e8cff, transparent: true, opacity: 0.55,
          flatShading: true, side: THREE.DoubleSide,
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
    const res = await fetch('/api/maps');
    mapManifest = await res.json();
  } catch (e) {
    console.warn('Could not load map list, using fallback');
    mapManifest = ['straight_fairway.json', 'dogleg_right.json', 'zigzag.json'];
  }
  return mapManifest;
}

export async function fetchMap(filename) {
  const res = await fetch('/maps/' + filename);
  return res.json();
}

export async function getAllMapData() {
  if (mapManifest.length === 0) await fetchMapManifest();
  const maps = [];
  for (const f of mapManifest) {
    maps.push(await fetchMap(f));
  }
  return maps;
}

export function clearCourse() {
  for (const m of Game.courseMeshes) Game.scene.remove(m);
  for (const b of Game.courseBodies) Game.world.removeBody(b);
  Game.courseMeshes = []; Game.courseBodies = [];
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

  // Add subtle glowing rim to hole
  const rimMesh = new THREE.Mesh(
    new THREE.TorusGeometry(Game.holeRadius, 0.03, 16, 32),
    new THREE.MeshStandardMaterial({ color: 0x111111, emissive: 0x001a20, emissiveIntensity: 0.5 })
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

  buildTerrain();
  
  return data; // Return for wind indicator update
}

export function renderMapThumbnail(mapData) {
  const w = 320, h = 200;
  const thumbScene = new THREE.Scene();
  thumbScene.fog = new THREE.Fog(0x87ceeb, 50, 150);
  thumbScene.background = new THREE.Color(0x87ceeb);
  
  const sun = new THREE.DirectionalLight(0xfff5e0, 1.2);
  sun.position.set(15, 35, 15);
  thumbScene.add(sun);
  thumbScene.add(new THREE.AmbientLight(0xb0d8f0, 0.45));
  
  const fillLight = new THREE.DirectionalLight(0x88ccff, 0.3);
  fillLight.position.set(-20, 20, -20);
  thumbScene.add(fillLight);
  
  thumbScene.add(new THREE.HemisphereLight(0x88cc66, 0x334422, 0.4));

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
  Game.ball = new THREE.Mesh(
    new THREE.SphereGeometry(BALL_RADIUS, 16, 16),
    new THREE.MeshStandardMaterial({ color: c, flatShading: true })
  );
  Game.ball.castShadow = true; Game.scene.add(Game.ball);
  Game.ballBody = new CANNON.Body({
    mass: 1, shape: new CANNON.Sphere(BALL_RADIUS), material: BALL_MAT_C,
    linearDamping: 0.3, angularDamping: 0.4,
  });
  Game.ballBody.position.set(Game.startPosition.x, Game.startPosition.y, Game.startPosition.z);
  Game.world.addBody(Game.ballBody);
  Game.hasFinished = false; Game.spectatorMode = false;
  Game.swings = 0; Game.timerStart = Date.now(); Game.elapsedTime = 0;
  Game.lastSafePosition.copy(Game.startPosition);
  Game.waterSplashed = false;
}

export function resetLocalBall() {
  if (!Game.ballBody) return;
  Game.ballBody.position.set(Game.startPosition.x, Game.startPosition.y, Game.startPosition.z);
  Game.ballBody.velocity.setZero(); Game.ballBody.angularVelocity.setZero();
}

export function addRemoteBall(playerId, color, playerName) {
  if (Game.remoteBalls[playerId]) return;
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
  
  if (Game.dragArrow) Game.scene.remove(Game.dragArrow);
  
  // Create cone - base at ball, tip at power point
  const length = ratio * 4 + 0.5;
  const baseRadius = BALL_RADIUS; // Cone base diameter = ball diameter
  
  const geo = new THREE.ConeGeometry(baseRadius, length, 16);
  // Shift geometry so the base is at the origin instead of the center
  geo.translate(0, length / 2, 0);

  const mat = new THREE.MeshBasicMaterial({ 
    color: 0xffffff, 
    transparent: true, 
    opacity: 0.75,
    side: THREE.DoubleSide
  });
  
  Game.dragArrow = new THREE.Mesh(geo, mat);
  
  // Position cone: base exactly at ball
  Game.dragArrow.position.copy(bp);
  
  // Align cone with shoot direction
  // The translated Cone points exactly along +Y, so we align +Y with worldDir
  const up = new THREE.Vector3(0, 1, 0);
  const quaternion = new THREE.Quaternion();
  quaternion.setFromUnitVectors(up, worldDir);
  Game.dragArrow.setRotationFromQuaternion(quaternion);
  
  Game.scene.add(Game.dragArrow);
}

function clearDragVis() {
  if (Game.dragArrow) { 
    Game.scene.remove(Game.dragArrow); 
    Game.dragArrow = null; 
  }
  if (Game.onDragChanged) Game.onDragChanged(0, false);
}

function fireDrag() {
  if (!Game.ballBody || Game.hasFinished) return;
  const { ratio, worldDir } = getDragDir();
  if (ratio < 0.05 || !worldDir) return;
  const power = ratio * Game.maxPower;
  Game.ballBody.velocity.x += worldDir.x * power;
  Game.ballBody.velocity.z += worldDir.z * power;
  Game.swings++;
  if (Game.onSwingCountChanged) Game.onSwingCountChanged(Game.swings);
}

function checkWin() {
  if (Game.hasFinished || !Game.ballBody) return;
  const bp = Game.ballBody.position;
  const dx = bp.x - Game.holePosition.x, dz = bp.z - Game.holePosition.z;
  if (Math.sqrt(dx * dx + dz * dz) < Game.holeRadius && bp.y < Game.holePosition.y) {
    Game.hasFinished = true;
    Game.elapsedTime = (Date.now() - Game.timerStart) / 1000;
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
  Game.controls.mouseButtons = { LEFT: THREE.MOUSE.ROTATE, MIDDLE: THREE.MOUSE.DOLLY, RIGHT: THREE.MOUSE.PAN };
  if (Game.ball) Game.ball.visible = false;
}

export function exitSpectator() {
  Game.spectatorMode = false;
  Game.controls.mouseButtons = { LEFT: null, MIDDLE: THREE.MOUSE.DOLLY, RIGHT: THREE.MOUSE.ROTATE };
  if (Game.ball) Game.ball.visible = true;
}

export function updateGame(dt) {
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
  Game.world.step(1 / 60, dt, 3);
  if (Game.ball && Game.ballBody && !Game.hasFinished) {
    Game.ball.position.copy(Game.ballBody.position);
    Game.ball.quaternion.copy(Game.ballBody.quaternion);
    if (Game.ballBody.position.y < Game.courseBaseY - 3) resetLocalBall();
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
  interpolateRemoteBalls(dt);
  if (Game.ball && !Game.spectatorMode) Game.controls.target.lerp(Game.ball.position, 0.1);
  Game.controls.update();
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
  Game.renderer.render(Game.scene, Game.camera);
  Game.labelRenderer.render(Game.scene, Game.camera);
}

export function resetGameState() {
  for (const pid of Object.keys(Game.remoteBalls)) removeRemoteBall(pid);
  if (Game.ball) { Game.scene.remove(Game.ball); Game.ball = null; }
  if (Game.ballBody) { Game.world.removeBody(Game.ballBody); Game.ballBody = null; }
  clearDragVis(); exitSpectator();
  Game.swings = 0; Game.elapsedTime = 0; Game.hasFinished = false;
}

export function destroyScene() {
  window.removeEventListener('resize', onResize);
  if (Game.renderer) Game.renderer.dispose();
}
