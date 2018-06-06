import { ContainerModule } from "inversify"

import { Types } from "./contract/types";
import { IGroupsRepository } from "./contract/groups-repository.contract";
import { IGroupsService } from "./contract/groups-service.contract";

import { GroupsRepository } from "./repository/groups-repository";
import { GroupsService } from "./service/groups-service";


export const GroupsContainerModule = new ContainerModule((bind) => {

    bind<IGroupsRepository>(Types.IGroupsRepository).to(GroupsRepository);
    bind<IGroupsService>(Types.IGroupsService).to(GroupsService);
});