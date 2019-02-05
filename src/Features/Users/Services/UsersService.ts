import { injectable, inject } from "inversify";

import { Types } from "../Contracts/Types";
import { IUsersService } from "../Contracts/IUsersService";
import { IUsersRepository } from "../Contracts/IUsersRepository";
import { IUser } from "../Contracts/IUser";

@injectable()
export class UsersService implements IUsersService {

    private usersRepository: IUsersRepository;
    
    constructor(
        @inject(Types.IUsersRepository) usersRepository: IUsersRepository
    ) {
        this.usersRepository = usersRepository;
    }
        
    getAllUsers(): Promise<IUser[]> {
        return this.usersRepository.getAllUsers();
    }

    getUserById(id: string): Promise<IUser> {
        return this.usersRepository.getUserById(id);
    }
}