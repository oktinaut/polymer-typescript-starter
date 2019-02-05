import { injectable } from "inversify";

import { IUsersRepository } from "../Contracts/IUsersRepository";
import { IUser } from "../Contracts/IUser";

@injectable()
export class UsersRepository implements IUsersRepository {

    getAllUsers(): Promise<IUser[]> {
        const users: IUser[] = [
            { id: "1", username: "okti", firstname: "Tim", lastname: "Okolowski" },
            { id: "2", username: "mamu", firstname: "Max", lastname: "Mustermann" },
        ];

        return Promise.resolve(users);
    }

    getUserById(id: string): Promise<IUser> {
        throw new Error("Method not implemented.");
    }
}