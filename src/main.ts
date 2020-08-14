import { namedColors } from "./named-colors";

const mainEl = document.getElementById("main");
const colorTyperInput = document.getElementById("color-typer") as HTMLInputElement;

function changeColor(color: string) {
  document.body.style.backgroundColor = color;
}

function initCloseSettings() {
  const closeButton = document.getElementById("close-settings");
  closeButton?.addEventListener("click", () => {
    if (mainEl) mainEl.hidden = true;
  });

  document.body.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    if (mainEl) mainEl.hidden = !mainEl.hidden;
  });
}


function initToggleFullScreen() {
  const fullScreenButton = document.getElementById("toggle-fullscreen");
  fullScreenButton?.addEventListener("click", async () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      await document.exitFullscreen();
      fullScreenButton.scrollIntoView();
    }
  });
}

function initColorTyper() {
  colorTyperInput?.addEventListener("input", () => {
    changeColor(colorTyperInput.value);
  });
}

function addNamedColors() {
  var fragment = new DocumentFragment();

  namedColors.forEach(color => {
    const li = document.createElement("li");
    li.innerHTML = `<samp style="background-color: ${color};"></samp> ${color}`;
    li.addEventListener("click", () => {
      colorTyperInput.value = color;
      changeColor(color);
    });
    fragment.appendChild(li);
  })

  document.getElementById("named-colors")?.appendChild(fragment);
}

addNamedColors();
initColorTyper();
initToggleFullScreen();
initCloseSettings();