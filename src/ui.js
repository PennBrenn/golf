import { BALL_COLORS } from './game.js';

// ── UI State ─────────────────────────────────────────────

export const UI = {
  screens: {},
  onCreateGame: null,   // callback(name)
  onJoinGame: null,      // callback(name, code)
  onStartGame: null,     // callback()
  onPlayAgain: null,     // callback()
  onColorPick: null,     // callback(colorHex)
  onNextRound: null,     // callback()
  onMapVote: null,       // callback(mapIndex)
};

// ── Init ─────────────────────────────────────────────────

export function initUI() {
  UI.screens = {
    mainMenu: document.getElementById('screen-main-menu'),
    lobby: document.getElementById('screen-lobby'),
    countdown: document.getElementById('screen-countdown'),
    hud: document.getElementById('screen-hud'),
    leaderboard: document.getElementById('screen-leaderboard'),
    loading: document.getElementById('screen-loading'),
    settings: document.getElementById('screen-settings'),
    mapVote: document.getElementById('screen-map-vote'),
    toast: document.getElementById('toast'),
  };

  // Main menu buttons
  document.getElementById('btn-create').addEventListener('click', () => {
    const name = document.getElementById('input-name').value.trim() || 'Player 1';
    if (UI.onCreateGame) UI.onCreateGame(name);
  });

  document.getElementById('btn-join').addEventListener('click', () => {
    const name = document.getElementById('input-name').value.trim() || 'Player';
    const code = document.getElementById('input-code').value.trim().toUpperCase();
    if (!code) { showToast('Please enter a room code'); return; }
    if (UI.onJoinGame) UI.onJoinGame(name, code);
  });

  // Lobby start button
  document.getElementById('btn-start-game').addEventListener('click', () => {
    if (UI.onStartGame) UI.onStartGame();
  });

  // Copy room code
  document.getElementById('btn-copy-code').addEventListener('click', () => {
    const code = document.getElementById('lobby-code').textContent;
    navigator.clipboard.writeText(code).then(() => showToast('Code copied!'));
  });

  // Leaderboard next-round / play-again
  document.getElementById('btn-next-round').addEventListener('click', () => {
    if (UI.onNextRound) UI.onNextRound();
  });
  document.getElementById('btn-play-again').addEventListener('click', () => {
    if (UI.onPlayAgain) UI.onPlayAgain();
  });

  // Main menu settings button
  document.getElementById('btn-settings-main').addEventListener('click', () => {
    showSettings();
  });

  // Settings screen buttons
  document.getElementById('btn-back-from-settings').addEventListener('click', () => {
    showMainMenu();
  });

  document.getElementById('btn-save-settings').addEventListener('click', () => {
    showToast('Settings saved!');
    showMainMenu();
  });

  // Ball color picker
  buildColorPicker();
}

// ── Color Picker ─────────────────────────────────────────

function buildColorPicker() {
  const grid = document.getElementById('color-grid');
  if (!grid) return;
  grid.innerHTML = '';
  for (const c of BALL_COLORS) {
    const swatch = document.createElement('div');
    swatch.className = 'color-swatch';
    swatch.style.background = '#' + c.toString(16).padStart(6, '0');
    swatch.addEventListener('click', () => {
      document.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('selected'));
      swatch.classList.add('selected');
      if (UI.onColorPick) UI.onColorPick(c);
    });
    grid.appendChild(swatch);
  }
  // Select first by default
  if (grid.children[0]) grid.children[0].classList.add('selected');
}

// ── Screen Management ────────────────────────────────────

function hideAll() {
  for (const screen of Object.values(UI.screens)) {
    if (screen) screen.classList.add('hidden');
  }
  const sb = document.getElementById('spectator-banner');
  if (sb) sb.classList.add('hidden');
}

export function showMainMenu() {
  hideAll();
  UI.screens.mainMenu.classList.remove('hidden');
}

export function showSettings() {
  hideAll();
  UI.screens.settings.classList.remove('hidden');
}

export function showLoading(msg) {
  hideAll();
  UI.screens.loading.classList.remove('hidden');
  const el = document.getElementById('loading-text');
  if (el) el.textContent = msg || 'Loading...';
}

