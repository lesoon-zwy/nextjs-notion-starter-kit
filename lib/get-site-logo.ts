import { logoSrc } from 'site.config';

class LogoElement extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <img src="${logoSrc}" alt="Logo">
    `;
  }
}

customElements.define('site-logo', LogoElement);

export default LogoElement