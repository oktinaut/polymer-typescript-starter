import { PolymerElement } from '@polymer/polymer/polymer-element';

import * as template from "./Error404View.html";

class ErrorView404 extends PolymerElement {
  static get template() {
    return template;
  }
}

window.customElements.define('error-view-404', ErrorView404);
