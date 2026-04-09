import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js';
import { PLAYER_COLORS, MP, getLocalPlayer, getPlayerById } from './network.js';

// ── Game State ───────────────────────────────────────────

export const Game = {
  scene: null,
  camera: null,
  renderer: null,
  labelRenderer: null,
  controls: null,
  world: null,
  clock: null,

  // Local player
  ball: null,         // THREE.Mesh
  ballBody: null,     // CANNON.Body
  ballMaterial: null,  // CANNON.Material

  // Remote players
  remoteBalls: {},    // playerId → { mesh, body, label, targetPos, targetVel, lastUpdate }

  // Course
  courseMeshes: [],
  courseBodies: [],
  holePosition: new THREE.Vector3(0, 0, 0),
  holeRadius: 0.6,
  startPosition: new THREE.Vector3(0, 1.5, 0),

  // Input
  charging: false,
  chargeTime: 0,
  maxCharge: 2.0,    // seconds to full charge
  maxPower: 18,
  canJump: true,
  hasWon: false,

  // Callbacks
  onChargeChanged: null,  // callback(ratio 0-1)
  onWinHole: null,        // callback()
};

const BALL_RADIUS = 0.2;
const GROUND_MATERIAL = new CANNON.Material('ground');
const BALL_MATERIAL = new CANNON.Material('ball');
const FIXED_TIMESTEP = 1 / 60;

// ── Init ─────────────────────────────────────────────────

export function initScene(container) {
  // Renderer
  Game.renderer = new THREE.WebGLRenderer({ antialias: true });
  Game.renderer.setSize(window.innerWidth, window.innerHeight);
  Game.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  Game.renderer.shadowMap.enabled = true;
  Game.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  Game.renderer.setClearColor(0x87ceeb);
  container.appendChild(Game.renderer.domElement);

  // Label renderer
  Game.labelRenderer = new CSS2DRenderer();
  Game.labelRenderer.setSize(window.innerWidth, window.innerHeight);
  Game.labelRenderer.domElement.style.position = 'absolute';
  Game.labelRenderer.domElement.style.top = '0';
  Game.labelRenderer.domElement.style.pointerEvents = 'none';
  container.appendChild(Game.labelRenderer.domElement);

  // Scene
  Game.scene = new THREE.Scene();
  Game.scene.fog = new THREE.Fog(0x87ceeb, 40, 120);

  // Camera
  Game.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 200);
  Game.camera.position.set(0, 8, 12);

  // Controls
  Game.controls = new OrbitControls(Game.camera, Game.renderer.domElement);
  Game.controls.enableDamping = true;
  Game.controls.dampingFactor = 0.1;
  Game.controls.maxPolarAngle = Math.PI / 2 - 0.05;
  Game.controls.minDistance = 3;
  Game.controls.maxDistance = 25;

  // Lights
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  Game.scene.add(ambientLight);

  const dirLight = new THREE.DirectionalLight(0xffffff, 1.0);
  dirLight.position.set(15, 25, 15);
  dirLight.castShadow = true;
  dirLight.shadow.mapSize.set(2048, 2048);
  dirLight.shadow.camera.left = -30;
  dirLight.shadow.camera.right = 30;
  dirLight.shadow.camera.top = 30;
  dirLight.shadow.camera.bottom = -30;
  dirLight.shadow.camera.near = 0.5;
  dirLight.shadow.camera.far = 80;
  Game.scene.add(dirLight);

  // Clock
  Game.clock = new THREE.Clock();

  // Physics world
  Game.world = new CANNON.World({ gravity: new CANNON.Vec3(0, -15, 0) });
  Game.world.broadphase = new CANNON.SAPBroadphase(Game.world);
  Game.world.allowSleep = false;

  const contactMat = new CANNON.ContactMaterial(GROUND_MATERIAL, BALL_MATERIAL, {
    friction: 0.4,
    restitution: 0.3,
  });
  Game.world.addContactMaterial(contactMat);

  // Resize handler
  window.addEventListener('resize', onWindowResize);
}

