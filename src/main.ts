import './components/appl-color-typer.js';

const colorTyperElem = document.querySelector('appl-color-typer');
colorTyperElem?.addEventListener('colorchange', (e) => {
  document.body.style.backgroundColor = e.detail.color;
});

