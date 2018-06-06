import { Container } from "inversify";

import { UsersContainerModule } from "./features/users/container-module";
import { GroupsContainerModule } from "./features/groups/container-module";

export const container = new Container();

container.load(UsersContainerModule);
container.load(GroupsContainerModule);
