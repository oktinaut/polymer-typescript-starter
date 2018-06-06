/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element';

import '@polymer/paper-icon-button/paper-icon-button'

import '../../../shared-styles';

import { container } from '../../../container';

import { Types } from '../contract/types';
import { IGroupsService } from '../contract/groups-service.contract';
import { Group } from '../contract/group.contract';

import * as template from "./groups-view.html";

class GroupsView extends PolymerElement {

    private groupsService = container.get<IGroupsService>(Types.IGroupsService);

    private groups: Group[] = [];

    static get template() {
        return template;
    }

    connectedCallback() {
        super.connectedCallback();

        this.loadGroups();
    }

    private async loadGroups() {
        const groups = await this.groupsService.getAllGroups();
        this.groups = groups;
    }
}

window.customElements.define('groups-view', GroupsView);
