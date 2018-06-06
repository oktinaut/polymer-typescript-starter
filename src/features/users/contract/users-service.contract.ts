import { User } from "./user.contract";

export interface IUsersService {

    getAllUsers(): Promise<User[]>;

    getUserById(id: string): Promise<User>;

}