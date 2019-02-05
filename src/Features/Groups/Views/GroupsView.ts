import { PolymerElement } from '@polymer/polymer/polymer-element';

import '@polymer/paper-icon-button/paper-icon-button'

import '../../../SharedStyles';

import { Types } from '../Contracts/Types';
import { IGroupsService } from '../Contracts/IGroupsService';
import { IGroup } from '../Contracts/IGroup';

import * as template from "./GroupsView.html";

class GroupsView extends PolymerElement {

    @Application.inject(Types.IGroupsService)
    private groupsService: IGroupsService;

    private groups: IGroup[] = [];

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
