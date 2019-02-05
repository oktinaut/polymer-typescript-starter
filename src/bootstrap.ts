import { Container } from "inversify";

import { containerModule as UsersContainerModule } from "./Features/Users/containerModule";
import { containerModule as GroupsContainerModule } from "./Features/Groups/containerModule";

import "./MainApp";

export function bootstrap(container: Container) {

    container.load(UsersContainerModule);
    container.load(GroupsContainerModule);

    document.addEventListener("DOMContentLoaded", _ => {
        const mainApp = document.createElement("main-app");
        document.body.appendChild(mainApp);
    });
}