import { LitElement } from "lit";
import { customElement } from "lit/decorators/custom-element.js";
import { property } from "lit/decorators/property.js";

@customElement("dangerous-html")
export class DangerouslySetInnerHtmlContent extends LitElement {
  @property() declare html: string;
  @property() declare inherit: boolean;

  createRenderRoot() {
    return this.inherit ? this : this.attachShadow({ mode: "open" });
  }

  connectedCallback(): void {
    super.connectedCallback();
    const slotHtml = document.createRange().createContextualFragment(this.html);
    if (this.inherit) {
      this.append(slotHtml);
      return;
    }
    this.shadowRoot.append(slotHtml);
  }
}
