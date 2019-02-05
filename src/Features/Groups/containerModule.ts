import { ContainerModule } from "inversify"

import { Types } from "./Contracts/Types";
import { IGroupsRepository } from "./Contracts/IGroupsRepository";
import { IGroupsService } from "./Contracts/IGroupsService";

import { GroupsRepository } from "./Repositories/GroupsRepository";
import { GroupsService } from "./Services/GroupsService";

import "./Views/GroupsView";

export const containerModule = new ContainerModule((bind) => {

    bind<IGroupsRepository>(Types.IGroupsRepository).to(GroupsRepository);
    bind<IGroupsService>(Types.IGroupsService).to(GroupsService);
});