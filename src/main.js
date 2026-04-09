import {
  initScene, buildCourseByIndex, buildTerrain, fetchMapManifest,
  getAllMapData, renderMapThumbnail, loadMenuBackground, updateMenuCamera,
  createLocalBall, resetLocalBall,
  addRemoteBall, removeRemoteBall, updateRemoteBallState,
  setupInput, updateGame, renderGame, resetGameState, enterSpectator,
  Game, BALL_COLORS,
} from './game.js';
import {
  MP, createGame, joinGame, hostStartGame, hostPlayAgain, hostNextRound,
  sendFinish, sendVote, hostBroadcastVoteUpdate, hostBroadcastVoteResult,
  updateMultiplayerSync, cleanupMultiplayer,
  getLocalPlayer, getPlayerById, PLAYER_COLORS,
} from './network.js';
import {
  initUI, showMainMenu, showLobby, showLoading, hideLoading,
  updatePlayerList, updateStartButton, showCountdown, showHUD, hideHUD,
  updateTimer, updateSwings, updateDragIndicator,
  showSpectatorBanner, hideSpectatorBanner,
  showLeaderboard, hideLeaderboard,
  showMapVote, updateMapVotes, showVoteWinner, hideMapVote,
  showToast, UI,
} from './ui.js';

// ── App State ────────────────────────────────────────────

let gameRunning = false;
let menuMode = true;
const TOTAL_ROUNDS = 3;
let currentRound = 0;
let roundFinishEntries = [];

// Voting state (host only)
let allMaps = [];
let allThumbnails = [];
let votes = {};          // { mapIndex: count }
let votersThisRound = new Set();
let voteTimer = null;

// ── Bootstrap ────────────────────────────────────────────

async function init() {
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
  UI.onMapVote = (mapIndex) => { sendVote(mapIndex); };

  // Wire game callbacks
  Game.onDragChanged = (ratio, active) => updateDragIndicator(ratio, active);
  Game.onFinishHole = handleLocalFinish;
  Game.onSwingCountChanged = (count) => updateSwings(count);
  Game.onTimeUpdate = (t) => updateTimer(t);

  // Load menu background
  await loadMenuBackground();
  showMainMenu();
  loop();
}

// ── Game Loop ────────────────────────────────────────────

const menuClock = { start: Date.now() };

function loop() {
  requestAnimationFrame(loop);
  const dt = Math.min(Game.clock.getDelta(), 0.05);

  if (gameRunning) {
    updateGame(dt);
    updateMultiplayerSync(dt, Game.ballBody);
  } else if (menuMode) {
    const t = (Date.now() - menuClock.start) / 1000;
    updateMenuCamera(t);
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
    menuMode = false;
    startVotingPhase();
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
    startVotingPhase();
  };

  MP.onPlayAgain = () => {
    handleReturnToLobby();
  };

  MP.onDisconnect = (message) => {
    gameRunning = false;
    menuMode = true;
    resetGameState();
    showToast(message, 4000);
    setTimeout(async () => { await loadMenuBackground(); showMainMenu(); }, 1500);
  };

  MP.onChat = (name, text) => {
    showToast(`${name}: ${text}`, 3000);
  };

  // Vote callbacks (host collects, guests receive updates)
  MP.onVote = (peerId, mapIndex) => {
    // Host-side vote collection
    if (!votersThisRound.has(peerId)) {
      // Remove previous vote if re-voting
      votersThisRound.add(peerId);
    }
    // Recount: track per-player votes
    if (!MP._playerVotes) MP._playerVotes = {};
    const prev = MP._playerVotes[peerId];
    if (prev !== undefined && votes[prev] > 0) votes[prev]--;
    MP._playerVotes[peerId] = mapIndex;
    votes[mapIndex] = (votes[mapIndex] || 0) + 1;
    hostBroadcastVoteUpdate(votes);
    updateMapVotes(votes);
  };

  MP.onVoteUpdate = (v) => {
    votes = v;
    updateMapVotes(v);
  };

  MP.onVoteResult = (winnerIndex) => {
    handleVoteResult(winnerIndex);
  };
}

// ── Map Voting ───────────────────────────────────────────

async function startVotingPhase() {
  // Generate thumbnails if not yet done
  if (allMaps.length === 0) {
    allMaps = await getAllMapData();
    allThumbnails = allMaps.map(m => renderMapThumbnail(m));
  }

  // Reset vote state
  votes = {};
  votersThisRound = new Set();
  if (MP._playerVotes) MP._playerVotes = {};

  showMapVote(allMaps, allThumbnails);

  // Host starts 10-second timer then resolves
  if (MP.isHost) {
    if (voteTimer) clearTimeout(voteTimer);
    voteTimer = setTimeout(() => {
      resolveVotes();
    }, 10000);
  }
}

function resolveVotes() {
  if (voteTimer) { clearTimeout(voteTimer); voteTimer = null; }

  // Find max votes
  let maxVotes = 0;
  for (const count of Object.values(votes)) {
    if (count > maxVotes) maxVotes = count;
  }

  let candidates = [];
  if (maxVotes === 0) {
    // No votes: pick random
    candidates = allMaps.map((_, i) => i);
  } else {
    for (const [idx, count] of Object.entries(votes)) {
      if (count === maxVotes) candidates.push(parseInt(idx));
    }
  }

  const winnerIndex = candidates[Math.floor(Math.random() * candidates.length)];
  hostBroadcastVoteResult(winnerIndex);
}

function handleVoteResult(winnerIndex) {
  const mapName = allMaps[winnerIndex] ? allMaps[winnerIndex].name : 'Map ' + (winnerIndex + 1);
  showVoteWinner(mapName);

  setTimeout(() => {
    hideMapVote();
    startNextRound(winnerIndex);
  }, 2000);
}

// ── Create / Join ────────────────────────────────────────

async function handleCreateGame(name) {
  try {
    wireNetworkCallbacks();
    const code = await createGame(name);
    menuMode = false;
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
    menuMode = false;
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

function startNextRound(mapIndex) {
  currentRound++;
  roundFinishEntries = [];

  showCountdown(async () => {
    resetGameState();
    await buildCourseByIndex(mapIndex);

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
  if (Game.hasFinished && !roundFinishEntries.find(e => e.id === MP.localId)) {
    roundFinishEntries.push({ id: MP.localId, name: MP.localName, swings: Game.swings, time: Game.elapsedTime });
  }

  if (roundFinishEntries.length >= MP.players.length) {
    gameRunning = false;
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
