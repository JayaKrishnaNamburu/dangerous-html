import { LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("dangerous-html")
export class DangerouslySetInnerHtmlContent extends LitElement {
  @property() html: string;
  @property() shadow = false;

  createRenderRoot() {
    return this.shadow ? this.attachShadow({ mode: "open" }) : this;
  }

  connectedCallback(): void {
    super.connectedCallback();
    const slotHtml = document.createRange().createContextualFragment(this.html);
    if (this.shadow) {
      this.shadowRoot.append(slotHtml);
      return;
    }
    this.append(slotHtml);
  }
}

customElements.define("dangerous-html", DangerouslySetInnerHtmlContent);
