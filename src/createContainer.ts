import { Container } from "inversify";

import { containerModule as UsersContainerModule } from "./Features/Users/containerModule";
import { containerModule as GroupsContainerModule } from "./Features/Groups/containerModule";


export function createContainer(): Container {

    const container = new Container();

    container.load(UsersContainerModule);
    container.load(GroupsContainerModule);

    return container;
}

