import { BALL_COLORS, getAllMapData, renderMapThumbnail } from './game.js';

// ── Settings Defaults ────────────────────────────────────

const SETTINGS_KEY = 'minigolf_settings';
const DEFAULT_SETTINGS = {
  playerName: '',
  ballColor: BALL_COLORS[0],
  trailColor: '#ffffff',
  hat: 'none',
  glowIntensity: 0,
  shadows: 'high',
  terrainDetail: 'high',
  ballTrail: 'off',
  masterVolume: 80,
  sfxVolume: 80,
  musicVolume: 50,
  cameraSensitivity: 100,
  invertY: false,
};

let currentSettings = { ...DEFAULT_SETTINGS };

export function loadSettings() {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (raw) currentSettings = { ...DEFAULT_SETTINGS, ...JSON.parse(raw) };
  } catch (e) { /* ignore */ }
  return currentSettings;
}

export function getSettings() { return currentSettings; }

function saveSettings() {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(currentSettings));
}

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
  onSettingsChanged: null, // callback(settings)
  onReturnToMenu: null,  // callback()
  onKickPlayer: null,    // callback(playerId)
  onResetBall: null,     // callback()
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
    mapLibrary: document.getElementById('screen-map-library'),
    escMenu: document.getElementById('screen-esc-menu'),
    kickPlayers: document.getElementById('screen-kick-players'),
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

  // Main menu map builder button
  document.getElementById('btn-map-builder').addEventListener('click', () => {
    window.location.href = '/builder.html';
  });

  // Main menu map library button
  document.getElementById('btn-map-library').addEventListener('click', () => {
    showMapLibrary();
  });

  // Settings screen buttons
  document.getElementById('btn-back-from-settings').addEventListener('click', () => {
    showMainMenu();
  });

  // Map library back button
  document.getElementById('btn-back-from-library').addEventListener('click', () => {
    showMainMenu();
  });

  // ESC menu buttons
  document.getElementById('btn-esc-kick').addEventListener('click', () => {
    if (UI.showKickPlayers) UI.showKickPlayers(); else showKickPlayers();
  });

  document.getElementById('btn-esc-reset').addEventListener('click', () => {
    if (UI.onResetBall) UI.onResetBall();
    hideESCMenu();
  });

  document.getElementById('btn-esc-return-menu').addEventListener('click', () => {
    if (UI.onReturnToMenu) UI.onReturnToMenu();
  });

  document.getElementById('btn-esc-resume').addEventListener('click', () => {
    hideESCMenu();
  });

  document.getElementById('btn-back-from-kick').addEventListener('click', () => {
    hideKickPlayers();
    showESCMenu();
  });

  // ESC key handler
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (!UI.screens.escMenu.classList.contains('hidden')) {
        hideESCMenu();
      } else if (!UI.screens.kickPlayers.classList.contains('hidden')) {
        hideKickPlayers();
        if (UI.showESCMenu) UI.showESCMenu(); else showESCMenu();
      } else if (!UI.screens.settings.classList.contains('hidden')) {
        showMainMenu();
      } else if (!UI.screens.mapLibrary.classList.contains('hidden')) {
        showMainMenu();
      } else if (!UI.screens.hud.classList.contains('hidden')) {
        if (UI.showESCMenu) UI.showESCMenu(); else showESCMenu();
      }
    }
  });

  document.getElementById('btn-save-settings').addEventListener('click', () => {
    collectSettings();
    saveSettings();
    if (UI.onSettingsChanged) UI.onSettingsChanged(currentSettings);
    showToast('Settings saved!');
    // Don't navigate - stay on settings screen
  });

  // Settings radio buttons
  document.querySelectorAll('.settings-radio-row').forEach(row => {
    row.querySelectorAll('.settings-radio').forEach(btn => {
      btn.addEventListener('click', () => {
        row.querySelectorAll('.settings-radio').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });
  });

  // Hex color input
  const hexInput = document.getElementById('settings-hex');
  if (hexInput) {
    hexInput.addEventListener('change', () => {
      const hex = hexInput.value.trim();
      if (/^#[0-9a-fA-F]{6}$/.test(hex)) {
        const c = parseInt(hex.slice(1), 16);
        document.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('selected'));
        if (UI.onColorPick) UI.onColorPick(c);
      }
    });
  }

  // Ball color picker
  buildColorPicker();

  // Populate settings from saved values
  populateSettings();
}

function collectSettings() {
  currentSettings.playerName = (document.getElementById('settings-name').value || '').trim();
  const hexInput = document.getElementById('settings-hex');
  if (hexInput && /^#[0-9a-fA-F]{6}$/.test(hexInput.value.trim())) {
    currentSettings.ballColor = parseInt(hexInput.value.trim().slice(1), 16);
  }
  currentSettings.trailColor = document.getElementById('settings-trail-color').value;
  const hatBtn = document.querySelector('#settings-hat .settings-radio.active');
  if (hatBtn) currentSettings.hat = hatBtn.dataset.val;
  currentSettings.glowIntensity = parseInt(document.getElementById('settings-glow').value);
  const shadowBtn = document.querySelector('#settings-shadows .settings-radio.active');
  if (shadowBtn) currentSettings.shadows = shadowBtn.dataset.val;
  const terrainBtn = document.querySelector('#settings-terrain .settings-radio.active');
  if (terrainBtn) currentSettings.terrainDetail = terrainBtn.dataset.val;
  const trailBtn = document.querySelector('#settings-trail .settings-radio.active');
  if (trailBtn) currentSettings.ballTrail = trailBtn.dataset.val;
  currentSettings.masterVolume = parseInt(document.getElementById('settings-master-vol').value);
  currentSettings.sfxVolume = parseInt(document.getElementById('settings-sfx-vol').value);
  currentSettings.musicVolume = parseInt(document.getElementById('settings-music-vol').value);
  currentSettings.cameraSensitivity = parseInt(document.getElementById('settings-cam-sens').value);
  currentSettings.invertY = document.getElementById('settings-invert-y').checked;
}

