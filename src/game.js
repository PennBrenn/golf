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
  courseMeshes: [], courseBodies: [], terrainMesh: null,
  holePosition: new THREE.Vector3(), holeRadius: 0.6,
  startPosition: new THREE.Vector3(), courseBaseY: 8,
  isDragging: false, dragStart: { x: 0, y: 0 }, dragCurrent: { x: 0, y: 0 },
  dragArrow: null, maxPower: 20,
  swings: 0, timerStart: 0, elapsedTime: 0,
  hasFinished: false, spectatorMode: false, currentCourseIndex: -1,
  onSwingCountChanged: null, onTimeUpdate: null,
  onFinishHole: null, onDragChanged: null,
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
  Game.renderer = new THREE.WebGLRenderer({ antialias: true });
  Game.renderer.setSize(window.innerWidth, window.innerHeight);
  Game.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  Game.renderer.shadowMap.enabled = true;
  Game.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  Game.renderer.setClearColor(0x87ceeb);
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
  Game.controls.maxPolarAngle = Math.PI / 2 - 0.05;
  Game.controls.minDistance = 3;
  Game.controls.maxDistance = 35;
  Game.controls.mouseButtons = { LEFT: null, MIDDLE: THREE.MOUSE.DOLLY, RIGHT: THREE.MOUSE.ROTATE };
  Game.controls.touches = { ONE: null, TWO: THREE.TOUCH.DOLLY_ROTATE };

  Game.scene.add(new THREE.AmbientLight(0xffffff, 0.5));
  const dir = new THREE.DirectionalLight(0xffffff, 1.0);
  dir.position.set(15, 35, 15);
  dir.castShadow = true;
  dir.shadow.mapSize.set(2048, 2048);
  dir.shadow.camera.left = -50; dir.shadow.camera.right = 50;
  dir.shadow.camera.top = 50; dir.shadow.camera.bottom = -50;
  dir.shadow.camera.near = 0.5; dir.shadow.camera.far = 100;
  Game.scene.add(dir);

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

export function buildTerrain() {
  if (Game.terrainMesh) Game.scene.remove(Game.terrainMesh);
  const geo = new THREE.PlaneGeometry(140, 140, 80, 80);
  geo.rotateX(-Math.PI / 2);
  const pos = geo.attributes.position;
  const seed = Math.random() * 999;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), z = pos.getZ(i);
    pos.setY(i, fbm((x + seed) * 0.03, (z + seed) * 0.03) * 5 - 1);
  }
  geo.computeVertexNormals();
  Game.terrainMesh = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: 0x3a8c3a, flatShading: true }));
  Game.terrainMesh.receiveShadow = true;
  Game.terrainMesh.position.y = -2;
  Game.scene.add(Game.terrainMesh);
}

function mt(color) { return new THREE.MeshStandardMaterial({ color, flatShading: true }); }

function addPiece(g, c, p, r) {
  const geo = new THREE.BoxGeometry(g[0], g[1], g[2]);
  const mesh = new THREE.Mesh(geo, mt(c));
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
  const mesh = new THREE.Mesh(geo, mt(c));
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
  for (const p of data.pieces) {
    if (p.type === 'box') {
      addPiece(p.size, parseColor(p.color), p.position, p.rotation || [0, 0, 0]);
    } else if (p.type === 'cylinder') {
      addCyl(p.radiusTop, p.radiusBottom, p.height, p.segments || 8, parseColor(p.color), p.position);
    }
  }
}

export async function fetchMapManifest() {
  try {
    const res = await fetch('/maps/manifest.json');
    mapManifest = await res.json();
  } catch (e) {
    console.warn('Could not load map manifest, using fallback');
    mapManifest = ['straight_fairway.json', 'dogleg_right.json', 'zigzag.json'];
  }
  return mapManifest;
}

export async function fetchMap(filename) {
  const res = await fetch('/maps/' + filename);
  return res.json();
}

export function clearCourse() {
  for (const m of Game.courseMeshes) Game.scene.remove(m);
  for (const b of Game.courseBodies) Game.world.removeBody(b);
  Game.courseMeshes = []; Game.courseBodies = [];
}

