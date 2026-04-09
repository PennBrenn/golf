import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { TransformControls } from 'three/examples/jsm/controls/TransformControls.js';

// ── State ────────────────────────────────────────────────

const B = {
  scene: null, camera: null, renderer: null,
  orbit: null, transform: null,
  pieces: [],       // { mesh, data }
  selected: null,   // piece object or null
  startMarker: null, holeMarker: null,
  placingStart: false, placingHole: false,
  raycaster: new THREE.Raycaster(),
  mouse: new THREE.Vector2(),
  timeOfDay: 'day',  // 'day' or 'night'
  ambientLight: null, directionalLight: null,
  unsavedChanges: false,  // track unsaved changes
  rainEnabled: false, rainSystem: null, rainDrops: [],
  snapEnabled: false, snapGridSize: 0.5,
};

// ── Piece Defaults ───────────────────────────────────────

const PRESETS = {
  // ── Basic ──
  box:        () => ({ type: 'box', size: [4, 0.5, 4], position: [0, 8.25, 0], rotation: [0, 0, 0], color: '#5ab85a' }),
  cylinder:   () => ({ type: 'cylinder', radiusTop: 0.4, radiusBottom: 0.4, height: 1.5, segments: 8, position: [0, 9, 0], color: '#5588cc' }),
  wall:       () => ({ type: 'box', size: [0.3, 0.8, 8], position: [0, 8.6, 0], rotation: [0, 0, 0], color: '#ffffff' }),
  ramp:       () => ({ type: 'box', size: [4, 0.5, 6], position: [0, 9.5, 0], rotation: [-0.28, 0, 0], color: '#7ec87e' }),
  sand:       () => ({ type: 'box', size: [4, 0.5, 4], position: [0, 8.25, 0], rotation: [0, 0, 0], color: '#e6d5a8' }),
  water:      () => ({ type: 'water', size: [4, 0.5, 4], position: [0, 8.1, 0], rotation: [0, 0, 0], color: '#1e8cff' }),
  ice:        () => ({ type: 'ice', size: [4, 0.5, 4], position: [0, 8.25, 0], rotation: [0, 0, 0], color: '#ccf2ff' }),
  // ── Launchers & Pads ──
  bouncepad:  () => ({ type: 'bouncepad', size: [2, 0.3, 2], position: [0, 8.4, 0], rotation: [0, 0, 0], color: '#ff8800' }),
  trampoline: () => ({ type: 'trampoline', size: [3, 0.2, 3], position: [0, 8.35, 0], rotation: [0, 0, 0], color: '#ff66aa' }),
  launcher:   () => ({ type: 'launcher', size: [1.5, 0.3, 1.5], position: [0, 8.4, 0], rotation: [0, 0, 0], color: '#ff4488', launchForce: 20 }),
  cannon:     () => ({ type: 'cannon', size: [1, 1, 2.5], position: [0, 8.75, 0], rotation: [0, 0, 0], color: '#882222', launchForce: 25 }),
  speedboost: () => ({ type: 'speedboost', size: [2, 0.15, 3], position: [0, 8.3, 0], rotation: [0, 0, 0], color: '#44ff44', boostForce: 12 }),
  // ── Forces & Fields ──
  gravinv:    () => ({ type: 'gravinv', size: [2, 0.3, 2], position: [0, 8.4, 0], rotation: [0, 0, 0], color: '#aa44ff' }),
  blower:     () => ({ type: 'blower', size: [1, 1.5, 1], position: [0, 9, 0], rotation: [0, 0, 0], color: '#88ddff', blowForce: 8, blowDir: [0, 0, -1] }),
  magnet:     () => ({ type: 'magnet', size: [1, 0.8, 1], position: [0, 8.65, 0], rotation: [0, 0, 0], color: '#cc2222', magnetForce: 6, magnetRadius: 5 }),
  conveyor:   () => ({ type: 'conveyor', size: [2, 0.3, 6], position: [0, 8.4, 0], rotation: [0, 0, 0], color: '#ffaa00', conveyorDir: [0, 0, -1], conveyorSpeed: 5 }),
  // ── Obstacles ──
  bumper:     () => ({ type: 'bumper', radiusTop: 0.6, radiusBottom: 0.6, height: 0.8, segments: 16, position: [0, 8.65, 0], color: '#ff4444', bumperForce: 12 }),
  spinner:    () => ({ type: 'spinner', size: [5, 0.4, 0.6], position: [0, 8.45, 0], rotation: [0, 0, 0], color: '#4488ff', motion: { type: 'rotate', axis: 'y', range: 180, speed: 0.3, phase: 0 } }),
  windmill:   () => ({ type: 'windmill', size: [0.4, 3, 0.15], position: [0, 10, 0], rotation: [0, 0, 0], color: '#dddddd', motion: { type: 'rotate', axis: 'z', range: 180, speed: 0.25, phase: 0 } }),
  door:       () => ({ type: 'door', size: [3, 2, 0.3], position: [0, 9.25, 0], rotation: [0, 0, 0], color: '#886644', motion: { type: 'translate', axis: 'y', range: 2.5, speed: 0.3, phase: 0 } }),
  // ── Warp & Utility ──
  teleporter: () => ({ type: 'teleporter', size: [1.5, 0.15, 1.5], position: [0, 8.3, 0], rotation: [0, 0, 0], color: '#ff44ff', target: [5, 8.8, 0] }),
  checkpoint: () => ({ type: 'checkpoint', size: [1.5, 0.1, 1.5], position: [0, 8.3, 0], rotation: [0, 0, 0], color: '#ffff00' }),
};

