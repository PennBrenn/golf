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
};

// ── Piece Defaults ───────────────────────────────────────

const PRESETS = {
  box:      () => ({ type: 'box', size: [4, 0.5, 4], position: [0, 8.25, 0], rotation: [0, 0, 0], color: '#5ab85a' }),
  cylinder: () => ({ type: 'cylinder', radiusTop: 0.4, radiusBottom: 0.4, height: 1.5, segments: 8, position: [0, 9, 0], color: '#5588cc' }),
  wall:     () => ({ type: 'box', size: [0.3, 0.8, 8], position: [0, 8.6, 0], rotation: [0, 0, 0], color: '#8B6914' }),
  ramp:     () => ({ type: 'box', size: [4, 0.5, 6], position: [0, 9.5, 0], rotation: [-0.28, 0, 0], color: '#7ec87e' }),
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
  B.renderer.setClearColor(0x87ceeb);
  viewport.appendChild(B.renderer.domElement);

  B.scene = new THREE.Scene();
  B.scene.fog = new THREE.Fog(0x87ceeb, 80, 200);

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
    if (B.selected) syncDataFromMesh(B.selected);
    updatePropsUI();
  });
  B.scene.add(B.transform);

  // Lights
  B.ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  B.scene.add(B.ambientLight);
  B.directionalLight = new THREE.DirectionalLight(0xffffff, 1.0);
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

  setupToolbar();
  setupPalette();
  setupProps();

  animate();
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
    B.renderer.setClearColor(0x87ceeb);
    B.scene.fog.color.setHex(0x87ceeb);
    B.ambientLight.intensity = 0.5;
    B.ambientLight.color.setHex(0xffffff);
    B.directionalLight.intensity = 1.0;
    B.directionalLight.color.setHex(0xffffff);
  }
}

function animate() {
  requestAnimationFrame(animate);
  B.orbit.update();
  B.renderer.render(B.scene, B.camera);
}

// ── Piece Management ─────────────────────────────────────

function createMeshFromData(data) {
  let geo, mat;
  const color = parseColor(data.color);
  mat = new THREE.MeshStandardMaterial({ color, flatShading: true });

  if (data.type === 'box') {
    geo = new THREE.BoxGeometry(data.size[0], data.size[1], data.size[2]);
  } else if (data.type === 'cylinder') {
    geo = new THREE.CylinderGeometry(data.radiusTop, data.radiusBottom, data.height, data.segments || 8);
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
  if (piece.data.type === 'box') {
    piece.data.size = [
      round3(m.scale.x * getBaseSize(piece, 0)),
      round3(m.scale.y * getBaseSize(piece, 1)),
      round3(m.scale.z * getBaseSize(piece, 2)),
    ];
  }
}

function getBaseSize(piece, axis) {
  const params = piece.mesh.geometry.parameters;
  if (piece.data.type === 'box') {
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

// ── Toolbar ──────────────────────────────────────────────

function setupToolbar() {
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
  });

  document.getElementById('btn-export').addEventListener('click', exportJSON);
  document.getElementById('btn-import').addEventListener('click', () => {
    document.getElementById('file-input').click();
  });
  document.getElementById('file-input').addEventListener('change', importJSON);
  document.getElementById('btn-new').addEventListener('click', newMap);
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
    });
  });

  // Color
  document.getElementById('pcolor').addEventListener('input', () => {
    if (!B.selected) return;
    const hex = document.getElementById('pcolor').value;
    B.selected.data.color = hex;
    B.selected.mesh.material.color.set(parseColor(hex));
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
    });
  });
  ['hx', 'hy', 'hz'].forEach(id => {
    document.getElementById(id).addEventListener('input', () => {
      B.holeMarker.position.set(
        parseFloat(document.getElementById('hx').value) || 0,
        parseFloat(document.getElementById('hy').value) || 8.5,
        parseFloat(document.getElementById('hz').value) || 0,
      );
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

  const isBox = d.type === 'box';
  const isCyl = d.type === 'cylinder';
  document.getElementById('box-size-group').style.display = isBox ? 'block' : 'none';
  document.getElementById('cyl-size-group').style.display = isCyl ? 'block' : 'none';

  if (isBox) {
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
}

// ── Import / Export ──────────────────────────────────────

function exportJSON() {
  // Sync all pieces
  B.pieces.forEach(p => syncDataFromMesh(p));

  const mapData = {
    name: document.getElementById('map-name-input').value || 'Untitled',
    timeLimit: parseInt(document.getElementById('map-time-input').value) || 120,
    timeOfDay: B.timeOfDay,
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
}

// ── Go ───────────────────────────────────────────────────

init();
