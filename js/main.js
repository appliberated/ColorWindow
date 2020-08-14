import { namedColors } from "./named-colors.js";
const mainEl = document.getElementById("main");
const colorTyperInput = document.getElementById("color-typer");
function changeColor(color) {
    document.body.style.backgroundColor = color;
}
function initCloseSettings() {
    const closeButton = document.getElementById("close-settings");
    closeButton === null || closeButton === void 0 ? void 0 : closeButton.addEventListener("click", () => {
        if (mainEl)
            mainEl.hidden = true;
    });
    document.body.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        if (mainEl)
            mainEl.hidden = !mainEl.hidden;
    });
}
function initToggleFullScreen() {
    const fullScreenButton = document.getElementById("toggle-fullscreen");
    fullScreenButton === null || fullScreenButton === void 0 ? void 0 : fullScreenButton.addEventListener("click", async () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        }
        else {
            await document.exitFullscreen();
            fullScreenButton.scrollIntoView();
        }
    });
}
function initColorTyper() {
    colorTyperInput === null || colorTyperInput === void 0 ? void 0 : colorTyperInput.addEventListener("input", () => {
        changeColor(colorTyperInput.value);
    });
}
function addNamedColors() {
    var _a;
    var fragment = new DocumentFragment();
    namedColors.forEach(color => {
        const li = document.createElement("li");
        li.innerHTML = `<samp style="background-color: ${color};"></samp> ${color}`;
        li.addEventListener("click", () => {
            colorTyperInput.value = color;
            changeColor(color);
        });
        fragment.appendChild(li);
    });
    (_a = document.getElementById("named-colors")) === null || _a === void 0 ? void 0 : _a.appendChild(fragment);
}
addNamedColors();
initColorTyper();
initToggleFullScreen();
initCloseSettings();
//# sourceMappingURL=main.js.map
