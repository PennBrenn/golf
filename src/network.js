import Peer from 'peerjs';
import { generateRoomCode } from './words.js';

// Message type constants
export const MSG = {
  WELCOME: 'welcome',
  PLAYER_JOINED: 'playerJoined',
  PLAYER_LEFT: 'playerLeft',
  LOBBY_STATE: 'lobbyState',
  GAME_START: 'gameStart',
  BALL_UPDATE: 'ballUpdate',
  REMOTE_BALL_UPDATE: 'remoteBallUpdate',
  FINISH: 'finish',
  NEXT_ROUND: 'nextRound',
  PLAY_AGAIN: 'playAgain',
  CHAT: 'chat',
};

const MAX_PLAYERS = 4;
const SYNC_RATE = 1 / 20; // 20 ticks per second

// Player colors assigned by join order
export const PLAYER_COLORS = [0xff4444, 0x4488ff, 0xffcc00, 0x44cc44];
export const PLAYER_COLOR_NAMES = ['red', 'blue', 'yellow', 'green'];

// Multiplayer state — single object, no scattered globals
export const MP = {
  peer: null,
  isHost: false,
  roomCode: null,
  localName: 'Player',
  localId: null,
  connections: {},      // peerId → DataConnection (host keeps all; guest keeps 'host')
  players: [],          // { id, name, colorIndex, isHost }
  syncTimer: 0,
  gameActive: false,
  onPlayerListChanged: null,  // callback
  onGameStart: null,          // callback
  onRemoteBallUpdate: null,   // callback
  onFinish: null,             // callback(playerId, playerName, swings, time)
  onNextRound: null,          // callback()
  onPlayAgain: null,          // callback
  leaderboard: [],            // [{ id, name, swings, time }]
  onDisconnect: null,         // callback(message)
  onChat: null,               // callback(name, text)
};

// ── Helpers ──────────────────────────────────────────────

function broadcast(data) {
  for (const conn of Object.values(MP.connections)) {
    if (conn.open) conn.send(data);
  }
}

function sendToHost(data) {
  const hostConn = MP.connections['host'];
  if (hostConn && hostConn.open) hostConn.send(data);
}

function buildPlayerList() {
  return MP.players.map(p => ({ id: p.id, name: p.name, colorIndex: p.colorIndex, isHost: p.isHost }));
}

function nextColorIndex() {
  const used = new Set(MP.players.map(p => p.colorIndex));
  for (let i = 0; i < MAX_PLAYERS; i++) {
    if (!used.has(i)) return i;
  }
  return 0;
}

// ── Host Logic ───────────────────────────────────────────

export function createGame(name) {
  MP.localName = name || 'Player 1';
  MP.isHost = true;
  MP.roomCode = generateRoomCode();
  MP.players = [];
  MP.connections = {};
  MP.gameActive = false;

  return new Promise((resolve, reject) => {
    const peerId = 'golf-' + MP.roomCode;
    MP.peer = new Peer(peerId);

    MP.peer.on('open', (id) => {
      MP.localId = id;
      // Add host as first player
      MP.players.push({
        id: MP.localId,
        name: MP.localName,
        colorIndex: 0,
        isHost: true,
      });
      if (MP.onPlayerListChanged) MP.onPlayerListChanged(MP.players);
      resolve(MP.roomCode);
    });

    MP.peer.on('connection', (conn) => {
      setupHostConnection(conn);
    });

    MP.peer.on('error', (err) => {
      console.error('PeerJS host error:', err);
      reject(err);
    });
  });
}

function setupHostConnection(conn) {
  conn.on('open', () => {
    // Reject if full
    if (MP.players.length >= MAX_PLAYERS) {
      conn.send({ type: MSG.WELCOME, rejected: true, reason: 'Game is full' });
      setTimeout(() => conn.close(), 100);
      return;
    }

    // Reject if game already started
    if (MP.gameActive) {
      conn.send({ type: MSG.WELCOME, rejected: true, reason: 'Game in progress' });
      setTimeout(() => conn.close(), 100);
      return;
    }

    MP.connections[conn.peer] = conn;

    // Add player (name comes in metadata or first message; we use metadata)
    const guestName = (conn.metadata && conn.metadata.name) || 'Player';
    const colorIndex = nextColorIndex();
    const newPlayer = { id: conn.peer, name: guestName, colorIndex, isHost: false };
    MP.players.push(newPlayer);

    // Send welcome to the new guest
    conn.send({
      type: MSG.WELCOME,
      rejected: false,
      yourColorIndex: colorIndex,
      players: buildPlayerList(),
    });

    // Notify all other guests
    for (const [pid, c] of Object.entries(MP.connections)) {
      if (pid !== conn.peer && c.open) {
        c.send({ type: MSG.PLAYER_JOINED, player: newPlayer });
      }
    }

    if (MP.onPlayerListChanged) MP.onPlayerListChanged(MP.players);

    conn.on('data', (data) => handleHostReceive(conn.peer, data));

    conn.on('close', () => {
      handleHostDisconnect(conn.peer);
    });
  });
}