function populateSettings() {
  const nameInput = document.getElementById('settings-name');
  if (nameInput && currentSettings.playerName) nameInput.value = currentSettings.playerName;
  const hexInput = document.getElementById('settings-hex');
  if (hexInput) hexInput.value = '#' + currentSettings.ballColor.toString(16).padStart(6, '0');

  document.getElementById('settings-trail-color').value = currentSettings.trailColor || '#ffffff';
  setRadioActive('settings-hat', currentSettings.hat || 'none');
  document.getElementById('settings-glow').value = currentSettings.glowIntensity || 0;

  // Set radio buttons
  setRadioActive('settings-shadows', currentSettings.shadows);
  setRadioActive('settings-terrain', currentSettings.terrainDetail);
  setRadioActive('settings-trail', currentSettings.ballTrail);

  document.getElementById('settings-master-vol').value = currentSettings.masterVolume;
  document.getElementById('settings-sfx-vol').value = currentSettings.sfxVolume;
  document.getElementById('settings-music-vol').value = currentSettings.musicVolume;
  document.getElementById('settings-cam-sens').value = currentSettings.cameraSensitivity;
  document.getElementById('settings-invert-y').checked = currentSettings.invertY;
}

function setRadioActive(rowId, val) {
  const row = document.getElementById(rowId);
  if (!row) return;
  row.querySelectorAll('.settings-radio').forEach(b => {
    b.classList.toggle('active', b.dataset.val === val);
  });
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

export async function showMapLibrary() {
  hideAll();
  UI.screens.mapLibrary.classList.remove('hidden');

  const grid = document.getElementById('map-library-grid');
  grid.innerHTML = '';

  try {
    const maps = await getAllMapData();
    maps.forEach((mapData) => {
      const card = document.createElement('div');
      card.className = 'library-map-card';

      const img = document.createElement('img');
      img.src = renderMapThumbnail(mapData);
      img.alt = mapData.name;
      card.appendChild(img);

      const info = document.createElement('div');
      info.className = 'library-map-card-info';

      const name = document.createElement('div');
      name.className = 'library-map-card-name';
      name.textContent = mapData.name;
      info.appendChild(name);

      card.appendChild(info);
      grid.appendChild(card);
    });
  } catch (err) {
    console.error('Failed to load maps:', err);
    grid.innerHTML = '<div style="color:white;grid-column:1/-1;text-align:center;">Failed to load maps</div>';
  }
}

export function showESCMenu(isHost = false) {
  UI.screens.escMenu.classList.remove('hidden');
  const kickBtn = document.getElementById('btn-esc-kick');
  if (kickBtn) {
    kickBtn.classList.toggle('hidden', !isHost);
  }
}

export function hideESCMenu() {
  UI.screens.escMenu.classList.add('hidden');
}

export function showKickPlayers(players) {
  hideAll();
  UI.screens.kickPlayers.classList.remove('hidden');

  const list = document.getElementById('kick-player-list');
  list.innerHTML = '';

  if (players) {
    players.forEach((p) => {
      const li = document.createElement('li');
      const colorHex = playerColorHex(p.colorIndex);
      li.innerHTML = `
        <span style="display:flex;align-items:center;gap:10px;">
          <span class="player-dot" style="background:${colorHex}"></span>
          ${escapeHtml(p.name)}${p.isHost ? ' (Host)' : ''}
        </span>
      `;
      if (!p.isHost) {
        const kickBtn = document.createElement('button');
        kickBtn.className = 'kick-btn';
        kickBtn.textContent = 'Kick';
        kickBtn.addEventListener('click', () => {
          if (UI.onKickPlayer) UI.onKickPlayer(p.id);
        });
        li.appendChild(kickBtn);
      }
      list.appendChild(li);
    });
  }
}

export function hideKickPlayers() {
  UI.screens.kickPlayers.classList.add('hidden');
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
    el.textContent = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    
    // Add pulsing red style when time is low (< 10s)
    if (seconds <= 10 && seconds > 0) {
      el.style.color = '#ff4422';
      el.style.textShadow = '0 1px 8px rgba(255, 68, 34, 0.6)';
      el.style.animation = 'pulseGlow 1s ease-in-out infinite';
    } else if (seconds <= 0) {
      el.style.color = '#ff4422';
      el.style.textShadow = '0 1px 8px rgba(255, 68, 34, 0.6)';
      el.style.animation = 'none';
      el.textContent = '00:00';
    } else {
      el.style.color = '#00B8CC';
      el.style.textShadow = '0 1px 8px rgba(0, 194, 204, 0.4)';
      el.style.animation = 'none';
    }
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