// ── Init ─────────────────────────────────────────────────

function init() {
  const viewport = document.getElementById('viewport');
  const w = viewport.clientWidth, h = viewport.clientHeight;

  B.renderer = new THREE.WebGLRenderer({ antialias: true });
  B.renderer.setSize(w, h);
  B.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  B.renderer.shadowMap.enabled = true;
  B.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  B.renderer.setClearColor(0xffeedd);
  viewport.appendChild(B.renderer.domElement);

  B.scene = new THREE.Scene();
  B.scene.fog = new THREE.FogExp2(0xffeedd, 0.006);

  B.camera = new THREE.PerspectiveCamera(60, w / h, 0.1, 300);
  B.camera.position.set(10, 18, 25);

  // Orbit controls (right-click)
  B.orbit = new OrbitControls(B.camera, B.renderer.domElement);
  B.orbit.enableDamping = true;
  B.orbit.dampingFactor = 0.12;
  B.orbit.target.set(0, 8, -10);

  // Transform controls
  B.transform = new TransformControls(B.camera, B.renderer.domElement);
  B.transform.addEventListener('dragging-changed', (e) => {
    B.orbit.enabled = !e.value;
  });
  B.transform.addEventListener('objectChange', () => {
    if (B.selected) {
      syncDataFromMesh(B.selected);

      // Apply snap if enabled
      if (B.snapEnabled) {
        const mesh = B.selected.mesh;
        const grid = B.snapGridSize;

        // Snap position
        mesh.position.x = Math.round(mesh.position.x / grid) * grid;
        mesh.position.y = Math.round(mesh.position.y / grid) * grid;
        mesh.position.z = Math.round(mesh.position.z / grid) * grid;

        // Snap rotation (to 45 degrees by default, or grid size if it's small)
        const snapAngle = grid < 0.5 ? Math.PI / 12 : Math.PI / 4; // 15° or 45°
        mesh.rotation.x = Math.round(mesh.rotation.x / snapAngle) * snapAngle;
        mesh.rotation.y = Math.round(mesh.rotation.y / snapAngle) * snapAngle;
        mesh.rotation.z = Math.round(mesh.rotation.z / snapAngle) * snapAngle;

        // Snap scale (only for scale mode)
        if (B.transform.getMode() === 'scale') {
          mesh.scale.x = Math.max(0.1, Math.round(mesh.scale.x / grid) * grid);
          mesh.scale.y = Math.max(0.1, Math.round(mesh.scale.y / grid) * grid);
          mesh.scale.z = Math.max(0.1, Math.round(mesh.scale.z / grid) * grid);
        }
      }

      markUnsaved();
    }
    updatePropsUI();
  });
  B.scene.add(B.transform);

  // Lights
  B.ambientLight = new THREE.AmbientLight(0xffeedd, 0.6);
  B.scene.add(B.ambientLight);
  B.directionalLight = new THREE.DirectionalLight(0xffddaa, 1.5);
  B.directionalLight.position.set(15, 35, 15);
  B.directionalLight.castShadow = true;
  B.directionalLight.shadow.mapSize.set(2048, 2048);
  B.directionalLight.shadow.camera.left = -50; B.directionalLight.shadow.camera.right = 50;
  B.directionalLight.shadow.camera.top = 50; B.directionalLight.shadow.camera.bottom = -50;
  B.scene.add(B.directionalLight);

  // Grid
  const grid = new THREE.GridHelper(80, 80, 0x446677, 0x334455);
  grid.position.y = 0;
  B.scene.add(grid);

  // Reference plane at y=8 (course base)
  const refGeo = new THREE.PlaneGeometry(60, 60);
  refGeo.rotateX(-Math.PI / 2);
  const refMat = new THREE.MeshBasicMaterial({ color: 0x3a7a3a, transparent: true, opacity: 0.15 });
  const refPlane = new THREE.Mesh(refGeo, refMat);
  refPlane.position.y = 8;
  refPlane.userData.isHelper = true;
  B.scene.add(refPlane);

  // Start marker
  B.startMarker = createMarker(0x00ff44, 'S');
  B.startMarker.position.set(0, 9, 0);
  B.scene.add(B.startMarker);

  // Hole marker
  B.holeMarker = createMarker(0xff3333, 'H');
  B.holeMarker.position.set(0, 8.5, -20);
  B.scene.add(B.holeMarker);

  // Events
  window.addEventListener('resize', onResize);
  B.renderer.domElement.addEventListener('pointerdown', onPointerDown);
  window.addEventListener('keydown', onKeyDown);
  window.addEventListener('beforeunload', onBeforeUnload);

  setupToolbar();
  setupPalette();
  setupProps();

  animate();
}

function markUnsaved() {
  B.unsavedChanges = true;
}

