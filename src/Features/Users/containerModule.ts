import { ContainerModule } from "inversify"

import { Types } from "./Contracts/Types";
import { IUsersRepository } from "./Contracts/IUsersRepository";
import { IUsersService } from "./Contracts/IUsersService";

import { UsersRepository } from "./Repositories/UsersRepository";
import { UsersService } from "./Services/UsersService";

import "./Views/UsersView";

export const containerModule = new ContainerModule((bind) => {

    bind<IUsersRepository>(Types.IUsersRepository).to(UsersRepository);
    bind<IUsersService>(Types.IUsersService).to(UsersService);
});