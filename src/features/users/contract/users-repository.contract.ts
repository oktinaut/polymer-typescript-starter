import { User } from "./user.contract";

export interface IUsersRepository {

    getAllUsers(): Promise<User[]>;

    getUserById(id: string): Promise<User>;

}