import { IUser } from "./IUser";

export interface IUsersRepository {

    getAllUsers(): Promise<IUser[]>;

    getUserById(id: string): Promise<IUser>;

}