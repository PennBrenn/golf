import {
  initScene, buildRandomCourse, buildTerrain, fetchMapManifest,
  createLocalBall, resetLocalBall,
  addRemoteBall, removeRemoteBall, updateRemoteBallState,
  setupInput, updateGame, renderGame, resetGameState, enterSpectator,
  Game, BALL_COLORS,
} from './game.js';
import {
  MP, createGame, joinGame, hostStartGame, hostPlayAgain, hostNextRound,
  sendFinish, updateMultiplayerSync, cleanupMultiplayer,
  getLocalPlayer, getPlayerById, PLAYER_COLORS,
} from './network.js';
import {
  initUI, showMainMenu, showLobby, showLoading, hideLoading,
  updatePlayerList, updateStartButton, showCountdown, showHUD, hideHUD,
  updateTimer, updateSwings, updateDragIndicator,
  showSpectatorBanner, hideSpectatorBanner,
  showLeaderboard, hideLeaderboard, showToast, UI,
} from './ui.js';

// ── App State ────────────────────────────────────────────

let gameRunning = false;
const TOTAL_ROUNDS = 3;
let currentRound = 0;
let roundFinishEntries = [];   // { id, name, swings, time } per round

// ── Bootstrap ────────────────────────────────────────────

function init() {
  const container = document.getElementById('game-container');

  initScene(container);
  setupInput();
  initUI();

  // Wire UI callbacks
  UI.onCreateGame = handleCreateGame;
  UI.onJoinGame = handleJoinGame;
  UI.onStartGame = handleStartGame;
  UI.onPlayAgain = handlePlayAgain;
  UI.onNextRound = handleNextRound;
  UI.onColorPick = (color) => { Game.ballColor = color; };

  // Wire game callbacks
  Game.onDragChanged = (ratio, active) => updateDragIndicator(ratio, active);
  Game.onFinishHole = handleLocalFinish;
  Game.onSwingCountChanged = (count) => updateSwings(count);
  Game.onTimeUpdate = (t) => updateTimer(t);

  showMainMenu();
  loop();
}

// ── Game Loop ────────────────────────────────────────────

function loop() {
  requestAnimationFrame(loop);
  const dt = Math.min(Game.clock.getDelta(), 0.05);

  if (gameRunning) {
    updateGame(dt);
    updateMultiplayerSync(dt, Game.ballBody);
  }

  renderGame();
}

// ── Network Callbacks ────────────────────────────────────

function wireNetworkCallbacks() {
  MP.onPlayerListChanged = (players) => {
    updatePlayerList(players);
    if (MP.isHost) updateStartButton(players.length >= 1);
    if (gameRunning) syncRemoteBalls(players);
  };

  MP.onGameStart = () => {
    currentRound = 0;
    MP.leaderboard = [];
    startNextRound();
  };

  MP.onRemoteBallUpdate = (playerId, position, velocity, timestamp) => {
    const player = getPlayerById(playerId);
    if (player && !Game.remoteBalls[playerId]) {
      addRemoteBall(playerId, PLAYER_COLORS[player.colorIndex] || 0x4488ff, player.name);
    }
    updateRemoteBallState(playerId, position, velocity, timestamp);
  };

  MP.onFinish = (playerId, playerName, swings, time) => {
    handleRemoteFinish(playerId, playerName, swings, time);
  };

  MP.onNextRound = () => {
    hideLeaderboard();
    startNextRound();
  };

  MP.onPlayAgain = () => {
    handleReturnToLobby();
  };

  MP.onDisconnect = (message) => {
    gameRunning = false;
    resetGameState();
    showToast(message, 4000);
    setTimeout(() => showMainMenu(), 1500);
  };

  MP.onChat = (name, text) => {
    showToast(`${name}: ${text}`, 3000);
  };
}

// ── Create / Join ────────────────────────────────────────

async function handleCreateGame(name) {
  try {
    wireNetworkCallbacks();
    const code = await createGame(name);
    showLobby(code, true);
    updatePlayerList(MP.players);
  } catch (err) {
    showToast('Failed to create game: ' + err.message);
    console.error(err);
  }
}

async function handleJoinGame(name, code) {
  try {
    wireNetworkCallbacks();
    await joinGame(name, code);
    showLobby(code, false);
  } catch (err) {
    showToast('Failed to join: ' + err.message);
    console.error(err);
  }
}

// ── Start / Gameplay ─────────────────────────────────────

function handleStartGame() {
  if (!MP.isHost) return;
  hostStartGame();
}

function startNextRound() {
  currentRound++;
  roundFinishEntries = [];

  showCountdown(async () => {
    resetGameState();
    await buildRandomCourse();

    const local = getLocalPlayer();
    const colorIndex = local ? local.colorIndex : 0;
    createLocalBall(PLAYER_COLORS[colorIndex] || Game.ballColor);

    for (const p of MP.players) {
      if (p.id !== MP.localId) {
        addRemoteBall(p.id, PLAYER_COLORS[p.colorIndex] || 0x4488ff, p.name);
      }
    }

    gameRunning = true;
    hideSpectatorBanner();
  });
}

function syncRemoteBalls(players) {
  for (const p of players) {
    if (p.id !== MP.localId && !Game.remoteBalls[p.id]) {
      addRemoteBall(p.id, PLAYER_COLORS[p.colorIndex] || 0x4488ff, p.name);
    }
  }
  const ids = new Set(players.map(p => p.id));
  for (const pid of Object.keys(Game.remoteBalls)) {
    if (!ids.has(pid)) removeRemoteBall(pid);
  }
}

// ── Finish Handling ──────────────────────────────────────

function handleLocalFinish() {
  const swings = Game.swings;
  const time = Game.elapsedTime;
  sendFinish(swings, time);

  // Enter spectator mode
  enterSpectator();
  showSpectatorBanner();
  showToast('You finished! Watching others...', 3000);

  checkAllFinished();
}

function handleRemoteFinish(playerId, playerName, swings, time) {
  if (!roundFinishEntries.find(e => e.id === playerId)) {
    roundFinishEntries.push({ id: playerId, name: playerName, swings, time });
  }
  showToast(`${playerName} finished! (${swings} swings, ${time.toFixed(1)}s)`, 3000);
  checkAllFinished();
}

function checkAllFinished() {
  // Add local entry if finished and not yet in list
  if (Game.hasFinished && !roundFinishEntries.find(e => e.id === MP.localId)) {
    roundFinishEntries.push({ id: MP.localId, name: MP.localName, swings: Game.swings, time: Game.elapsedTime });
  }

  if (roundFinishEntries.length >= MP.players.length) {
    gameRunning = false;
    // Accumulate to leaderboard
    for (const entry of roundFinishEntries) {
      MP.leaderboard.push(entry);
    }
    setTimeout(() => {
      showLeaderboard(roundFinishEntries, currentRound, TOTAL_ROUNDS, MP.isHost);
    }, 1500);
  }
}

// ── Next Round / Play Again ──────────────────────────────

function handleNextRound() {
  if (!MP.isHost) return;
  hostNextRound();
}

function handlePlayAgain() {
  if (MP.isHost) {
    hostPlayAgain();
  }
}

function handleReturnToLobby() {
  gameRunning = false;
  resetGameState();
  hideHUD();
  hideLeaderboard();
  currentRound = 0;
  MP.leaderboard = [];
  showLobby(MP.roomCode, MP.isHost);
  updatePlayerList(MP.players);
  if (MP.isHost) updateStartButton(MP.players.length >= 1);
}

// ── Go ───────────────────────────────────────────────────

init();