export function hideLoading() {
  UI.screens.loading.classList.add('hidden');
}

export function showLobby(roomCode, isHost) {
  hideAll();
  UI.screens.lobby.classList.remove('hidden');
  document.getElementById('lobby-code').textContent = roomCode;
  document.getElementById('btn-start-game').style.display = isHost ? 'inline-block' : 'none';
  document.getElementById('lobby-waiting').style.display = isHost ? 'none' : 'block';
  updateStartButton(false);
}

export function updatePlayerList(players) {
  const list = document.getElementById('player-list');
  list.innerHTML = '';
  for (const p of players) {
    const li = document.createElement('li');
    const colorHex = playerColorHex(p.colorIndex);
    li.innerHTML = `<span class="player-dot" style="background:${colorHex}"></span> ${escapeHtml(p.name)}${p.isHost ? ' (Host)' : ''}`;
    list.appendChild(li);
  }

  // HUD player list
  const hudList = document.getElementById('hud-players');
  if (hudList) {
    hudList.innerHTML = '';
    for (const p of players) {
      const div = document.createElement('div');
      const colorHex = playerColorHex(p.colorIndex);
      div.innerHTML = `<span class="player-dot" style="background:${colorHex}"></span> ${escapeHtml(p.name)}`;
      hudList.appendChild(div);
    }
  }
}

export function updateStartButton(enabled) {
  const btn = document.getElementById('btn-start-game');
  btn.disabled = !enabled;
}

export function showCountdown(onComplete) {
  hideAll();
  UI.screens.countdown.classList.remove('hidden');
  const el = document.getElementById('countdown-text');
  const steps = ['3', '2', '1', 'GO!'];
  let i = 0;
  el.textContent = steps[0];
  el.className = 'countdown-number countdown-animate';

  const interval = setInterval(() => {
    i++;
    if (i >= steps.length) {
      clearInterval(interval);
      setTimeout(() => {
        UI.screens.countdown.classList.add('hidden');
        showHUD();
        if (onComplete) onComplete();
      }, 600);
      return;
    }
    el.textContent = steps[i];
    el.className = 'countdown-number';
    void el.offsetWidth;
    el.className = 'countdown-number countdown-animate';
  }, 1000);
}

export function showHUD() {
  UI.screens.hud.classList.remove('hidden');
}

export function hideHUD() {
  UI.screens.hud.classList.add('hidden');
  const sb = document.getElementById('spectator-banner');
  if (sb) sb.classList.add('hidden');
}

// ── HUD Updates ──────────────────────────────────────────

export function updateTimer(seconds) {
  const el = document.getElementById('hud-timer');
  if (el) {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    el.textContent = m.toString().padStart(2, '0') + ':' + s.toString().padStart(2, '0');
  }
}

export function updateSwings(count) {
  const el = document.getElementById('hud-swings');
  if (el) el.textContent = 'Swings: ' + count;
}

export function updateDragIndicator(ratio, active) {
  const bar = document.getElementById('drag-fill');
  if (bar) {
    bar.style.width = (ratio * 100) + '%';
    if (ratio < 0.5) {
      bar.style.background = `rgb(${Math.floor(ratio * 2 * 255)}, 200, 50)`;
    } else {
      bar.style.background = `rgb(255, ${Math.floor((1 - ratio) * 2 * 200)}, 50)`;
    }
  }
  const container = document.getElementById('drag-bar-container');
  if (container) container.style.opacity = active ? '1' : '0.3';
}

export function showSpectatorBanner() {
  const sb = document.getElementById('spectator-banner');
  if (sb) sb.classList.remove('hidden');
}

export function hideSpectatorBanner() {
  const sb = document.getElementById('spectator-banner');
  if (sb) sb.classList.add('hidden');
}

// ── Map Voting ───────────────────────────────────────────

let voteTimerInterval = null;
let localVotedIndex = -1;

