import { PolymerElement } from '@polymer/polymer/polymer-element';

import '@polymer/paper-icon-button/paper-icon-button'

import '../../../SharedStyles';

import { Types } from '../Contracts/Types';
import { IUsersService } from '../Contracts/IUsersService';
import { IUser } from '../Contracts/IUser';

import * as template from "./UsersView.html";

class UsersView extends PolymerElement {

    @Application.inject(Types.IUsersService)
    private usersService: IUsersService;

    private users: IUser[] = [];

    static get template() {
        return template;
    }

    connectedCallback() {
        super.connectedCallback();

        this.loadUsers();
    }

    private async loadUsers() {
        const users = await this.usersService.getAllUsers();
        this.users = users;
    }
}

window.customElements.define('users-view', UsersView);
