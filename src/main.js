import {
  initScene, buildCourseByIndex, buildCourseFromJSON, buildTerrain, fetchMapManifest,
  getAllMapData, renderMapThumbnail, loadMenuBackground, updateMenuCamera,
  createLocalBall, resetLocalBall, updateBallAppearance, clearCourse,
  addRemoteBall, removeRemoteBall, updateRemoteBallState,
  setupInput, updateGame, renderGame, resetGameState, enterSpectator,
  showChatBubble, updateMovingPieces, applyWindFromMapData, applyDayNightCycle,
  Game, BALL_COLORS,
} from './game.js';
import {
  MP, createGame, joinGame, hostStartGame, hostPlayAgain, hostNextRound,
  sendFinish, sendChat, sendVote, hostBroadcastVoteUpdate, hostBroadcastVoteResult,
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
  showToast, loadSettings, getSettings, UI,
  showESCMenu, hideESCMenu, showKickPlayers, hideKickPlayers,
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

  // Load settings before scene init
  const settings = loadSettings();

  initScene(container);
  applySettings(settings);
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
  UI.onSettingsChanged = (s) => applySettings(s);
  UI.onReturnToMenu = handleReturnToMenuFromGame;
  UI.onKickPlayer = handleKickPlayer;
  UI.onResetBall = handleResetBall;

  // Override showKickPlayers to pass current players
  UI.showKickPlayers = () => showKickPlayers(MP.players);

  // Override showESCMenu to pass host status
  UI.showESCMenu = () => showESCMenu(MP.isHost);

  // Wire game callbacks
  Game.onDragChanged = (ratio, active) => updateDragIndicator(ratio, active);
  Game.onFinishHole = handleLocalFinish;
  Game.onSwingCountChanged = (count) => updateSwings(count);
  Game.onTimeUpdate = (t) => updateTimer(t);
  Game.onTimeUp = handleTimeUp;
  Game.onWaterSplash = () => showToast('Splash! +1 stroke penalty', 2500);

  // Chat input
  setupChatInput();

  // Check for builder test mode
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('test') === 'builder') {
    await startBuilderTestMode();
    loop();
    return;
  }

  // Load menu background
  showLoading('Loading...');
  await loadMenuBackground();
  hideLoading();
  showMainMenu();
  loop();
}

// ── Chat ─────────────────────────────────────────────────

function setupChatInput() {
  const container = document.getElementById('chat-input-container');
  const input = document.getElementById('chat-input');
  let chatOpen = false;

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      if (!chatOpen) {
        container.classList.add('visible');
        input.focus();
        chatOpen = true;
        e.preventDefault();
      } else {
        const text = input.value.trim();
        if (text && MP.ably) {
          sendChat(text);
          const local = getLocalPlayer();
          const colorHex = local ? playerColorHex(local.colorIndex) : '#ffffff';
          showChatBubble('local', text, colorHex);
          addChatLogMsg(MP.localName, text, colorHex);
        }
        input.value = '';
        container.classList.remove('visible');
        input.blur();
        chatOpen = false;
        e.preventDefault();
      }
    }
    if (e.key === 'Escape' && chatOpen) {
      input.value = '';
      container.classList.remove('visible');
      input.blur();
      chatOpen = false;
    }
  });
}

function playerColorHex(colorIndex) {
  const colors = [0xff4444, 0x4488ff, 0xffcc00, 0x44cc44];
  const c = colors[colorIndex] ?? 0xffffff;
  return '#' + c.toString(16).padStart(6, '0');
}

