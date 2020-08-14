import { namedColors } from "./named-colors";

const mainElem = document.getElementById("main");
const colorTyperInput = document.getElementById("color-typer");

function changeColor(color: string) {
  document.body.style.backgroundColor = color;
}

function initCloseSettings() {
  const closeButton = document.getElementById("close-settings");
  closeButton?.addEventListener("click", () => {
    mainElem?.hidden = true;
  });

  document.body.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    // mainElem?.hidden = false;
    mainElem?.hidden = !mainElem?.hidden;
  });
}


function initToggleFullScreen() {
  const fullScreenButton = document.getElementById("toggle-fullscreen");
  fullScreenButton?.addEventListener("click", async () => {
    // e.preventDefault();
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      await document.exitFullscreen();
      fullScreenButton.scrollIntoView();
      console.log("scroll");
    }
  });
}

function initColorTyper() {
  colorTyperInput?.addEventListener("input", (e) => {
    changeColor(e.target.value);
  });
}

function addNamedColors() {
  var fragment = new DocumentFragment();

  namedColors.forEach(color => {
    const li = document.createElement("li");
    li.innerHTML = `<samp style="background-color: ${color};"></samp> ${color}`;
    li.addEventListener("click", () => {
      colorTyperInput?.value = color;
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