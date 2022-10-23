import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

@customElement("dangerous-html")
export class DangerouslySetInnerHtmlContent extends LitElement {
  @property() html: string;
  @property() shadow = false;
  root: ShadowRoot;

  createRenderRoot() {
    return this.shadow ? this.attachShadow({ mode: "open" }) : this;
  }

  render() {
    return html`${unsafeHTML(this.html)}`;
  }
}

customElements.define("dangerous-html", DangerouslySetInnerHtmlContent);