function onBeforeUnload(e) {
  if (B.unsavedChanges) {
    e.preventDefault();
    e.returnValue = 'You have unsaved changes. Are you sure you want to leave?';
    return e.returnValue;
  }
}

function createMarker(color, label) {
  const group = new THREE.Group();
  const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(0.3, 16, 16),
    new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: 0.3 })
  );
  group.add(sphere);
  const pole = new THREE.Mesh(
    new THREE.CylinderGeometry(0.05, 0.05, 2, 8),
    new THREE.MeshStandardMaterial({ color })
  );
  pole.position.y = 1;
  group.add(pole);
  group.userData.isHelper = true;
  group.userData.label = label;
  return group;
}

function onResize() {
  const vp = document.getElementById('viewport');
  const w = vp.clientWidth, h = vp.clientHeight;
  B.camera.aspect = w / h;
  B.camera.updateProjectionMatrix();
  B.renderer.setSize(w, h);
}

function applyDayNightCycle() {
  if (B.timeOfDay === 'night') {
    B.renderer.setClearColor(0x0a1828);
    B.scene.fog.color.setHex(0x0a1828);
    B.ambientLight.intensity = 0.25;
    B.ambientLight.color.setHex(0x6688bb);
    B.directionalLight.intensity = 0.4;
    B.directionalLight.color.setHex(0xaaccff);
  } else {
    B.renderer.setClearColor(0xffeedd);
    B.scene.fog.color.setHex(0xffeedd);
    B.ambientLight.intensity = 0.6;
    B.ambientLight.color.setHex(0xffeedd);
    B.directionalLight.intensity = 1.5;
    B.directionalLight.color.setHex(0xffddaa);
  }
}

function animate() {
  requestAnimationFrame(animate);
  B.orbit.update();

  // Animate rain
  if (B.rainEnabled && B.rainDrops.length > 0) {
    for (const drop of B.rainDrops) {
      drop.position.y -= drop.userData.speed;
      if (drop.position.y < 0) {
        drop.position.y = 20;
        drop.position.x = (Math.random() - 0.5) * 60;
        drop.position.z = (Math.random() - 0.5) * 60;
      }
    }
  }

  B.renderer.render(B.scene, B.camera);
}

function createRainSystem() {
  if (B.rainSystem) return;

  B.rainDrops = [];
  const rainGeo = new THREE.BufferGeometry();
  const rainCount = 2000;
  const positions = new Float32Array(rainCount * 3);

  for (let i = 0; i < rainCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 60;
    positions[i * 3 + 1] = Math.random() * 20;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 60;
  }

  rainGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  const rainMat = new THREE.PointsMaterial({
    color: 0x88aacc,
    size: 0.1,
    transparent: true,
    opacity: 0.6,
    sizeAttenuation: true
  });

  B.rainSystem = new THREE.Points(rainGeo, rainMat);
  B.scene.add(B.rainSystem);

  // Create individual drop meshes for animation
  for (let i = 0; i < rainCount; i++) {
    const drop = new THREE.Mesh(
      new THREE.CylinderGeometry(0.02, 0.02, 0.3, 4),
      new THREE.MeshBasicMaterial({ color: 0x88aacc, transparent: true, opacity: 0.4 })
    );
    drop.position.set(
      (Math.random() - 0.5) * 60,
      Math.random() * 20,
      (Math.random() - 0.5) * 60
    );
    drop.rotation.x = Math.PI / 2;
    drop.userData.speed = 0.3 + Math.random() * 0.2;
    B.scene.add(drop);
    B.rainDrops.push(drop);
  }
}

function destroyRainSystem() {
  if (B.rainSystem) {
    B.scene.remove(B.rainSystem);
    B.rainSystem.geometry.dispose();
    B.rainSystem.material.dispose();
    B.rainSystem = null;
  }

  for (const drop of B.rainDrops) {
    B.scene.remove(drop);
    drop.geometry.dispose();
    drop.material.dispose();
  }
  B.rainDrops = [];
}

// ── Piece Management ─────────────────────────────────────

const BOX_TYPES = ['box','wall','ramp','sand','bouncepad','gravinv','ice','trampoline',
  'launcher','cannon','speedboost','blower','magnet','conveyor','spinner','windmill',
  'door','teleporter','checkpoint','water'];

function createMeshFromData(data) {
  let geo, mat;
  const color = parseColor(data.color);

  // Emissive glow for special types
  const glowTypes = { teleporter: 0.6, checkpoint: 0.4, speedboost: 0.5, launcher: 0.4, cannon: 0.2, bumper: 0.5, blower: 0.3, magnet: 0.3, conveyor: 0.2 };
  const emissiveIntensity = glowTypes[data.type] || 0;
  mat = new THREE.MeshStandardMaterial({
    color, flatShading: true,
    emissive: emissiveIntensity > 0 ? color : 0x000000,
    emissiveIntensity,
    transparent: data.type === 'water' || data.type === 'teleporter',
    opacity: data.type === 'water' ? 0.55 : data.type === 'teleporter' ? 0.7 : 1.0,
  });

  if (data.type === 'cylinder' || data.type === 'bumper') {
    geo = new THREE.CylinderGeometry(data.radiusTop, data.radiusBottom, data.height, data.segments || 8);
  } else if (data.size) {
    geo = new THREE.BoxGeometry(data.size[0], data.size[1], data.size[2]);
  } else {
    geo = new THREE.BoxGeometry(1, 1, 1);
  }

  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.set(data.position[0], data.position[1], data.position[2]);
  if (data.rotation) mesh.rotation.set(data.rotation[0], data.rotation[1], data.rotation[2]);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  mesh.userData.pieceData = data;
  return mesh;
}

