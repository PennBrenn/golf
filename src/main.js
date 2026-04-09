import {
  initScene, buildCourse, createLocalBall, resetLocalBall,
  addRemoteBall, removeRemoteBall, updateRemoteBallState,
  setupInput, updateGame, renderGame, resetGameState, Game,
} from './game.js';
import {
  MP, createGame, joinGame, hostStartGame, hostPlayAgain,
  sendWin, updateMultiplayerSync, cleanupMultiplayer,
  getLocalPlayer, getPlayerById, PLAYER_COLORS,
} from './network.js';
import {
  initUI, showMainMenu, showLobby, updatePlayerList,
  updateStartButton, showCountdown, showHUD, hideHUD,
  updateChargeBar, showWinScreen, showToast, UI,
} from './ui.js';

// ── App State ────────────────────────────────────────────

let gameRunning = false;

// ── Bootstrap ────────────────────────────────────────────

function init() {
  const container = document.getElementById('game-container');

  // Init scene, physics, course, input, UI
  initScene(container);
  buildCourse();
  setupInput();
  initUI();

  // Wire UI callbacks
  UI.onCreateGame = handleCreateGame;
  UI.onJoinGame = handleJoinGame;
  UI.onStartGame = handleStartGame;
  UI.onPlayAgain = handlePlayAgain;

  // Wire game callbacks
  Game.onChargeChanged = updateChargeBar;
  Game.onWinHole = handleLocalWin;

  // Show main menu
  showMainMenu();

  // Start render loop
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
    // Enable start button if host and ≥2 players
    if (MP.isHost) {
      updateStartButton(players.length >= 2);
    }
    // Add/remove remote balls if game is active
    if (gameRunning) {
      syncRemoteBalls(players);
    }
  };

  MP.onGameStart = () => {
    startGameplay();
  };

  MP.onRemoteBallUpdate = (playerId, position, velocity, timestamp) => {
    // Ensure remote ball exists
    const player = getPlayerById(playerId);
    if (player && !Game.remoteBalls[playerId]) {
      addRemoteBall(playerId, player.colorIndex, player.name);
    }
    updateRemoteBallState(playerId, position, velocity, timestamp);
  };

  MP.onWin = (playerId, playerName) => {
    gameRunning = false;
    showWinScreen(playerName, MP.isHost);
  };

  MP.onPlayAgain = () => {
    handleReturnToLobby();
  };

  MP.onDisconnect = (message) => {
    gameRunning = false;
    resetGameState();
    showToast(message, 4000);
    setTimeout(() => {
      showMainMenu();
    }, 1500);
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

function startGameplay() {
  showCountdown(() => {
    // After countdown, create balls and start
    resetGameState();

    const local = getLocalPlayer();
    const colorIndex = local ? local.colorIndex : 0;
    createLocalBall(colorIndex);

    // Create remote balls for all other players
    for (const p of MP.players) {
      if (p.id !== MP.localId) {
        addRemoteBall(p.id, p.colorIndex, p.name);
      }
    }

    gameRunning = true;
  });
}

function syncRemoteBalls(players) {
  // Add any missing remote balls
  for (const p of players) {
    if (p.id !== MP.localId && !Game.remoteBalls[p.id]) {
      addRemoteBall(p.id, p.colorIndex, p.name);
    }
  }
  // Remove balls for disconnected players
  const ids = new Set(players.map(p => p.id));
  for (const pid of Object.keys(Game.remoteBalls)) {
    if (!ids.has(pid)) {
      removeRemoteBall(pid);
    }
  }
}

// ── Win ──────────────────────────────────────────────────

function handleLocalWin() {
  sendWin();
  gameRunning = false;
  showWinScreen(MP.localName, MP.isHost);
}

// ── Play Again → Lobby ───────────────────────────────────

function handlePlayAgain() {
  if (MP.isHost) {
    hostPlayAgain();
  }
}

function handleReturnToLobby() {
  gameRunning = false;
  resetGameState();
  hideHUD();
  showLobby(MP.roomCode, MP.isHost);
  updatePlayerList(MP.players);
  if (MP.isHost) {
    updateStartButton(MP.players.length >= 2);
  }
}

// ── Go ───────────────────────────────────────────────────

init();
