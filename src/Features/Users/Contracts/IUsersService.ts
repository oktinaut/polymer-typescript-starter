import { IUser } from "./IUser";

export interface IUsersService {

    getAllUsers(): Promise<IUser[]>;

    getUserById(id: string): Promise<IUser>;

}