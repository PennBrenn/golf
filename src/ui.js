// ── UI State ─────────────────────────────────────────────

export const UI = {
  screens: {},
  onCreateGame: null,   // callback(name)
  onJoinGame: null,      // callback(name, code)
  onStartGame: null,     // callback()
  onPlayAgain: null,     // callback()
};

// ── Init ─────────────────────────────────────────────────

export function initUI() {
  // Cache screen references
  UI.screens = {
    mainMenu: document.getElementById('screen-main-menu'),
    lobby: document.getElementById('screen-lobby'),
    countdown: document.getElementById('screen-countdown'),
    hud: document.getElementById('screen-hud'),
    win: document.getElementById('screen-win'),
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
    if (!code) {
      showToast('Please enter a room code');
      return;
    }
    if (UI.onJoinGame) UI.onJoinGame(name, code);
  });

  // Lobby start button
  document.getElementById('btn-start-game').addEventListener('click', () => {
    if (UI.onStartGame) UI.onStartGame();
  });

  // Copy room code
  document.getElementById('btn-copy-code').addEventListener('click', () => {
    const code = document.getElementById('lobby-code').textContent;
    navigator.clipboard.writeText(code).then(() => {
      showToast('Code copied!');
    });
  });

  // Win screen play again
  document.getElementById('btn-play-again').addEventListener('click', () => {
    if (UI.onPlayAgain) UI.onPlayAgain();
  });
}

// ── Screen Management ────────────────────────────────────

function hideAll() {
  for (const screen of Object.values(UI.screens)) {
    if (screen) screen.classList.add('hidden');
  }
}

export function showMainMenu() {
  hideAll();
  UI.screens.mainMenu.classList.remove('hidden');
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
    const colorHex = '#' + (p.colorIndex !== undefined
      ? [0xff4444, 0x4488ff, 0xffcc00, 0x44cc44][p.colorIndex]?.toString(16).padStart(6, '0')
      : 'ffffff');
    li.innerHTML = `<span class="player-dot" style="background:${colorHex}"></span> ${escapeHtml(p.name)}${p.isHost ? ' (Host)' : ''}`;
    list.appendChild(li);
  }

  // HUD player list
  const hudList = document.getElementById('hud-players');
  if (hudList) {
    hudList.innerHTML = '';
    for (const p of players) {
      const div = document.createElement('div');
      const colorHex = '#' + (p.colorIndex !== undefined
        ? [0xff4444, 0x4488ff, 0xffcc00, 0x44cc44][p.colorIndex]?.toString(16).padStart(6, '0')
        : 'ffffff');
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
    // Force reflow for animation restart
    void el.offsetWidth;
    el.className = 'countdown-number countdown-animate';
  }, 1000);
}

export function showHUD() {
  UI.screens.hud.classList.remove('hidden');
}

export function hideHUD() {
  UI.screens.hud.classList.add('hidden');
}

export function updateChargeBar(ratio) {
  const bar = document.getElementById('charge-fill');
  if (bar) {
    bar.style.width = (ratio * 100) + '%';
    // Color gradient: green → yellow → red
    if (ratio < 0.5) {
      bar.style.background = `rgb(${Math.floor(ratio * 2 * 255)}, 200, 50)`;
    } else {
      bar.style.background = `rgb(255, ${Math.floor((1 - ratio) * 2 * 200)}, 50)`;
    }
  }
}

export function showWinScreen(winnerName, isHost) {
  hideHUD();
  UI.screens.win.classList.remove('hidden');
  document.getElementById('winner-name').textContent = winnerName + ' wins!';
  document.getElementById('btn-play-again').style.display = isHost ? 'inline-block' : 'none';
  document.getElementById('win-waiting').style.display = isHost ? 'none' : 'block';
}

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