const chatLogMessages = [];
function addChatLogMsg(name, text, colorHex) {
  const log = document.getElementById('chat-log');
  const div = document.createElement('div');
  div.className = 'chat-log-msg';
  div.innerHTML = `<span style="color:${colorHex}">${escapeHtml(name)}:</span> ${escapeHtml(text)}`;
  log.appendChild(div);
  chatLogMessages.push(div);
  if (chatLogMessages.length > 10) {
    const old = chatLogMessages.shift();
    old.remove();
  }
  log.scrollTop = log.scrollHeight;
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// ── Builder Test Mode ────────────────────────────────────

async function startBuilderTestMode() {
  try {
    const raw = localStorage.getItem('__builder_test_map');
    if (!raw) { showToast('No test map data found'); return; }
    const mapData = JSON.parse(raw);

    // Hide all screens, show HUD
    document.querySelectorAll('.screen').forEach(s => s.style.display = 'none');
    showHUD();

    clearCourse();
    buildCourseFromJSON(mapData);
    buildTerrain();
    if (mapData.timeOfDay) applyDayNightCycle(mapData.timeOfDay);

    Game.startPosition.set(mapData.start[0], mapData.start[1], mapData.start[2]);
    Game.holePosition.set(mapData.hole[0], mapData.hole[1], mapData.hole[2]);
    Game.timeLimit = mapData.timeLimit || 120;
    Game.remainingTime = Game.timeLimit;

    createLocalBall(Game.ballColor);
    Game.ballBody.position.set(mapData.start[0], mapData.start[1], mapData.start[2]);
    Game.lastSwingPosition.set(mapData.start[0], mapData.start[1], mapData.start[2]);
    Game.lastSafePosition.copy(Game.lastSwingPosition);
    Game.timerStart = Date.now();
    Game.swings = 0;
    Game.hasFinished = false;

    gameRunning = true;
    menuMode = false;
  } catch (e) {
    console.error('Builder test mode error:', e);
  }
}

// ── Apply Settings ───────────────────────────────────────

function applySettings(s) {
  // Ball color
  Game.ballColor = s.ballColor;

  // Hat, glow, and trail
  updateBallAppearance(s.hat, s.glowIntensity, s.ballTrail, s.trailColor);

  // Shadows
  if (s.shadows === 'off') {
    Game.renderer.shadowMap.enabled = false;
  } else {
    Game.renderer.shadowMap.enabled = true;
    Game.renderer.shadowMap.type = s.shadows === 'low'
      ? 0 /* THREE.BasicShadowMap */ : 2 /* THREE.PCFSoftShadowMap */;
  }

  // Camera sensitivity
  if (Game.controls) {
    Game.controls.rotateSpeed = (s.cameraSensitivity || 100) / 100;
  }

  // Populate name input on main menu if available
  const nameInput = document.getElementById('input-name');
  if (nameInput && s.playerName && !nameInput.value) {
    nameInput.value = s.playerName;
  }
}

// ── Game Loop ────────────────────────────────────────────

const menuClock = { start: Date.now() };

// FPS counter
let fpsFrames = 0, fpsLast = performance.now(), fpsValue = 0;
const fpsEl = document.createElement('div');
fpsEl.id = 'fps-counter';
fpsEl.style.cssText = 'position:fixed;top:8px;left:8px;color:rgba(255,255,255,0.7);font:600 13px/1 "Nunito",sans-serif;z-index:9999;pointer-events:none;text-shadow:0 1px 3px rgba(0,0,0,0.5);';
document.body.appendChild(fpsEl);

function loop() {
  requestAnimationFrame(loop);
  const dt = Math.min(Game.clock.getDelta(), 0.05);

  // Update FPS
  fpsFrames++;
  const now = performance.now();
  if (now - fpsLast >= 500) {
    fpsValue = Math.round(fpsFrames / ((now - fpsLast) / 1000));
    fpsEl.textContent = fpsValue + ' FPS';
    fpsFrames = 0;
    fpsLast = now;
  }

  if (gameRunning) {
    updateMovingPieces(dt);
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

  MP.onChat = (playerId, name, text) => {
    const player = getPlayerById(playerId);
    const colorHex = player ? playerColorHex(player.colorIndex) : '#ffffff';
    showChatBubble(playerId, text, colorHex);
    addChatLogMsg(name, text, colorHex);
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
    updateStartButton(MP.players.length >= 1);
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

function updateWindIndicator() {
  const el = document.getElementById('wind-indicator');
  if (!el) return;
  const strength = Math.sqrt(Game.wind.x * Game.wind.x + Game.wind.z * Game.wind.z);
  let label = 'Calm';
  if (strength > 1) label = 'Breeze';
  if (strength > 2) label = 'Gusty';
  if (strength > 3) label = 'Strong';

  const angle = Math.atan2(Game.wind.z, Game.wind.x) * (180 / Math.PI);
  const arrow = el.querySelector('.wind-arrow');
  const text = el.querySelector('.wind-text');
  if (arrow) arrow.style.transform = `rotate(${angle + 90}deg)`;
  if (text) text.textContent = label;
  el.style.display = strength < 0.1 ? 'none' : 'flex';
}

function startNextRound(mapIndex) {
  currentRound++;
  roundFinishEntries = [];

  showCountdown(async () => {
    resetGameState();
    const mapData = await buildCourseByIndex(mapIndex);
    updateWindIndicator();

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

function handleTimeUp() {
  // Player ran out of time
  const maxSwings = 15; // Default max penalty
  sendFinish(maxSwings, Game.timeLimit);
  
  enterSpectator();
  showSpectatorBanner();
  showToast('Time is up! DNF (+15 strokes)', 4000);
  
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

function handleReturnToMenuFromGame() {
  gameRunning = false;
  menuMode = true;
  resetGameState();
  hideHUD();
  hideESCMenu();
  cleanupMultiplayer();
  currentRound = 0;
  MP.leaderboard = [];
  setTimeout(async () => { await loadMenuBackground(); showMainMenu(); }, 500);
}

function handleKickPlayer(playerId) {
  if (MP.isHost) {
    // Send kick message via peerjs (would need to implement in network.js)
    // For now, just show a toast
    showToast('Kick feature not yet implemented', 3000);
  }
}

function handleResetBall() {
  Game.lastSwingPosition.copy(Game.startPosition);
  resetLocalBall();
  showToast('Ball reset to start position', 2000);
}

// ── Go ───────────────────────────────────────────────────

init();