function handleHostReceive(peerId, data) {
  switch (data.type) {
    case MSG.BALL_UPDATE:
      // Relay to all other guests as remoteBallUpdate
      for (const [pid, c] of Object.entries(MP.connections)) {
        if (pid !== peerId && c.open) {
          c.send({
            type: MSG.REMOTE_BALL_UPDATE,
            playerId: peerId,
            position: data.position,
            velocity: data.velocity,
            timestamp: data.timestamp,
          });
        }
      }
      // Also handle locally (host sees remote ball)
      if (MP.onRemoteBallUpdate) {
        MP.onRemoteBallUpdate(peerId, data.position, data.velocity, data.timestamp);
      }
      break;

    case MSG.FINISH:
      // Relay finish to all guests
      broadcast({ type: MSG.FINISH, playerId: data.playerId, playerName: data.playerName, swings: data.swings, time: data.time });
      if (MP.onFinish) MP.onFinish(data.playerId, data.playerName, data.swings, data.time);
      break;

    case MSG.CHAT:
      // Relay chat to all guests
      broadcast({ type: MSG.CHAT, name: data.name, text: data.text });
      if (MP.onChat) MP.onChat(data.name, data.text);
      break;

    default:
      break;
  }
}

function handleHostDisconnect(peerId) {
  delete MP.connections[peerId];
  MP.players = MP.players.filter(p => p.id !== peerId);
  broadcast({ type: MSG.PLAYER_LEFT, playerId: peerId });
  if (MP.onPlayerListChanged) MP.onPlayerListChanged(MP.players);
}

// ── Guest Logic ──────────────────────────────────────────

export function joinGame(name, code) {
  MP.localName = name || 'Player';
  MP.isHost = false;
  MP.roomCode = code.toUpperCase().trim();
  MP.players = [];
  MP.connections = {};
  MP.gameActive = false;

  return new Promise((resolve, reject) => {
    MP.peer = new Peer(undefined);

    MP.peer.on('open', (id) => {
      MP.localId = id;

      const conn = MP.peer.connect('golf-' + MP.roomCode, {
        metadata: { name: MP.localName },
        reliable: true,
      });

      conn.on('open', () => {
        MP.connections['host'] = conn;

        conn.on('data', (data) => handleGuestReceive(data));

        conn.on('close', () => {
          if (MP.onDisconnect) MP.onDisconnect('Host left the game');
          cleanupMultiplayer();
        });
      });

      conn.on('error', (err) => {
        console.error('Guest connection error:', err);
        reject(err);
      });

      // Timeout if no connection after 8s
      setTimeout(() => {
        if (!MP.connections['host']) {
          reject(new Error('Could not connect to room ' + MP.roomCode));
          cleanupMultiplayer();
        }
      }, 8000);
    });

    MP.peer.on('error', (err) => {
      console.error('PeerJS guest error:', err);
      reject(err);
    });

    // resolve is called when we receive welcome
    MP._resolveJoin = resolve;
    MP._rejectJoin = reject;
  });
}

