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
  REMOTE_CHAT: 'remoteChat',
  VOTE: 'vote',
  VOTE_UPDATE: 'voteUpdate',
  VOTE_RESULT: 'voteResult',
  MAP_OPTIONS: 'mapOptions',
};

const MAX_PLAYERS = 4;
const SYNC_RATE = 1 / 20; // 20 ticks per second

// Player colors assigned by join order
export const PLAYER_COLORS = [0xff4444, 0x4488ff, 0xffcc00, 0x44cc44];
export const PLAYER_COLOR_NAMES = ['red', 'blue', 'yellow', 'green'];

// Multiplayer state — single object, no scattered globals
export const MP = {
  ably: null,           // Ably.Realtime instance
  clientId: null,       // this player's clientId
  isHost: false,
  roomCode: null,
  localName: 'Player',
  localId: null,        // alias for clientId (for compatibility)
  players: [],          // [{ id: clientId, name, colorIndex, isHost }]
  connections: {},      // kept for compatibility (but not used with Ably)
  channels: {
    host: null,         // 'golf-<CODE>-host' (host inbox / guest outbox)
    broadcast: null,    // 'golf-<CODE>-broadcast' (host→all)
    lobby: null,        // 'golf-<CODE>-lobby' (presence)
    direct: null,       // 'golf-<CODE>-guest-<myClientId>' (guest inbox)
  },
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
  onVoteUpdate: null,         // callback(votes)
  onVoteResult: null,         // callback(winnerIndex)
  onVote: null,               // callback(peerId, mapIndex) - host only
  onMapOptions: null,         // callback(mapIndices) - guests receive map options from host
  _resolveJoin: null,
  _rejectJoin: null,
  _welcomeTimeout: null,
};

// ── Helpers ──────────────────────────────────────────────

function broadcast(data) {
  if (MP.channels.broadcast) {
    MP.channels.broadcast.publish('msg', data);
  }
}

function sendToHost(data) {
  if (MP.channels.host) {
    MP.channels.host.publish('msg', data);
  }
}

function buildPlayerList() {
  return MP.players.map(p => ({
    id: p.id,
    name: p.name,
    colorIndex: p.colorIndex,
    isHost: p.isHost
  }));
}

function nextColorIndex() {
  const used = new Set(MP.players.map(p => p.colorIndex));
  for (let i = 0; i < MAX_PLAYERS; i++) {
    if (!used.has(i)) return i;
  }
  return 0;
}

function getChannelName(suffix) {
  return `golf-${MP.roomCode}${suffix}`;
}

// ── Host Logic ───────────────────────────────────────────

