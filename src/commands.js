import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { Game, resetLocalBall } from './game.js';
import { MP, getPlayerById } from './network.js';

// ── State ─────────────────────────────────────────────────

let _showMsg = null; // injected: (text, color) => void
let _kickPlayer = null; // injected: (id) => void
let _showSystemMsgFn = null;

export let flyEnabled = false;
export let adminCommandsEnabled = false;
const flyKeys = {};
let flyRafId = null;
const FLY_SPEED = 0.15;

export function setAdminCommandsEnabled(enabled) {
  adminCommandsEnabled = enabled;
}

// ── Init ──────────────────────────────────────────────────

export function initCommands(showMsgCallback, kickPlayerCallback) {
  _showMsg = showMsgCallback;
  _kickPlayer = kickPlayerCallback;
  _showSystemMsgFn = showMsgCallback;

  window.addEventListener('keydown', (e) => {
    if (flyEnabled) flyKeys[e.key.toLowerCase()] = true;
  });
  window.addEventListener('keyup', (e) => {
    flyKeys[e.key.toLowerCase()] = false;
  });
}

// ── Dispatch ──────────────────────────────────────────────

export function handleCommand(input) {
  const parts = input.trim().split(/\s+/);
  const name = parts[0].slice(1).toLowerCase();
  const args = parts.slice(1);

  const cmd = COMMANDS[name];
  if (!cmd) {
    msg(`Unknown command: /${name}. Type /help for commands.`, '#ff8888');
    return;
  }
  cmd.fn(args);
}

// ── Helper ────────────────────────────────────────────────

function msg(text, color = '#aaffcc') {
  if (_showMsg) _showMsg(text, color);
}

function requireBall() {
  if (!Game.ballBody || !Game.ball) { msg('No active ball.', '#ff8888'); return false; }
  return true;
}

function requireHost(cmdName) {
  if (!MP.isHost) { msg(`/${cmdName} is host-only.`, '#ff8888'); return false; }
  return true;
}

function requireAdmin(cmdName) {
  if (!adminCommandsEnabled) { msg(`/${cmdName} requires admin commands to be enabled.`, '#ff8888'); return false; }
  if (!MP.isHost) { msg(`/${cmdName} is host-only.`, '#ff8888'); return false; }
  return true;
}

function findPlayer(nameArg) {
  if (!nameArg) return null;
  const lower = nameArg.toLowerCase();
  return MP.players.find(p =>
    p.id !== MP.localId && p.name.toLowerCase().includes(lower)
  );
}

// ── Fly loop ──────────────────────────────────────────────

function startFlyLoop() {
  if (flyRafId) return;
  function tick() {
    if (!flyEnabled || !Game.ballBody) { flyRafId = null; return; }
    const cam = Game.camera;
    const forward = new THREE.Vector3();
    const right = new THREE.Vector3();
    cam.getWorldDirection(forward); forward.y = 0; forward.normalize();
    right.crossVectors(forward, new THREE.Vector3(0, 1, 0)).normalize();

    const move = new THREE.Vector3();
    if (flyKeys['w'] || flyKeys['arrowup'])    move.add(forward);
    if (flyKeys['s'] || flyKeys['arrowdown'])  move.sub(forward);
    if (flyKeys['a'] || flyKeys['arrowleft'])  move.sub(right);
    if (flyKeys['d'] || flyKeys['arrowright']) move.add(right);
    if (flyKeys['q'] || flyKeys[' '])          move.y += 1;
    if (flyKeys['e'] || flyKeys['shift'])       move.y -= 1;

    if (move.length() > 0) {
      move.normalize().multiplyScalar(FLY_SPEED);
      Game.ballBody.position.x += move.x;
      Game.ballBody.position.y += move.y;
      Game.ballBody.position.z += move.z;
    }
    flyRafId = requestAnimationFrame(tick);
  }
  flyRafId = requestAnimationFrame(tick);
}