function handleGuestReceive(data) {
  switch (data.type) {
    case MSG.WELCOME:
      if (data.rejected) {
        if (MP.onDisconnect) MP.onDisconnect(data.reason || 'Rejected');
        cleanupMultiplayer();
        if (MP._rejectJoin) MP._rejectJoin(new Error(data.reason || 'Rejected'));
        return;
      }
      MP.players = data.players;
      // Find our own entry and tag it
      const me = MP.players.find(p => p.id === MP.localId);
      if (me) me.colorIndex = data.yourColorIndex;
      if (MP.onPlayerListChanged) MP.onPlayerListChanged(MP.players);
      if (MP._resolveJoin) MP._resolveJoin(MP.roomCode);
      MP._resolveJoin = null;
      MP._rejectJoin = null;
      break;

    case MSG.PLAYER_JOINED:
      MP.players.push(data.player);
      if (MP.onPlayerListChanged) MP.onPlayerListChanged(MP.players);
      break;

    case MSG.PLAYER_LEFT:
      MP.players = MP.players.filter(p => p.id !== data.playerId);
      if (MP.onPlayerListChanged) MP.onPlayerListChanged(MP.players);
      break;

    case MSG.LOBBY_STATE:
      MP.players = data.players;
      if (MP.onPlayerListChanged) MP.onPlayerListChanged(MP.players);
      break;

    case MSG.GAME_START:
      MP.gameActive = true;
      if (MP.onGameStart) MP.onGameStart();
      break;

    case MSG.REMOTE_BALL_UPDATE:
      if (MP.onRemoteBallUpdate) {
        MP.onRemoteBallUpdate(data.playerId, data.position, data.velocity, data.timestamp);
      }
      break;

    case MSG.FINISH:
      if (MP.onFinish) MP.onFinish(data.playerId, data.playerName, data.swings, data.time);
      break;

    case MSG.NEXT_ROUND:
      if (MP.onNextRound) MP.onNextRound();
      break;

    case MSG.PLAY_AGAIN:
      MP.gameActive = false;
      if (MP.onPlayAgain) MP.onPlayAgain();
      break;

    case MSG.CHAT:
      if (MP.onChat) MP.onChat(data.name, data.text);
      break;

    default:
      break;
  }
}

// ── Actions (called from game/ui) ────────────────────────

export function hostStartGame() {
  if (!MP.isHost) return;
  MP.gameActive = true;
  broadcast({ type: MSG.GAME_START });
  if (MP.onGameStart) MP.onGameStart();
}

export function sendBallUpdate(position, velocity) {
  const payload = {
    type: MSG.BALL_UPDATE,
    position: { x: position.x, y: position.y, z: position.z },
    velocity: { x: velocity.x, y: velocity.y, z: velocity.z },
    timestamp: Date.now(),
  };

  if (MP.isHost) {
    // Host sends to all guests as remoteBallUpdate
    for (const [pid, c] of Object.entries(MP.connections)) {
      if (c.open) {
        c.send({
          type: MSG.REMOTE_BALL_UPDATE,
          playerId: MP.localId,
          position: payload.position,
          velocity: payload.velocity,
          timestamp: payload.timestamp,
        });
      }
    }
  } else {
    sendToHost(payload);
  }
}

export function sendFinish(swings, time) {
  const payload = {
    type: MSG.FINISH,
    playerId: MP.localId,
    playerName: MP.localName,
    swings,
    time,
  };

  if (MP.isHost) {
    broadcast(payload);
    if (MP.onFinish) MP.onFinish(MP.localId, MP.localName, swings, time);
  } else {
    sendToHost(payload);
  }
}

export function hostNextRound() {
  if (!MP.isHost) return;
  broadcast({ type: MSG.NEXT_ROUND });
  if (MP.onNextRound) MP.onNextRound();
}

export function hostPlayAgain() {
  if (!MP.isHost) return;
  MP.gameActive = false;
  broadcast({ type: MSG.PLAY_AGAIN });
  if (MP.onPlayAgain) MP.onPlayAgain();
}

export function sendChat(text) {
  const payload = { type: MSG.CHAT, name: MP.localName, text };
  if (MP.isHost) {
    broadcast(payload);
    if (MP.onChat) MP.onChat(MP.localName, text);
  } else {
    sendToHost(payload);
  }
}

// ── Sync Tick (called every frame from game loop) ────────

export function updateMultiplayerSync(dt, localBallBody) {
  if (!MP.peer || !MP.gameActive || !localBallBody) return;

  MP.syncTimer += dt;
  if (MP.syncTimer >= SYNC_RATE) {
    MP.syncTimer = 0;
    sendBallUpdate(localBallBody.position, localBallBody.velocity);
  }
}

// ── Cleanup ──────────────────────────────────────────────

export function cleanupMultiplayer() {
  for (const conn of Object.values(MP.connections)) {
    try { conn.close(); } catch (e) { /* ignore */ }
  }
  MP.connections = {};
  MP.players = [];
  MP.gameActive = false;
  MP.syncTimer = 0;
  MP.leaderboard = [];
  if (MP.peer) {
    try { MP.peer.destroy(); } catch (e) { /* ignore */ }
    MP.peer = null;
  }
}

export function getLocalPlayer() {
  return MP.players.find(p => p.id === MP.localId) || null;
}

export function getPlayerById(id) {
  return MP.players.find(p => p.id === id) || null;
}