export function createGame(name) {
  MP.localName = name || 'Player 1';
  MP.isHost = true;
  MP.roomCode = generateRoomCode();
  MP.players = [];
  MP.connections = {};
  MP.gameActive = false;

  const clientId = MP.localName + '-' + Math.random().toString(36).slice(2, 6);
  MP.clientId = clientId;
  MP.localId = clientId;

  return new Promise(async (resolve, reject) => {
    try {
      // Initialize Ably
      MP.ably = new Ably.Realtime({ 
        key: 'pDOguA.oiTwGg:cPn9_2JtlLkwE4_C2Y2AHOaJ0d1gML6bEF4bLELtDH4', 
        clientId: clientId 
      });

      // Wait for connection
      await new Promise((res, rej) => {
        MP.ably.connection.once('connected', res);
        MP.ably.connection.once('failed', rej);
      });

      console.log('Host Ably connected with clientId:', clientId, 'Room code:', MP.roomCode);

      // Set up channels
      MP.channels.host = MP.ably.channels.get(getChannelName('-host'));
      MP.channels.broadcast = MP.ably.channels.get(getChannelName('-broadcast'));
      MP.channels.lobby = MP.ably.channels.get(getChannelName('-lobby'));

      // Subscribe to host channel (guest messages)
      MP.channels.host.subscribe('msg', (message) => {
        handleHostReceive(message.clientId, message.data);
      });

      // Enter presence
      await MP.channels.lobby.presence.enter({
        name: MP.localName,
        colorIndex: 0,
        isHost: true
      });

      // Add host as first player
      MP.players.push({
        id: clientId,
        name: MP.localName,
        colorIndex: 0,
        isHost: true,
      });

      // Subscribe to presence events
      MP.channels.lobby.presence.subscribe('enter', (member) => {
        if (member.clientId !== clientId) {
          // Guest joined via presence, send welcome
          const colorIndex = nextColorIndex();
          const newPlayer = {
            id: member.clientId,
            name: member.data.name,
            colorIndex,
            isHost: false,
          };
          MP.players.push(newPlayer);

          // Send welcome to this guest
          const guestChannel = MP.ably.channels.get(getChannelName(`-guest-${member.clientId}`));
          guestChannel.publish('msg', {
            type: MSG.WELCOME,
            rejected: false,
            yourColorIndex: colorIndex,
            players: buildPlayerList(),
          });

          // Notify all other guests
          broadcast({
            type: MSG.PLAYER_JOINED,
            player: newPlayer
          });

          if (MP.onPlayerListChanged) MP.onPlayerListChanged(buildPlayerList());
        }
      });

      MP.channels.lobby.presence.subscribe('leave', (member) => {
        if (member.clientId !== clientId) {
          handleHostDisconnect(member.clientId);
        }
      });

      // Get current presence set for late joiners
      const members = await MP.channels.lobby.presence.get();
      members.forEach(m => {
        if (m.clientId !== clientId && !MP.players.find(p => p.id === m.clientId)) {
          MP.players.push({
            id: m.clientId,
            name: m.data.name,
            colorIndex: m.data.colorIndex,
            isHost: m.data.isHost || false,
          });
        }
      });

      if (MP.onPlayerListChanged) MP.onPlayerListChanged(buildPlayerList());
      resolve(MP.roomCode);

    } catch (e) {
      console.error('Host Ably error:', e);
      reject(new Error('Failed to create game: ' + (e.message || 'check your connection')));
    }
  });
}

function handleHostReceive(clientId, data) {
  switch (data.type) {
    case MSG.BALL_UPDATE:
      // Relay to all other guests as remoteBallUpdate
      broadcast({
        type: MSG.REMOTE_BALL_UPDATE,
        playerId: clientId,
        position: data.position,
        velocity: data.velocity,
        timestamp: data.timestamp,
      });
      // Also handle locally (host sees remote ball)
      if (MP.onRemoteBallUpdate) {
        MP.onRemoteBallUpdate(clientId, data.position, data.velocity, data.timestamp);
      }
      break;

    case MSG.FINISH:
      // Relay finish to all guests
      broadcast({ 
        type: MSG.FINISH, 
        playerId: data.playerId, 
        playerName: data.playerName, 
        swings: data.swings, 
        time: data.time 
      });
      if (MP.onFinish) MP.onFinish(data.playerId, data.playerName, data.swings, data.time);
      break;

    case MSG.CHAT:
      // Relay chat to all guests with sender ID
      broadcast({ 
        type: MSG.REMOTE_CHAT, 
        playerId: clientId, 
        name: data.name, 
        text: data.text 
      });
      if (MP.onChat) MP.onChat(clientId, data.name, data.text);
      break;

    case MSG.VOTE:
      // Host collects votes and rebroadcasts update
      if (MP.onVote) MP.onVote(clientId, data.mapIndex);
      break;

    default:
      break;
  }
}

function handleHostDisconnect(clientId) {
  MP.players = MP.players.filter(p => p.id !== clientId);
  broadcast({ type: MSG.PLAYER_LEFT, playerId: clientId });
  if (MP.onPlayerListChanged) MP.onPlayerListChanged(buildPlayerList());
}

// ── Guest Logic ──────────────────────────────────────────