function addPiece(data) {
  const mesh = createMeshFromData(data);
  B.scene.add(mesh);
  const piece = { mesh, data: { ...data } };
  B.pieces.push(piece);
  selectPiece(piece);
  refreshPieceList();
  markUnsaved();
  return piece;
}

function removePiece(piece) {
  B.scene.remove(piece.mesh);
  B.transform.detach();
  B.pieces = B.pieces.filter(p => p !== piece);
  if (B.selected === piece) {
    B.selected = null;
    updatePropsUI();
  }
  refreshPieceList();
  markUnsaved();
}

function selectPiece(piece) {
  B.selected = piece;
  if (piece) {
    B.transform.attach(piece.mesh);
  } else {
    B.transform.detach();
  }
  updatePropsUI();
  refreshPieceList();
}

function rebuildMesh(piece) {
  const parent = piece.mesh.parent;
  const wasSelected = B.selected === piece;
  if (wasSelected) B.transform.detach();
  parent.remove(piece.mesh);
  piece.mesh.geometry.dispose();

  const newMesh = createMeshFromData(piece.data);
  piece.mesh = newMesh;
  B.scene.add(newMesh);
  if (wasSelected) {
    B.transform.attach(newMesh);
  }
}

function syncDataFromMesh(piece) {
  const m = piece.mesh;
  piece.data.position = [round3(m.position.x), round3(m.position.y), round3(m.position.z)];
  piece.data.rotation = [round3(m.rotation.x), round3(m.rotation.y), round3(m.rotation.z)];
  if (piece.data.size) {
    piece.data.size = [
      round3(m.scale.x * getBaseSize(piece, 0)),
      round3(m.scale.y * getBaseSize(piece, 1)),
      round3(m.scale.z * getBaseSize(piece, 2)),
    ];
  }
}

function getBaseSize(piece, axis) {
  const params = piece.mesh.geometry.parameters;
  if (piece.data.size && params.width !== undefined) {
    return [params.width, params.height, params.depth][axis];
  }
  return 1;
}

function round3(v) { return Math.round(v * 1000) / 1000; }

function parseColor(c) {
  if (typeof c === 'number') return c;
  if (typeof c === 'string') return parseInt(c.replace('#', ''), 16);
  return 0xffffff;
}

function colorToHex(c) {
  if (typeof c === 'string') return c;
  return '#' + c.toString(16).padStart(6, '0');
}

// ── Picking ──────────────────────────────────────────────

function onPointerDown(e) {
  if (e.button !== 0) return;
  // Ignore if we're interacting with transform gizmo
  if (B.transform.dragging) return;

  const vp = document.getElementById('viewport');
  const rect = vp.getBoundingClientRect();
  B.mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
  B.mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

  B.raycaster.setFromCamera(B.mouse, B.camera);

  // Check placement modes
  if (B.placingStart || B.placingHole) {
    const refPlane = B.scene.children.find(c => c.userData.isHelper && c.geometry &&
      c.geometry.type === 'PlaneGeometry');
    if (refPlane) {
      const hits = B.raycaster.intersectObject(refPlane);
      if (hits.length > 0) {
        const pt = hits[0].point;
        if (B.placingStart) {
          B.startMarker.position.set(pt.x, pt.y + 1, pt.z);
          document.getElementById('sx').value = round3(pt.x);
          document.getElementById('sy').value = round3(pt.y + 1);
          document.getElementById('sz').value = round3(pt.z);
          B.placingStart = false;
          document.getElementById('btn-set-start').classList.remove('active');
        } else {
          B.holeMarker.position.set(pt.x, pt.y + 0.5, pt.z);
          document.getElementById('hx').value = round3(pt.x);
          document.getElementById('hy').value = round3(pt.y + 0.5);
          document.getElementById('hz').value = round3(pt.z);
          B.placingHole = false;
          document.getElementById('btn-set-hole').classList.remove('active');
        }
      }
    }
    return;
  }

  // Pick pieces
  const meshes = B.pieces.map(p => p.mesh);
  const hits = B.raycaster.intersectObjects(meshes, false);
  if (hits.length > 0) {
    const hitMesh = hits[0].object;
    const piece = B.pieces.find(p => p.mesh === hitMesh);
    if (piece) selectPiece(piece);
  } else {
    selectPiece(null);
  }
}

// ── Keyboard ─────────────────────────────────────────────

function onKeyDown(e) {
  if (e.target.tagName === 'INPUT') return;
  switch (e.key.toLowerCase()) {
    case 'g': setMode('translate'); break;
    case 'r': setMode('rotate'); break;
    case 's': setMode('scale'); break;
    case 'f':
      if (B.selected) focusOnSelected();
      break;
    case 'delete':
    case 'backspace':
      if (B.selected) removePiece(B.selected);
      break;
    case 'd':
      if (e.ctrlKey || e.metaKey) { e.preventDefault(); duplicateSelected(); }
      break;
  }
}

