import './components/appl-color-typer.js';

const mainElem = document.getElementById('main');

const colorTyperElem = document.querySelector('appl-color-typer');
colorTyperElem?.addEventListener('colorchange', (e) => {
  document.body.style.backgroundColor = e.detail.color;
});


function initHideOverlay() {
  const hideButton = document.getElementById('hide-overlay');
  hideButton?.addEventListener('click', () => {
    mainElem?.hidden = true;
  });
}


function initToggleFullScreen() {
  const fullScreenButton = document.getElementById('toggle-fullscreen');
  fullScreenButton?.addEventListener("click", () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  });
}

function initColorTyper() {
  const colorTyperInput = document.getElementById('color-typer');
  colorTyperInput?.addEventListener('input', (e) => {
    document.body.style.backgroundColor = e.target.value;
  });
}

initColorTyper();
initToggleFullScreen();
initHideOverlay();