export function joinGame(name, code) {
  MP.localName = name || 'Player';
  MP.isHost = false;
  MP.roomCode = code.toUpperCase().trim();
  MP.players = [];
  MP.connections = {};
  MP.gameActive = false;

  const clientId = MP.localName + '-' + Math.random().toString(36).slice(2, 6);
  MP.clientId = clientId;
  MP.localId = clientId;

  return new Promise(async (resolve, reject) => {
    try {
      // Initialize Ably
      MP.ably = new Ably.Realtime({ 
        key: 'pDOguA.oiTwGg:cPn9_2JtlLkwE4_C2Y2AHOaJ0d1gML6bEF4bLELtDH4', 
        clientId: clientId 
      });

      // Wait for connection
      await new Promise((res, rej) => {
        MP.ably.connection.once('connected', res);
        MP.ably.connection.once('failed', rej);
      });

      // Set up channels
      MP.channels.host = MP.ably.channels.get(getChannelName('-host'));
      MP.channels.broadcast = MP.ably.channels.get(getChannelName('-broadcast'));
      MP.channels.lobby = MP.ably.channels.get(getChannelName('-lobby'));
      MP.channels.direct = MP.ably.channels.get(getChannelName(`-guest-${clientId}`));

      // Subscribe to broadcast channel (host messages to all)
      MP.channels.broadcast.subscribe('msg', (message) => {
        handleGuestReceive(message.data);
      });

      // Subscribe to direct channel (host messages to this guest)
      MP.channels.direct.subscribe('msg', (message) => {
        handleGuestReceive(message.data);
      });

      // Enter presence
      await MP.channels.lobby.presence.enter({
        name: MP.localName,
        colorIndex: 0,
        isHost: false
      });

      // Send join message to host
      MP.channels.host.publish('msg', {
        type: 'playerJoined',
        name: MP.localName,
        clientId,
        color: 0,
      });

      // Subscribe to presence events
      MP.channels.lobby.presence.subscribe('leave', (member) => {
        if (MP.onDisconnect) MP.onDisconnect('Player left the game');
        cleanupMultiplayer();
      });

      // Connection state monitoring
      MP.ably.connection.on('disconnected', () => {
        if (MP.onDisconnect) MP.onDisconnect('Disconnected from server');
      });

      MP.ably.connection.on('failed', () => {
        if (MP.onDisconnect) MP.onDisconnect('Connection failed');
        cleanupMultiplayer();
      });

      // Timeout if no welcome after 10 seconds
      MP._welcomeTimeout = setTimeout(() => {
        if (MP._resolveJoin) {
          MP._rejectJoin(new Error('Room not found or host left'));
          cleanupMultiplayer();
        }
      }, 10000);

      // resolve is called when we receive welcome
      MP._resolveJoin = resolve;
      MP._rejectJoin = reject;

    } catch (e) {
      console.error('Guest Ably error:', e);
      reject(new Error('Failed to connect to game: ' + (e.message || 'check your connection')));
    }
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
      // Players is already an array from host
      MP.players = data.players;
      // Find our own entry and tag it
      const me = MP.players.find(p => p.id === MP.clientId);
      if (me) me.colorIndex = data.yourColorIndex;
      
      // Clear welcome timeout
      if (MP._welcomeTimeout) {
        clearTimeout(MP._welcomeTimeout);
        MP._welcomeTimeout = null;
      }
      
      if (MP.onPlayerListChanged) MP.onPlayerListChanged(buildPlayerList());
      if (MP._resolveJoin) MP._resolveJoin(MP.roomCode);
      MP._resolveJoin = null;
      MP._rejectJoin = null;
      break;

    case MSG.PLAYER_JOINED:
      MP.players.push(data.player);
      if (MP.onPlayerListChanged) MP.onPlayerListChanged(buildPlayerList());
      break;

    case MSG.PLAYER_LEFT:
      MP.players = MP.players.filter(p => p.id !== data.playerId);
      if (MP.onPlayerListChanged) MP.onPlayerListChanged(buildPlayerList());
      break;

    case MSG.LOBBY_STATE:
      MP.players = data.players;
      if (MP.onPlayerListChanged) MP.onPlayerListChanged(buildPlayerList());
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

    case MSG.REMOTE_CHAT:
      if (MP.onChat) MP.onChat(data.playerId, data.name, data.text);
      break;

    case MSG.VOTE_UPDATE:
      if (MP.onVoteUpdate) MP.onVoteUpdate(data.votes);
      break;

    case MSG.VOTE_RESULT:
      if (MP.onVoteResult) MP.onVoteResult(data.winnerIndex);
      break;

    case MSG.MAP_OPTIONS:
      if (MP.onMapOptions) MP.onMapOptions(data.mapIndices);
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
    broadcast({
      type: MSG.REMOTE_BALL_UPDATE,
      playerId: MP.clientId,
      position: payload.position,
      velocity: payload.velocity,
      timestamp: payload.timestamp,
    });
  } else {
    sendToHost(payload);
  }
}

export function sendFinish(swings, time) {
  const payload = {
    type: MSG.FINISH,
    playerId: MP.clientId,
    playerName: MP.localName,
    swings,
    time,
  };

  if (MP.isHost) {
    broadcast(payload);
    if (MP.onFinish) MP.onFinish(MP.clientId, MP.localName, swings, time);
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

export function sendVote(mapIndex) {
  const payload = { type: MSG.VOTE, mapIndex };
  if (MP.isHost) {
    if (MP.onVote) MP.onVote(MP.clientId, mapIndex);
  } else {
    sendToHost(payload);
  }
}

export function hostBroadcastVoteUpdate(votes) {
  if (!MP.isHost) return;
  broadcast({ type: MSG.VOTE_UPDATE, votes });
}

export function hostBroadcastVoteResult(winnerIndex) {
  if (!MP.isHost) return;
  broadcast({ type: MSG.VOTE_RESULT, winnerIndex });
  if (MP.onVoteResult) MP.onVoteResult(winnerIndex);
}

export function hostBroadcastMapOptions(mapIndices) {
  if (!MP.isHost) return;
  broadcast({ type: MSG.MAP_OPTIONS, mapIndices });
}

export function sendChat(text) {
  const payload = { type: MSG.CHAT, name: MP.localName, text };
  if (MP.isHost) {
    broadcast({ type: MSG.REMOTE_CHAT, playerId: MP.clientId, name: MP.localName, text });
    if (MP.onChat) MP.onChat(MP.clientId, MP.localName, text);
  } else {
    sendToHost(payload);
  }
}

// ── Sync Tick (called every frame from game loop) ────────

export function updateMultiplayerSync(dt, localBallBody) {
  if (!MP.ably || !MP.gameActive || !localBallBody) return;

  MP.syncTimer += dt;
  if (MP.syncTimer >= SYNC_RATE) {
    MP.syncTimer = 0;
    sendBallUpdate(localBallBody.position, localBallBody.velocity);
  }
}

// ── Cleanup ──────────────────────────────────────────────

export function cleanupMultiplayer() {
  // Clear welcome timeout
  if (MP._welcomeTimeout) {
    clearTimeout(MP._welcomeTimeout);
    MP._welcomeTimeout = null;
  }

  // Leave presence
  if (MP.channels.lobby) {
    MP.channels.lobby.presence.leave();
  }

  // Close Ably connection
  if (MP.ably) {
    MP.ably.close();
  }

  // Reset state
  MP.ably = null;
  MP.channels = {
    host: null,
    broadcast: null,
    lobby: null,
    direct: null,
  };
  MP.players = [];
  MP.connections = {};
  MP.gameActive = false;
  MP.syncTimer = 0;
  MP.leaderboard = [];
  MP.isHost = false;
  MP.roomCode = null;
  MP.clientId = null;
  MP.localId = null;
  MP._resolveJoin = null;
  MP._rejectJoin = null;
}

export function getLocalPlayer() {
  return MP.players.find(p => p.id === MP.clientId) || null;
}

export function getPlayerById(id) {
  return MP.players.find(p => p.id === id) || null;
}