function setMode(mode) {
  B.transform.setMode(mode);
  document.getElementById('btn-translate').classList.toggle('active', mode === 'translate');
  document.getElementById('btn-rotate').classList.toggle('active', mode === 'rotate');
  document.getElementById('btn-scale').classList.toggle('active', mode === 'scale');
}

function duplicateSelected() {
  if (!B.selected) return;
  syncDataFromMesh(B.selected);
  const newData = JSON.parse(JSON.stringify(B.selected.data));
  newData.position[0] += 2;
  addPiece(newData);
}

function focusOnSelected() {
  if (!B.selected) return;
  const pos = B.selected.mesh.position;
  B.orbit.target.set(pos.x, pos.y, pos.z);
}

// ── Toolbar ──────────────────────────────────────────────

function setupToolbar() {
  document.getElementById('btn-back').addEventListener('click', onBackClick);
  document.getElementById('btn-translate').addEventListener('click', () => setMode('translate'));
  document.getElementById('btn-rotate').addEventListener('click', () => setMode('rotate'));
  document.getElementById('btn-scale').addEventListener('click', () => setMode('scale'));

  document.getElementById('btn-set-start').addEventListener('click', () => {
    B.placingStart = !B.placingStart;
    B.placingHole = false;
    document.getElementById('btn-set-start').classList.toggle('active', B.placingStart);
    document.getElementById('btn-set-hole').classList.remove('active');
  });

  document.getElementById('btn-set-hole').addEventListener('click', () => {
    B.placingHole = !B.placingHole;
    B.placingStart = false;
    document.getElementById('btn-set-hole').classList.toggle('active', B.placingHole);
    document.getElementById('btn-set-start').classList.remove('active');
  });

  document.getElementById('btn-toggle-time').addEventListener('click', () => {
    B.timeOfDay = B.timeOfDay === 'day' ? 'night' : 'day';
    const btn = document.getElementById('btn-toggle-time');
    btn.textContent = B.timeOfDay === 'day' ? '☀️ Day' : '🌙 Night';
    applyDayNightCycle();
    markUnsaved();
  });

  document.getElementById('btn-toggle-rain').addEventListener('click', () => {
    B.rainEnabled = !B.rainEnabled;
    const btn = document.getElementById('btn-toggle-rain');
    btn.classList.toggle('active', B.rainEnabled);
    if (B.rainEnabled) {
      createRainSystem();
    } else {
      destroyRainSystem();
    }
    markUnsaved();
  });

  document.getElementById('btn-toggle-snap').addEventListener('click', () => {
    B.snapEnabled = !B.snapEnabled;
    const btn = document.getElementById('btn-toggle-snap');
    btn.classList.toggle('active', B.snapEnabled);
  });

  document.getElementById('snap-grid-size').addEventListener('input', (e) => {
    B.snapGridSize = parseFloat(e.target.value) || 0.5;
  });

  document.getElementById('btn-export').addEventListener('click', exportJSON);
  document.getElementById('btn-import').addEventListener('click', () => {
    document.getElementById('file-input').click();
  });
  document.getElementById('file-input').addEventListener('change', importJSON);
  document.getElementById('btn-new').addEventListener('click', newMap);

  // Map name and time limit inputs
  document.getElementById('map-name-input').addEventListener('input', markUnsaved);
  document.getElementById('map-time-input').addEventListener('input', markUnsaved);
}

function onBackClick() {
  if (B.unsavedChanges) {
    if (confirm('You have unsaved changes. Are you sure you want to leave?')) {
      window.location.href = '/';
    }
  } else {
    window.location.href = '/';
  }
}

// ── Palette ──────────────────────────────────────────────

function setupPalette() {
  document.querySelectorAll('.add-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const type = btn.dataset.type;
      const preset = PRESETS[type];
      if (preset) {
        const data = preset();
        // Place in front of camera
        const dir = new THREE.Vector3();
        B.camera.getWorldDirection(dir);
        const pos = B.camera.position.clone().add(dir.multiplyScalar(12));
        data.position = [round3(pos.x), 8.25, round3(pos.z)];
        addPiece(data);
      }
    });
  });
}

// ── Piece List ───────────────────────────────────────────

function refreshPieceList() {
  const list = document.getElementById('piece-list');
  list.innerHTML = '';
  B.pieces.forEach((piece, i) => {
    const div = document.createElement('div');
    div.className = 'piece-item' + (B.selected === piece ? ' selected' : '');

    const swatch = document.createElement('div');
    swatch.className = 'swatch';
    swatch.style.background = colorToHex(piece.data.color);
    div.appendChild(swatch);

    const name = document.createElement('span');
    name.className = 'name';
    name.textContent = `${piece.data.type} ${i + 1}`;
    div.appendChild(name);

    const del = document.createElement('button');
    del.className = 'del-btn';
    del.textContent = '×';
    del.addEventListener('click', (e) => { e.stopPropagation(); removePiece(piece); });
    div.appendChild(del);

    div.addEventListener('click', () => selectPiece(piece));
    list.appendChild(div);
  });
}

