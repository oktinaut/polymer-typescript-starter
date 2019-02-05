import { PolymerElement } from '@polymer/polymer/polymer-element';

import '@polymer/app-layout/app-drawer/app-drawer';
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout';
import '@polymer/app-layout/app-header/app-header';
import '@polymer/app-layout/app-header-layout/app-header-layout';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects';
import '@polymer/app-layout/app-toolbar/app-toolbar';
import '@polymer/app-route/app-location';
import '@polymer/app-route/app-route';
import '@polymer/iron-pages/iron-pages';
import '@polymer/iron-selector/iron-selector';
import '@polymer/paper-icon-button/paper-icon-button';

import './Error404View';

import './MyIcons';

import * as template from './MainApp.html';

class MainApp extends PolymerElement {

  public page: String;

  static get template() {
    return template;
  }

  static get properties() {
    return {
      page: {
        type: String,
        reflectToAttribute: true,
      },
      routeData: Object,
      subroute: Object,
    };
  }

  static get observers() {
    return [
      '_routePageChanged(routeData.page)'
    ];
  }

  _routePageChanged(page) {
    // Show the corresponding page according to the route.
    //
    // If no page was found in the route data, page will be an empty string.
    // Show 'view1' in that case. And if the page doesn't exist, show 'view404'.
    if (!page) {
      this.page = 'users';
    } else if (['users', 'groups'].indexOf(page) !== -1) {
      this.page = page;
    } else {
      this.page = 'error-404';
    }

    // Close a non-persistent drawer when the page & route are changed.
    if (!this.$.drawer.persistent) {
      this.$.drawer.close();
    }
  }
}

window.customElements.define('main-app', MainApp);
