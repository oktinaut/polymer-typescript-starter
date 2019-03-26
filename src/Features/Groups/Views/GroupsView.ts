import { PolymerElement } from '@polymer/polymer';
import { customElement, property } from "@polymer/decorators";

import '@polymer/paper-icon-button/paper-icon-button'

import { Types } from '../Contracts/Types';
import { IGroupsService } from '../Contracts/IGroupsService';
import { IGroup } from '../Contracts/IGroup';

import * as template from "./GroupsView.html";
import "./GroupsView.scss";

@customElement("groups-view")
class GroupsView extends PolymerElement {

    @Application.inject(Types.IGroupsService)
    private groupsService: IGroupsService;

    @property()
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