export function showMapVote(maps, thumbnails) {
  hideAll();
  UI.screens.mapVote.classList.remove('hidden');
  localVotedIndex = -1;

  const grid = document.getElementById('map-vote-grid');
  grid.innerHTML = '';

  maps.forEach((mapData, i) => {
    const card = document.createElement('div');
    card.className = 'map-card';
    card.dataset.index = i;

    const img = document.createElement('img');
    img.src = thumbnails[i];
    img.alt = mapData.name;
    card.appendChild(img);

    const info = document.createElement('div');
    info.className = 'map-card-info';

    const name = document.createElement('div');
    name.className = 'map-card-name';
    name.textContent = mapData.name;
    info.appendChild(name);

    const votes = document.createElement('div');
    votes.className = 'map-card-votes';
    votes.id = 'map-votes-' + i;
    votes.textContent = '0 votes';
    info.appendChild(votes);

    card.appendChild(info);

    card.addEventListener('click', () => {
      if (localVotedIndex === i) return;
      localVotedIndex = i;
      grid.querySelectorAll('.map-card').forEach(c => c.classList.remove('voted'));
      card.classList.add('voted');
      if (UI.onMapVote) UI.onMapVote(i);
    });

    grid.appendChild(card);
  });

  // Start timer
  let timeLeft = 10;
  const timerEl = document.getElementById('vote-timer');
  timerEl.textContent = timeLeft + 's';

  if (voteTimerInterval) clearInterval(voteTimerInterval);
  voteTimerInterval = setInterval(() => {
    timeLeft--;
    timerEl.textContent = timeLeft + 's';
    if (timeLeft <= 0) {
      clearInterval(voteTimerInterval);
      voteTimerInterval = null;
    }
  }, 1000);
}

export function updateMapVotes(voteCounts) {
  for (const [idx, count] of Object.entries(voteCounts)) {
    const el = document.getElementById('map-votes-' + idx);
    if (el) el.textContent = count + (count === 1 ? ' vote' : ' votes');
  }
}

export function showVoteWinner(mapName) {
  const timerEl = document.getElementById('vote-timer');
  timerEl.textContent = mapName + ' wins!';
  if (voteTimerInterval) { clearInterval(voteTimerInterval); voteTimerInterval = null; }
}

export function hideMapVote() {
  if (voteTimerInterval) { clearInterval(voteTimerInterval); voteTimerInterval = null; }
  UI.screens.mapVote.classList.add('hidden');
}

// ── Leaderboard ──────────────────────────────────────────

export function showLeaderboard(entries, round, totalRounds, isHost) {
  hideHUD();
  UI.screens.leaderboard.classList.remove('hidden');
  const body = document.getElementById('lb-body');
  body.innerHTML = '';
  const sorted = [...entries].sort((a, b) => a.time - b.time);
  sorted.forEach((e, i) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${i + 1}</td><td>${escapeHtml(e.name)}</td><td>${e.swings}</td><td>${e.time.toFixed(1)}s</td>`;
    body.appendChild(tr);
  });
  document.getElementById('lb-round').textContent = `Round ${round} / ${totalRounds}`;

  const isLastRound = round >= totalRounds;
  document.getElementById('btn-next-round').style.display = (!isLastRound && isHost) ? 'inline-block' : 'none';
  document.getElementById('btn-play-again').style.display = (isLastRound && isHost) ? 'inline-block' : 'none';
  document.getElementById('lb-waiting').style.display = isHost ? 'none' : 'block';
}

export function hideLeaderboard() {
  UI.screens.leaderboard.classList.add('hidden');
}

// ── Toast ────────────────────────────────────────────────

export function showToast(message, duration = 3000) {
  const toast = UI.screens.toast;
  toast.textContent = message;
  toast.classList.remove('hidden');
  toast.classList.add('toast-show');
  setTimeout(() => {
    toast.classList.remove('toast-show');
    toast.classList.add('hidden');
  }, duration);
}

// ── Helpers ──────────────────────────────────────────────

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function playerColorHex(colorIndex) {
  const colors = [0xff4444, 0x4488ff, 0xffcc00, 0x44cc44];
  const c = colors[colorIndex] ?? 0xffffff;
  return '#' + c.toString(16).padStart(6, '0');
}