function onWindowResize() {
  Game.camera.aspect = window.innerWidth / window.innerHeight;
  Game.camera.updateProjectionMatrix();
  Game.renderer.setSize(window.innerWidth, window.innerHeight);
  Game.labelRenderer.setSize(window.innerWidth, window.innerHeight);
}

// ── Course Builder ───────────────────────────────────────

function addCoursePiece(geometry, material, position, rotation, isStatic = true) {
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.copy(position);
  if (rotation) mesh.rotation.set(rotation.x, rotation.y, rotation.z);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  Game.scene.add(mesh);
  Game.courseMeshes.push(mesh);

  if (isStatic) {
    const shape = geometryToCannonShape(geometry, mesh);
    if (shape) {
      const body = new CANNON.Body({ mass: 0, material: GROUND_MATERIAL });
      body.addShape(shape);
      body.position.set(position.x, position.y, position.z);
      if (rotation) {
        const q = new THREE.Quaternion().setFromEuler(new THREE.Euler(rotation.x, rotation.y, rotation.z));
        body.quaternion.set(q.x, q.y, q.z, q.w);
      }
      Game.world.addBody(body);
      Game.courseBodies.push(body);
    }
  }

  return mesh;
}

function geometryToCannonShape(geometry, mesh) {
  if (geometry instanceof THREE.BoxGeometry) {
    const p = geometry.parameters;
    return new CANNON.Box(new CANNON.Vec3(p.width / 2, p.height / 2, p.depth / 2));
  }
  if (geometry instanceof THREE.CylinderGeometry) {
    const p = geometry.parameters;
    return new CANNON.Cylinder(p.radiusTop, p.radiusBottom, p.height, p.radialSegments || 16);
  }
  if (geometry instanceof THREE.SphereGeometry) {
    return new CANNON.Sphere(geometry.parameters.radius);
  }
  return new CANNON.Box(new CANNON.Vec3(0.5, 0.5, 0.5));
}

function mat(color) {
  return new THREE.MeshStandardMaterial({
    color,
    flatShading: true,
  });
}