function stopFlyLoop() {
  if (flyRafId) { cancelAnimationFrame(flyRafId); flyRafId = null; }
}

// ── Commands ──────────────────────────────────────────────

const COMMANDS = {
  help: {
    usage: '/help',
    desc: 'Show all available commands',
    fn() {
      msg('── Golf but Penn Commands ──', '#ffff88');
      for (const [, cmd] of Object.entries(COMMANDS)) {
        msg(`${cmd.usage}  —  ${cmd.desc}`, '#ddffdd');
      }
    }
  },

  fly: {
    usage: '/fly',
    desc: 'Toggle fly/noclip mode (WASD=move, Q/E=up/down)',
    fn() {
      if (!requireBall()) return;
      if (!requireAdmin('fly')) return;
      flyEnabled = !flyEnabled;
      if (flyEnabled) {
        Game.ballBody.type = CANNON.Body.KINEMATIC;
        Game.ballBody.velocity.setZero();
        Game.ballBody.angularVelocity.setZero();
        Game.ballBody.collisionFilterMask = 0;
        startFlyLoop();
        msg('Fly mode ON — WASD to move, Q/E up/down', '#aaffaa');
      } else {
        Game.ballBody.type = CANNON.Body.DYNAMIC;
        Game.ballBody.collisionFilterMask = ~0;
        stopFlyLoop();
        msg('Fly mode OFF', '#ffccaa');
      }
    }
  },

  kick: {
    usage: '/kick <name>',
    desc: 'Kick a player from the lobby (admin only)',
    fn([name]) {
      if (!requireAdmin('kick')) return;
      if (!name) { msg('Usage: /kick <name>', '#ff8888'); return; }
      const target = findPlayer(name);
      if (!target) { msg(`Player "${name}" not found.`, '#ff8888'); return; }
      if (_kickPlayer) _kickPlayer(target.id);
      msg(`Kicked ${target.name}.`, '#ffaaaa');
    }
  },

  reset: {
    usage: '/reset [name]',
    desc: 'Reset your ball (or another player\'s if admin)',
    fn([name]) {
      if (name) {
        if (!requireAdmin('reset')) return;
        const target = findPlayer(name);
        if (!target) { msg(`Player "${name}" not found.`, '#ff8888'); return; }
        msg(`Reset sent to ${target.name}. (Requires broadcast — coming soon)`, '#ffccaa');
      } else {
        if (!requireBall()) return;
        resetLocalBall();
        msg('Ball reset to last position.', '#aaffaa');
      }
    }
  },

  tp: {
    usage: '/tp <x> <y> <z>',
    desc: 'Teleport your ball to world coordinates',
    fn([x, y, z]) {
      if (!requireBall()) return;
      const nx = parseFloat(x), ny = parseFloat(y), nz = parseFloat(z);
      if (isNaN(nx) || isNaN(ny) || isNaN(nz)) {
        msg('Usage: /tp <x> <y> <z>', '#ff8888'); return;
      }
      Game.ballBody.position.set(nx, ny, nz);
      Game.ballBody.velocity.setZero();
      Game.ballBody.angularVelocity.setZero();
      msg(`Teleported to (${nx}, ${ny}, ${nz})`, '#aaffaa');
    }
  },

  color: {
    usage: '/color <#hex>',
    desc: 'Change your ball color instantly',
    fn([hex]) {
      if (!requireBall()) return;
      if (!hex || !/^#?[0-9a-fA-F]{6}$/.test(hex)) {
        msg('Usage: /color <#rrggbb>', '#ff8888'); return;
      }
      const clean = hex.startsWith('#') ? hex : '#' + hex;
      const num = parseInt(clean.slice(1), 16);
      Game.ballColor = num;
      Game.ball.material.color.setHex(num);
      if (Game.ball.material.emissiveIntensity > 0) Game.ball.material.emissive.setHex(num);
      msg(`Ball color set to ${clean}`, '#aaffaa');
    }
  },

  wind: {
    usage: '/wind <x> <z>',
    desc: 'Set wind direction and strength (admin only)',
    fn([x, z]) {
      if (!requireAdmin('wind')) return;
      const nx = parseFloat(x) || 0, nz = parseFloat(z) || 0;
      Game.wind.x = nx; Game.wind.z = nz;
      msg(`Wind set to x=${nx} z=${nz}`, '#aaffaa');
    }
  },

  gravity: {
    usage: '/gravity <value>',
    desc: 'Set gravity strength (default: -20)',
    fn([val]) {
      const g = parseFloat(val);
      if (isNaN(g)) { msg('Usage: /gravity <value> e.g. /gravity -20', '#ff8888'); return; }
      if (Game.world) {
        Game.world.gravity.set(0, g, 0);
        msg(`Gravity set to ${g}`, '#aaffaa');
      }
    }
  },

  zoom: {
    usage: '/zoom <distance>',
    desc: 'Set camera zoom distance (default: ~12)',
    fn([val]) {
      const d = parseFloat(val);
      if (isNaN(d) || d <= 0) { msg('Usage: /zoom <distance>', '#ff8888'); return; }
      if (Game.controls && Game.camera && Game.ball) {
        const dir = new THREE.Vector3()
          .subVectors(Game.camera.position, Game.controls.target)
          .normalize();
        Game.camera.position.copy(Game.ball.position).addScaledVector(dir, d);
        msg(`Zoom set to ${d}`, '#aaffaa');
      } else {
        msg('No active camera/ball.', '#ff8888');
      }
    }
  },

  speed: {
    usage: '/speed <1-50>',
    desc: 'Set max shot power multiplier (default: 20)',
    fn([val]) {
      const s = parseFloat(val);
      if (isNaN(s) || s <= 0) { msg('Usage: /speed <value>', '#ff8888'); return; }
      Game.maxPower = Math.min(s, 100);
      msg(`Max shot power set to ${Game.maxPower}`, '#aaffaa');
    }
  },

  spectate: {
    usage: '/spectate',
    desc: 'Enter spectator mode',
    fn() {
      if (!Game.ball) { msg('No game running.', '#ff8888'); return; }
      Game.spectatorMode = true;
      if (Game.ball) Game.ball.visible = false;
      msg('Entered spectator mode.', '#aaffaa');
    }
  },

  clear: {
    usage: '/clear',
    desc: 'Clear the chat log',
    fn() {
      const log = document.getElementById('chat-log');
      if (log) log.innerHTML = '';
      msg('Chat cleared.', '#aaffaa');
    }
  },

  time: {
    usage: '/time <+seconds>',
    desc: 'Add seconds to the timer (admin only)',
    fn([val]) {
      if (!requireAdmin('time')) return;
      const t = parseInt(val);
      if (isNaN(t)) { msg('Usage: /time <seconds>', '#ff8888'); return; }
      Game.timerStart -= t * 1000;
      msg(`Added ${t}s to timer.`, '#aaffaa');
    }
  },

  noclip: {
    usage: '/noclip',
    desc: 'Toggle ball collision on/off',
    fn() {
      if (!requireBall()) return;
      const off = Game.ballBody.collisionFilterMask === 0;
      if (off) {
        Game.ballBody.collisionFilterMask = ~0;
        msg('Collisions ON', '#aaffaa');
      } else {
        Game.ballBody.collisionFilterMask = 0;
        msg('Collisions OFF (noclip)', '#ffccaa');
      }
    }
  },

  pos: {
    usage: '/pos',
    desc: 'Print your current ball coordinates',
    fn() {
      if (!requireBall()) return;
      const p = Game.ballBody.position;
      msg(`Ball position: (${p.x.toFixed(2)}, ${p.y.toFixed(2)}, ${p.z.toFixed(2)})`, '#aaffaa');
    }
  },
};
