import { injectable, inject } from "inversify";

import { Types } from "../contract/types";
import { IUsersService } from "../contract/users-service.contract";
import { IUsersRepository } from "../contract/users-repository.contract";
import { User } from "../contract/user.contract";

@injectable()
export class UsersService implements IUsersService {

    private usersRepository: IUsersRepository;
    
    constructor(
        @inject(Types.IUsersRepository) usersRepository: IUsersRepository
    ) {
        this.usersRepository = usersRepository;
    }
        
    getAllUsers(): Promise<User[]> {
        return this.usersRepository.getAllUsers();
    }

    getUserById(id: string): Promise<User> {
        return this.usersRepository.getUserById(id);
    }
}