import { PolymerElement } from '@polymer/polymer';
import { customElement, property, observe } from "@polymer/decorators";

import '@polymer/app-layout/app-drawer/app-drawer';
import { AppDrawerElement } from '@polymer/app-layout/app-drawer/app-drawer';

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

import * as template from './MainApp.html';
import "./MainApp.scss";

@customElement("main-app")
class MainApp extends PolymerElement {

  @property({ type: String, reflectToAttribute: true })
  page: string;

  @property()
  routeData: any;

  @property()
  subroute: any;

  static get template() {
    return template;
  }

  @observe("routeData.page")
  private routePageChanged(page) {
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

    const drawer = this.$.drawer as AppDrawerElement;

    // Close a non-persistent drawer when the page & route are changed.
    if (!drawer.persistent) {
      drawer.close();
    }
  }
}
