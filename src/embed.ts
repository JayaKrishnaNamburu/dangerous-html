import { LitElement } from "lit";
import { customElement } from "lit/decorators/custom-element.js";
import { property } from "lit/decorators/property.js";

@customElement("dangerous-html")
export class DangerouslySetInnerHtmlContent extends LitElement {
  @property() declare html: string;
  @property() declare shadow: boolean;

  createRenderRoot() {
    return this.shadow ?  this.attachShadow({ mode: "open" }) : this
  }

  connectedCallback(): void {
    super.connectedCallback();
    const slotHtml = document.createRange().createContextualFragment(this.html);

    if (this.shadow) {
    this.shadowRoot.append(slotHtml);
      return;
    }

    this.style.display = 'contents'
    this.append(slotHtml);
  }
}