// ── Properties Panel ─────────────────────────────────────

function setupProps() {
  // Position
  ['px', 'py', 'pz'].forEach(id => {
    document.getElementById(id).addEventListener('input', () => {
      if (!B.selected) return;
      B.selected.mesh.position.set(
        parseFloat(document.getElementById('px').value) || 0,
        parseFloat(document.getElementById('py').value) || 0,
        parseFloat(document.getElementById('pz').value) || 0,
      );
      syncDataFromMesh(B.selected);
      markUnsaved();
    });
  });

  // Rotation
  ['rx', 'ry', 'rz'].forEach(id => {
    document.getElementById(id).addEventListener('input', () => {
      if (!B.selected) return;
      B.selected.mesh.rotation.set(
        parseFloat(document.getElementById('rx').value) || 0,
        parseFloat(document.getElementById('ry').value) || 0,
        parseFloat(document.getElementById('rz').value) || 0,
      );
      syncDataFromMesh(B.selected);
      markUnsaved();
    });
  });

  // Size (box)
  ['sw', 'sh', 'sd'].forEach(id => {
    document.getElementById(id).addEventListener('input', () => {
      if (!B.selected || B.selected.data.type !== 'box') return;
      B.selected.data.size = [
        parseFloat(document.getElementById('sw').value) || 1,
        parseFloat(document.getElementById('sh').value) || 1,
        parseFloat(document.getElementById('sd').value) || 1,
      ];
      rebuildMesh(B.selected);
      markUnsaved();
    });
  });

  // Cylinder props
  ['crt', 'crb', 'ch', 'cseg'].forEach(id => {
    document.getElementById(id).addEventListener('input', () => {
      if (!B.selected || B.selected.data.type !== 'cylinder') return;
      B.selected.data.radiusTop = parseFloat(document.getElementById('crt').value) || 0.4;
      B.selected.data.radiusBottom = parseFloat(document.getElementById('crb').value) || 0.4;
      B.selected.data.height = parseFloat(document.getElementById('ch').value) || 1;
      B.selected.data.segments = parseInt(document.getElementById('cseg').value) || 8;
      rebuildMesh(B.selected);
      markUnsaved();
    });
  });

  // Color
  document.getElementById('pcolor').addEventListener('input', () => {
    if (!B.selected) return;
    const hex = document.getElementById('pcolor').value;
    B.selected.data.color = hex;
    B.selected.mesh.material.color.set(parseColor(hex));
    markUnsaved();
  });

  // Motion properties
  ['motion-type', 'motion-axis', 'motion-range', 'motion-speed', 'motion-phase'].forEach(id => {
    document.getElementById(id).addEventListener('input', () => {
      if (!B.selected) return;
      const type = document.getElementById('motion-type').value;
      const axis = document.getElementById('motion-axis').value;
      const range = parseFloat(document.getElementById('motion-range').value) || 0;
      const speed = parseFloat(document.getElementById('motion-speed').value) || 0;
      const phase = parseFloat(document.getElementById('motion-phase').value) || 0;
      
      if (type) {
        B.selected.data.motion = {
          type,
          axis,
          range,
          speed,
          phase
        };
      } else {
        delete B.selected.data.motion;
      }
      markUnsaved();
    });
  });

  // Force property (launcher, cannon, speedboost, bumper)
  document.getElementById('prop-force').addEventListener('input', () => {
    if (!B.selected) return;
    const val = parseFloat(document.getElementById('prop-force').value) || 10;
    const t = B.selected.data.type;
    if (t === 'launcher' || t === 'cannon') B.selected.data.launchForce = val;
    else if (t === 'speedboost') B.selected.data.boostForce = val;
    else if (t === 'bumper') B.selected.data.bumperForce = val;
    markUnsaved();
  });

  // Blower direction
  ['dir-x', 'dir-y', 'dir-z'].forEach(id => {
    document.getElementById(id).addEventListener('input', () => {
      if (!B.selected || B.selected.data.type !== 'blower') return;
      B.selected.data.blowDir = [
        parseFloat(document.getElementById('dir-x').value) || 0,
        parseFloat(document.getElementById('dir-y').value) || 0,
        parseFloat(document.getElementById('dir-z').value) || 0,
      ];
      B.selected.data.blowForce = parseFloat(document.getElementById('prop-force').value) || 8;
      markUnsaved();
    });
  });

  // Teleporter target
  ['tp-x', 'tp-y', 'tp-z'].forEach(id => {
    document.getElementById(id).addEventListener('input', () => {
      if (!B.selected || B.selected.data.type !== 'teleporter') return;
      B.selected.data.target = [
        parseFloat(document.getElementById('tp-x').value) || 0,
        parseFloat(document.getElementById('tp-y').value) || 8.8,
        parseFloat(document.getElementById('tp-z').value) || 0,
      ];
      markUnsaved();
    });
  });

  // Magnet properties
  ['mag-force', 'mag-radius'].forEach(id => {
    document.getElementById(id).addEventListener('input', () => {
      if (!B.selected || B.selected.data.type !== 'magnet') return;
      B.selected.data.magnetForce = parseFloat(document.getElementById('mag-force').value) || 6;
      B.selected.data.magnetRadius = parseFloat(document.getElementById('mag-radius').value) || 5;
      markUnsaved();
    });
  });

  // Conveyor properties
  ['conv-speed', 'conv-dx', 'conv-dz'].forEach(id => {
    document.getElementById(id).addEventListener('input', () => {
      if (!B.selected || B.selected.data.type !== 'conveyor') return;
      B.selected.data.conveyorSpeed = parseFloat(document.getElementById('conv-speed').value) || 5;
      B.selected.data.conveyorDir = [
        parseFloat(document.getElementById('conv-dx').value) || 0,
        0,
        parseFloat(document.getElementById('conv-dz').value) || -1,
      ];
      markUnsaved();
    });
  });

  // Delete / Duplicate
  document.getElementById('btn-delete').addEventListener('click', () => {
    if (B.selected) removePiece(B.selected);
  });
  document.getElementById('btn-duplicate').addEventListener('click', duplicateSelected);

  // Start / Hole position inputs
  ['sx', 'sy', 'sz'].forEach(id => {
    document.getElementById(id).addEventListener('input', () => {
      B.startMarker.position.set(
        parseFloat(document.getElementById('sx').value) || 0,
        parseFloat(document.getElementById('sy').value) || 9,
        parseFloat(document.getElementById('sz').value) || 0,
      );
      markUnsaved();
    });
  });
  ['hx', 'hy', 'hz'].forEach(id => {
    document.getElementById(id).addEventListener('input', () => {
      B.holeMarker.position.set(
        parseFloat(document.getElementById('hx').value) || 0,
        parseFloat(document.getElementById('hy').value) || 8.5,
        parseFloat(document.getElementById('hz').value) || 0,
      );
      markUnsaved();
    });
  });
}

