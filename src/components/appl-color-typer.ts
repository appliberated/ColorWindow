import {LitElement, html, customElement, property, css} from 'lit-element';

@customElement('appl-color-typer')
export class ColorTyper extends LitElement {

  static styles = css`
    :host {
    }
  `;

  render() {
    return html`
      <input type="text" @input="${this.handleInput}">
    `;
  }

  // createRenderRoot() {
  //   return this;
  // }

  private handleInput(e: InputEvent) {
    const colorChangeEvent = new CustomEvent('colorchange', {
      detail: {
        color: e.target.value
      }
    });
    this.dispatchEvent(colorChangeEvent);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'appl-color-typer': ColorTyper;
  }
}