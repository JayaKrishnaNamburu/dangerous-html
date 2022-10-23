import { LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("html-content")
export class DangerouslySetInnerHtmlContent extends LitElement {
  @property() html: string;

  static shadowRootOptions = {
    ...LitElement.shadowRootOptions,
    mode: "open",
  };

  connectedCallback() {
    super.connectedCallback();
    if (this.html) {
      var slotHtml = document.createRange().createContextualFragment(this.html);
      this.shadowRoot.innerHTML = "";
      this.shadowRoot.appendChild(slotHtml);
    }
  }
}

customElements.define("html-content", DangerouslySetInnerHtmlContent);