export async function buildRandomCourse() {
  clearCourse();
  if (mapManifest.length === 0) await fetchMapManifest();
  const idx = Math.floor(Math.random() * mapManifest.length);
  Game.currentCourseIndex = idx;
  const data = await fetchMap(mapManifest[idx]);

  Game.startPosition.set(data.start[0], data.start[1], data.start[2]);
  Game.holePosition.set(data.hole[0], data.hole[1], data.hole[2]);
  buildCourseFromJSON(data);

  const holeMesh = new THREE.Mesh(
    new THREE.CylinderGeometry(Game.holeRadius, Game.holeRadius, 0.02, 32), mt(0x111111)
  );
  holeMesh.position.copy(Game.holePosition).add(new THREE.Vector3(0, 0.01, 0));
  holeMesh.receiveShadow = true;
  Game.scene.add(holeMesh); Game.courseMeshes.push(holeMesh);

  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 2, 8), mt(0xcccccc));
  pole.position.copy(Game.holePosition).add(new THREE.Vector3(0, 1, 0));
  pole.castShadow = true; Game.scene.add(pole); Game.courseMeshes.push(pole);
  const flag = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.35, 0.02), mt(0xff3333));
  flag.position.copy(Game.holePosition).add(new THREE.Vector3(0.3, 1.8, 0));
  flag.castShadow = true; Game.scene.add(flag); Game.courseMeshes.push(flag);

  buildTerrain();
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
  const right = new THREE.Vector3().crossVectors(new THREE.Vector3(0, 1, 0), forward).normalize();
  const worldDir = new THREE.Vector3().addScaledVector(forward, dy / 200).addScaledVector(right, dx / 200);
  worldDir.y = 0;
  return { ratio, worldDir: worldDir.length() > 0.01 ? worldDir.normalize() : null };
}

function updateDragVis() {
  const { ratio, worldDir } = getDragDir();
  if (Game.onDragChanged) Game.onDragChanged(ratio, true);
  if (!Game.ballBody || !worldDir || ratio < 0.02) { clearDragVis(); return; }
  const bp = new THREE.Vector3().copy(Game.ballBody.position); bp.y += 0.1;
  
  if (Game.dragArrow) Game.scene.remove(Game.dragArrow);
  
  // Create triangle arrow
  const length = ratio * 4 + 0.5;
  const baseWidth = 0.4;
  const tipWidth = 0.05;
  
  const geo = new THREE.BufferGeometry();
  const vertices = new Float32Array([
    // Base (wider)
    -baseWidth/2, 0, 0,
     baseWidth/2, 0, 0,
    // Tip (point)
    0, 0, -length
  ]);
  const indices = new Uint16Array([0, 1, 2]);
  
  geo.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
  geo.setIndex(new THREE.BufferAttribute(indices, 1));
  
  const mat = new THREE.MeshBasicMaterial({ 
    color: 0xffffff, 
    transparent: true, 
    opacity: 0.8,
    side: THREE.DoubleSide
  });
  
  Game.dragArrow = new THREE.Mesh(geo, mat);
  Game.dragArrow.position.copy(bp);
  
  // Align triangle with shoot direction
  Game.dragArrow.lookAt(new THREE.Vector3().copy(bp).add(worldDir));
  Game.dragArrow.rotateX(Math.PI / 2);
  
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
    if (Game.onTimeUpdate) Game.onTimeUpdate(Game.elapsedTime);
  }
  Game.world.step(1 / 60, dt, 3);
  if (Game.ball && Game.ballBody && !Game.hasFinished) {
    Game.ball.position.copy(Game.ballBody.position);
    Game.ball.quaternion.copy(Game.ballBody.quaternion);
    if (Game.ballBody.position.y < Game.courseBaseY - 3) resetLocalBall();
  }
  interpolateRemoteBalls(dt);
  if (Game.ball && !Game.spectatorMode) Game.controls.target.lerp(Game.ball.position, 0.1);
  Game.controls.update();
  checkWin();
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