function updatePropsUI() {
  const noSel = document.getElementById('no-selection');
  const props = document.getElementById('props');
  if (!B.selected) {
    noSel.style.display = 'block';
    props.style.display = 'none';
    return;
  }
  noSel.style.display = 'none';
  props.style.display = 'block';

  const d = B.selected.data;
  const m = B.selected.mesh;

  document.getElementById('px').value = round3(m.position.x);
  document.getElementById('py').value = round3(m.position.y);
  document.getElementById('pz').value = round3(m.position.z);
  document.getElementById('rx').value = round3(m.rotation.x);
  document.getElementById('ry').value = round3(m.rotation.y);
  document.getElementById('rz').value = round3(m.rotation.z);

  const hasSize = d.size !== undefined;
  const isCyl = d.type === 'cylinder' || d.type === 'bumper';
  document.getElementById('box-size-group').style.display = hasSize ? 'block' : 'none';
  document.getElementById('cyl-size-group').style.display = isCyl ? 'block' : 'none';

  if (hasSize) {
    document.getElementById('sw').value = d.size[0];
    document.getElementById('sh').value = d.size[1];
    document.getElementById('sd').value = d.size[2];
  }
  if (isCyl) {
    document.getElementById('crt').value = d.radiusTop;
    document.getElementById('crb').value = d.radiusBottom;
    document.getElementById('ch').value = d.height;
    document.getElementById('cseg').value = d.segments || 8;
  }

  document.getElementById('pcolor').value = colorToHex(d.color);

  // Motion properties
  const motion = d.motion;
  if (motion) {
    document.getElementById('motion-type').value = motion.type || '';
    document.getElementById('motion-axis').value = motion.axis || 'x';
    document.getElementById('motion-range').value = motion.range || 0;
    document.getElementById('motion-speed').value = motion.speed || 0;
    document.getElementById('motion-phase').value = motion.phase || 0;
  } else {
    document.getElementById('motion-type').value = '';
    document.getElementById('motion-axis').value = 'x';
    document.getElementById('motion-range').value = 0;
    document.getElementById('motion-speed').value = 0;
    document.getElementById('motion-phase').value = 0;
  }

  // Show/hide special property groups based on type
  const forceTypes = ['launcher', 'cannon', 'speedboost', 'bumper', 'blower'];
  const showForce = forceTypes.includes(d.type);
  document.getElementById('force-group').style.display = showForce ? 'block' : 'none';
  if (showForce) {
    const forceVal = d.launchForce || d.boostForce || d.bumperForce || d.blowForce || 10;
    document.getElementById('prop-force').value = forceVal;
  }

  const showDir = d.type === 'blower';
  document.getElementById('direction-group').style.display = showDir ? 'block' : 'none';
  if (showDir && d.blowDir) {
    document.getElementById('dir-x').value = d.blowDir[0] || 0;
    document.getElementById('dir-y').value = d.blowDir[1] || 0;
    document.getElementById('dir-z').value = d.blowDir[2] || 0;
  }

  const showTp = d.type === 'teleporter';
  document.getElementById('teleporter-group').style.display = showTp ? 'block' : 'none';
  if (showTp && d.target) {
    document.getElementById('tp-x').value = d.target[0] || 0;
    document.getElementById('tp-y').value = d.target[1] || 8.8;
    document.getElementById('tp-z').value = d.target[2] || 0;
  }

  const showMag = d.type === 'magnet';
  document.getElementById('magnet-group').style.display = showMag ? 'block' : 'none';
  if (showMag) {
    document.getElementById('mag-force').value = d.magnetForce || 6;
    document.getElementById('mag-radius').value = d.magnetRadius || 5;
  }

  const showConv = d.type === 'conveyor';
  document.getElementById('conveyor-group').style.display = showConv ? 'block' : 'none';
  if (showConv) {
    document.getElementById('conv-speed').value = d.conveyorSpeed || 5;
    document.getElementById('conv-dx').value = (d.conveyorDir && d.conveyorDir[0]) || 0;
    document.getElementById('conv-dz').value = (d.conveyorDir && d.conveyorDir[2]) || -1;
  }
}