export function buildCourse() {
  // Large ground plane
  const groundGeo = new THREE.BoxGeometry(100, 0.2, 100);
  addCoursePiece(groundGeo, mat(0x4a9e4a), new THREE.Vector3(0, -0.1, 0));

  // ── START PLATFORM ──
  addCoursePiece(
    new THREE.BoxGeometry(4, 0.5, 4), mat(0x6bc96b),
    new THREE.Vector3(0, 0.25, 0)
  );
  Game.startPosition.set(0, 1.5, 0);

  // ── STRAIGHT FAIRWAY ──
  addCoursePiece(
    new THREE.BoxGeometry(4, 0.5, 10), mat(0x5ab85a),
    new THREE.Vector3(0, 0.25, -7)
  );

  // ── SIDE WALLS along fairway ──
  addCoursePiece(
    new THREE.BoxGeometry(0.3, 0.8, 10), mat(0x8B6914),
    new THREE.Vector3(-2.15, 0.6, -7)
  );
  addCoursePiece(
    new THREE.BoxGeometry(0.3, 0.8, 10), mat(0x8B6914),
    new THREE.Vector3(2.15, 0.6, -7)
  );

  // ── OBSTACLE: center block ──
  addCoursePiece(
    new THREE.BoxGeometry(1.8, 1, 0.8), mat(0xe05555),
    new THREE.Vector3(0, 1, -5)
  );

  // ── OBSTACLE: staggered blocks ──
  addCoursePiece(
    new THREE.BoxGeometry(1.2, 0.8, 0.8), mat(0xd4a843),
    new THREE.Vector3(-1, 1, -8)
  );
  addCoursePiece(
    new THREE.BoxGeometry(1.2, 0.8, 0.8), mat(0xd4a843),
    new THREE.Vector3(1, 1, -10)
  );

  // ── RAMP UP ──
  addCoursePiece(
    new THREE.BoxGeometry(4, 0.5, 5), mat(0x7ec87e),
    new THREE.Vector3(0, 1.25, -14.5),
    { x: -Math.atan2(1.5, 5), y: 0, z: 0 }
  );

  // ── ELEVATED SECTION ──
  addCoursePiece(
    new THREE.BoxGeometry(4, 0.5, 8), mat(0x5ab85a),
    new THREE.Vector3(0, 2.25, -21)
  );

  // Side walls elevated
  addCoursePiece(
    new THREE.BoxGeometry(0.3, 0.8, 8), mat(0x8B6914),
    new THREE.Vector3(-2.15, 2.9, -21)
  );
  addCoursePiece(
    new THREE.BoxGeometry(0.3, 0.8, 8), mat(0x8B6914),
    new THREE.Vector3(2.15, 2.9, -21)
  );

  // ── ELEVATED OBSTACLES: pillars ──
  addCoursePiece(
    new THREE.CylinderGeometry(0.4, 0.4, 1.5, 8), mat(0x5588cc),
    new THREE.Vector3(-0.8, 3.25, -19)
  );
  addCoursePiece(
    new THREE.CylinderGeometry(0.4, 0.4, 1.5, 8), mat(0x5588cc),
    new THREE.Vector3(0.8, 3.25, -22)
  );

  // ── CURVE SECTION (series of offset platforms) ──
  addCoursePiece(
    new THREE.BoxGeometry(5, 0.5, 4), mat(0x6bc96b),
    new THREE.Vector3(2, 2.25, -27)
  );
  addCoursePiece(
    new THREE.BoxGeometry(0.3, 0.8, 4), mat(0x8B6914),
    new THREE.Vector3(4.65, 2.9, -27)
  );

  addCoursePiece(
    new THREE.BoxGeometry(5, 0.5, 4), mat(0x5ab85a),
    new THREE.Vector3(4, 2.25, -33)
  );
  addCoursePiece(
    new THREE.BoxGeometry(0.3, 0.8, 4), mat(0x8B6914),
    new THREE.Vector3(6.65, 2.9, -33)
  );

  // ── RAMP DOWN ──
  addCoursePiece(
    new THREE.BoxGeometry(4, 0.5, 5), mat(0x7ec87e),
    new THREE.Vector3(4, 1.0, -37.5),
    { x: Math.atan2(2, 5), y: 0, z: 0 }
  );

  // ── FINISH PLATFORM ──
  addCoursePiece(
    new THREE.BoxGeometry(5, 0.5, 5), mat(0x6bc96b),
    new THREE.Vector3(4, 0.25, -42)
  );

  // Hole visual (dark circle on finish platform)
  const holeGeo = new THREE.CylinderGeometry(Game.holeRadius, Game.holeRadius, 0.02, 32);
  const holeMat = new THREE.MeshStandardMaterial({ color: 0x111111, flatShading: true });
  const holeMesh = new THREE.Mesh(holeGeo, holeMat);
  holeMesh.position.set(4, 0.51, -42);
  holeMesh.receiveShadow = true;
  Game.scene.add(holeMesh);
  Game.holePosition.set(4, 0.5, -42);

  // Flag pole
  addCoursePiece(
    new THREE.CylinderGeometry(0.04, 0.04, 2, 8), mat(0xcccccc),
    new THREE.Vector3(4, 1.5, -42)
  );

  // Flag
  const flagGeo = new THREE.BoxGeometry(0.6, 0.35, 0.02);
  const flagMesh = new THREE.Mesh(flagGeo, mat(0xff3333));
  flagMesh.position.set(4.3, 2.3, -42);
  flagMesh.castShadow = true;
  Game.scene.add(flagMesh);
}

// ── Ball ─────────────────────────────────────────────────

