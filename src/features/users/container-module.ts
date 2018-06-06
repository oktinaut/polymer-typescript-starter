import { ContainerModule } from "inversify"

import { Types } from "./contract/types";
import { IUsersRepository } from "./contract/users-repository.contract";
import { IUsersService } from "./contract/users-service.contract";

import { UsersRepository } from "./repository/users-repository";
import { UsersService } from "./service/users-service";


export const UsersContainerModule = new ContainerModule((bind) => {

    bind<IUsersRepository>(Types.IUsersRepository).to(UsersRepository);
    bind<IUsersService>(Types.IUsersService).to(UsersService);
});