// ── Import / Export ──────────────────────────────────────

function exportJSON() {
  // Sync all pieces
  B.pieces.forEach(p => syncDataFromMesh(p));

  const mapData = {
    name: document.getElementById('map-name-input').value || 'Untitled',
    timeLimit: parseInt(document.getElementById('map-time-input').value) || 120,
    timeOfDay: B.timeOfDay,
    rain: B.rainEnabled,
    start: [
      parseFloat(document.getElementById('sx').value) || 0,
      parseFloat(document.getElementById('sy').value) || 9,
      parseFloat(document.getElementById('sz').value) || 0,
    ],
    hole: [
      parseFloat(document.getElementById('hx').value) || 0,
      parseFloat(document.getElementById('hy').value) || 8.5,
      parseFloat(document.getElementById('hz').value) || -20,
    ],
    pieces: B.pieces.map(p => {
      const d = { ...p.data };
      // Clean up: ensure position and rotation are fresh
      d.position = [...d.position];
      if (d.rotation) d.rotation = [...d.rotation];
      return d;
    }),
  };

  const json = JSON.stringify(mapData, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = (mapData.name.replace(/\s+/g, '_').toLowerCase() || 'map') + '.json';
  a.click();
  URL.revokeObjectURL(url);
  
  // Clear unsaved flag after successful export
  B.unsavedChanges = false;
}

function importJSON(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (ev) => {
    try {
      const data = JSON.parse(ev.target.result);
      loadMapData(data);
    } catch (err) {
      alert('Invalid JSON file');
    }
  };
  reader.readAsText(file);
  e.target.value = '';
}

function loadMapData(data) {
  // Clear existing
  while (B.pieces.length > 0) removePiece(B.pieces[0]);

  document.getElementById('map-name-input').value = data.name || 'Untitled';
  document.getElementById('map-time-input').value = data.timeLimit !== undefined ? data.timeLimit : 120;

  // Restore time of day
  B.timeOfDay = data.timeOfDay || 'day';
  const btn = document.getElementById('btn-toggle-time');
  btn.textContent = B.timeOfDay === 'day' ? '☀️ Day' : '🌙 Night';
  applyDayNightCycle();

  // Restore rain setting (or enable for test.json)
  const mapName = (data.name || '').toLowerCase();
  B.rainEnabled = data.rain || (mapName === 'test');
  const rainBtn = document.getElementById('btn-toggle-rain');
  rainBtn.classList.toggle('active', B.rainEnabled);
  if (B.rainEnabled) {
    createRainSystem();
  } else {
    destroyRainSystem();
  }

  if (data.start) {
    document.getElementById('sx').value = data.start[0];
    document.getElementById('sy').value = data.start[1];
    document.getElementById('sz').value = data.start[2];
    B.startMarker.position.set(data.start[0], data.start[1], data.start[2]);
  }
  if (data.hole) {
    document.getElementById('hx').value = data.hole[0];
    document.getElementById('hy').value = data.hole[1];
    document.getElementById('hz').value = data.hole[2];
    B.holeMarker.position.set(data.hole[0], data.hole[1], data.hole[2]);
  }

  for (const p of (data.pieces || [])) {
    addPiece(p);
  }

  selectPiece(null);

  // Center camera on course
  if (data.start && data.hole) {
    const cx = (data.start[0] + data.hole[0]) / 2;
    const cz = (data.start[2] + data.hole[2]) / 2;
    B.orbit.target.set(cx, 8, cz);
  }

  // Clear unsaved flag after successful import
  B.unsavedChanges = false;
}

function newMap() {
  while (B.pieces.length > 0) removePiece(B.pieces[0]);
  document.getElementById('map-name-input').value = 'Untitled';
  document.getElementById('sx').value = 0;
  document.getElementById('sy').value = 9;
  document.getElementById('sz').value = 0;
  document.getElementById('hx').value = 0;
  document.getElementById('hy').value = 8.5;
  document.getElementById('hz').value = -20;
  B.startMarker.position.set(0, 9, 0);
  B.holeMarker.position.set(0, 8.5, -20);
  B.orbit.target.set(0, 8, -10);
  selectPiece(null);

  // Reset rain
  B.rainEnabled = false;
  const rainBtn = document.getElementById('btn-toggle-rain');
  rainBtn.classList.remove('active');
  destroyRainSystem();

  // Reset snap
  B.snapEnabled = false;
  const snapBtn = document.getElementById('btn-toggle-snap');
  snapBtn.classList.remove('active');

  B.unsavedChanges = false;
}

// ── Go ───────────────────────────────────────────────────

init();
