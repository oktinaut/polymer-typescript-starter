
import { PolymerElement, html } from '@polymer/polymer/polymer-element';

import * as template from "./error-view-404.html";

class ErrorView404 extends PolymerElement {
  static get template() {
    return template;
  }
}

window.customElements.define('error-view-404', ErrorView404);
