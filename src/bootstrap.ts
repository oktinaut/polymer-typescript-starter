import { Container } from "inversify";

import { containerModule as AppContainerModule } from "./Features/App/containerModule";
import { containerModule as ErrorsContainerModule } from "./Features/Errors/containerModule";
import { containerModule as GroupsContainerModule } from "./Features/Groups/containerModule";
import { containerModule as UsersContainerModule } from "./Features/Users/containerModule";

export function bootstrap(container: Container) {

    container.load(AppContainerModule);
    container.load(ErrorsContainerModule);
    container.load(GroupsContainerModule);
    container.load(UsersContainerModule);

    document.addEventListener("DOMContentLoaded", _ => {
        const mainApp = document.createElement("main-app");
        document.body.appendChild(mainApp);
    });
}