export function createLocalBall(colorIndex) {
  const color = PLAYER_COLORS[colorIndex] || PLAYER_COLORS[0];

  // Three.js mesh
  const geo = new THREE.SphereGeometry(BALL_RADIUS, 16, 16);
  const material = new THREE.MeshStandardMaterial({ color, flatShading: true });
  Game.ball = new THREE.Mesh(geo, material);
  Game.ball.castShadow = true;
  Game.scene.add(Game.ball);

  // Cannon body
  Game.ballBody = new CANNON.Body({
    mass: 1,
    shape: new CANNON.Sphere(BALL_RADIUS),
    material: BALL_MATERIAL,
    linearDamping: 0.3,
    angularDamping: 0.4,
  });
  Game.ballBody.position.set(
    Game.startPosition.x,
    Game.startPosition.y,
    Game.startPosition.z
  );
  Game.world.addBody(Game.ballBody);

  Game.hasWon = false;
}

export function resetLocalBall() {
  if (Game.ballBody) {
    Game.ballBody.position.set(
      Game.startPosition.x,
      Game.startPosition.y,
      Game.startPosition.z
    );
    Game.ballBody.velocity.setZero();
    Game.ballBody.angularVelocity.setZero();
  }
  Game.charging = false;
  Game.chargeTime = 0;
  Game.hasWon = false;
}

// ── Remote Balls ─────────────────────────────────────────

export function addRemoteBall(playerId, colorIndex, playerName) {
  if (Game.remoteBalls[playerId]) return;

  const color = PLAYER_COLORS[colorIndex] || PLAYER_COLORS[1];
  const geo = new THREE.SphereGeometry(BALL_RADIUS, 16, 16);
  const material = new THREE.MeshStandardMaterial({ color, flatShading: true });
  const mesh = new THREE.Mesh(geo, material);
  mesh.castShadow = true;
  mesh.position.copy(Game.startPosition);
  Game.scene.add(mesh);

  // Name label
  const labelDiv = document.createElement('div');
  labelDiv.className = 'player-label';
  labelDiv.textContent = playerName || 'Player';
  labelDiv.style.color = '#' + color.toString(16).padStart(6, '0');
  const label = new CSS2DObject(labelDiv);
  label.position.set(0, BALL_RADIUS + 0.5, 0);
  mesh.add(label);

  Game.remoteBalls[playerId] = {
    mesh,
    label,
    targetPos: new THREE.Vector3().copy(Game.startPosition),
    targetVel: new THREE.Vector3(),
    lastUpdate: Date.now(),
  };
}

export function removeRemoteBall(playerId) {
  const rb = Game.remoteBalls[playerId];
  if (!rb) return;
  Game.scene.remove(rb.mesh);
  delete Game.remoteBalls[playerId];
}

export function updateRemoteBallState(playerId, position, velocity, timestamp) {
  const rb = Game.remoteBalls[playerId];
  if (!rb) return;
  rb.targetPos.set(position.x, position.y, position.z);
  rb.targetVel.set(velocity.x, velocity.y, velocity.z);
  rb.lastUpdate = timestamp || Date.now();
}

function interpolateRemoteBalls(dt) {
  const now = Date.now();
  for (const [pid, rb] of Object.entries(Game.remoteBalls)) {
    // Dead reckoning: extrapolate based on last velocity
    const elapsed = (now - rb.lastUpdate) / 1000;
    const predicted = rb.targetPos.clone().add(rb.targetVel.clone().multiplyScalar(elapsed));

    // Lerp towards predicted position
    rb.mesh.position.lerp(predicted, Math.min(1, dt * 12));
  }
}

// ── Input ────────────────────────────────────────────────

export function setupInput() {
  window.addEventListener('keydown', (e) => {
    if (Game.hasWon) return;

    if (e.code === 'Space' && !Game.charging && !e.repeat) {
      Game.charging = true;
      Game.chargeTime = 0;
    }

    if (e.code === 'KeyW' || e.code === 'ArrowUp') {
      tryJump();
    }
  });

  window.addEventListener('keyup', (e) => {
    if (e.code === 'Space' && Game.charging) {
      fireShot();
      Game.charging = false;
      Game.chargeTime = 0;
      if (Game.onChargeChanged) Game.onChargeChanged(0);
    }
  });
}

