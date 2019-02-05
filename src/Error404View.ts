import { PolymerElement } from '@polymer/polymer';
import { customElement } from '@polymer/decorators';

import * as template from "./Error404View.html";

@customElement("error-404-view")
class Error404View extends PolymerElement {
  static get template() {
    return template;
  }
}
