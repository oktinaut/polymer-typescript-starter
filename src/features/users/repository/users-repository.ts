import { injectable } from "inversify";

import { IUsersRepository } from "../contract/users-repository.contract";
import { User } from "../contract/user.contract";

@injectable()
export class UsersRepository implements IUsersRepository {

    getAllUsers(): Promise<User[]> {
        const users: User[] = [
            { id: "1", username: "okti", firstname: "Tim", lastname: "Okolowski" },
            { id: "2", username: "mamu", firstname: "Max", lastname: "Mustermann" },
        ];

        return Promise.resolve(users);
    }

    getUserById(id: string): Promise<User> {
        throw new Error("Method not implemented.");
    }
}