function tryJump() {
  if (!Game.ballBody || Game.hasWon) return;

  // Raycast down to check if grounded
  const from = new CANNON.Vec3(
    Game.ballBody.position.x,
    Game.ballBody.position.y,
    Game.ballBody.position.z
  );
  const to = new CANNON.Vec3(
    Game.ballBody.position.x,
    Game.ballBody.position.y - BALL_RADIUS - 0.15,
    Game.ballBody.position.z
  );

  const ray = new CANNON.Ray(from, to);
  ray.mode = CANNON.Ray.CLOSEST;
  ray.skipBackfaces = true;
  const result = new CANNON.RaycastResult();
  ray.intersectWorld(Game.world, { result, skipBackfaces: true });

  if (result.hasHit) {
    Game.ballBody.velocity.y = 6;
  }
}

function fireShot() {
  if (!Game.ballBody || Game.hasWon) return;

  const ratio = Math.min(Game.chargeTime / Game.maxCharge, 1);
  const power = ratio * Game.maxPower;
  if (power < 0.5) return;

  // Get camera forward direction (projected onto xz plane)
  const dir = new THREE.Vector3();
  Game.camera.getWorldDirection(dir);
  dir.y = 0;
  dir.normalize();

  Game.ballBody.velocity.x += dir.x * power;
  Game.ballBody.velocity.z += dir.z * power;
}

// ── Win Check ────────────────────────────────────────────

function checkWin() {
  if (Game.hasWon || !Game.ballBody) return;

  const bx = Game.ballBody.position.x;
  const by = Game.ballBody.position.y;
  const bz = Game.ballBody.position.z;

  const dx = bx - Game.holePosition.x;
  const dz = bz - Game.holePosition.z;
  const dist = Math.sqrt(dx * dx + dz * dz);

  if (dist < Game.holeRadius && by < Game.holePosition.y) {
    Game.hasWon = true;
    if (Game.onWinHole) Game.onWinHole();
  }
}

// ── Game Loop Update ─────────────────────────────────────

export function updateGame(dt) {
  // Charge update
  if (Game.charging) {
    Game.chargeTime = Math.min(Game.chargeTime + dt, Game.maxCharge);
    const ratio = Game.chargeTime / Game.maxCharge;
    if (Game.onChargeChanged) Game.onChargeChanged(ratio);
  }

  // Step physics
  Game.world.step(FIXED_TIMESTEP, dt, 3);

  // Sync mesh to physics
  if (Game.ball && Game.ballBody) {
    Game.ball.position.copy(Game.ballBody.position);
    Game.ball.quaternion.copy(Game.ballBody.quaternion);

    // Fall off course → reset
    if (Game.ballBody.position.y < -5) {
      resetLocalBall();
    }
  }

  // Remote ball interpolation
  interpolateRemoteBalls(dt);

  // Camera follows ball
  if (Game.ball) {
    Game.controls.target.lerp(Game.ball.position, 0.1);
  }
  Game.controls.update();

  // Win check
  checkWin();
}

export function renderGame() {
  Game.renderer.render(Game.scene, Game.camera);
  Game.labelRenderer.render(Game.scene, Game.camera);
}

// ── Cleanup ──────────────────────────────────────────────

export function resetGameState() {
  // Remove remote balls
  for (const pid of Object.keys(Game.remoteBalls)) {
    removeRemoteBall(pid);
  }

  // Remove local ball
  if (Game.ball) {
    Game.scene.remove(Game.ball);
    Game.ball = null;
  }
  if (Game.ballBody) {
    Game.world.removeBody(Game.ballBody);
    Game.ballBody = null;
  }

  Game.charging = false;
  Game.chargeTime = 0;
  Game.hasWon = false;
}

export function destroyScene() {
  window.removeEventListener('resize', onWindowResize);
  if (Game.renderer) {
    Game.renderer.dispose();
  }
}
