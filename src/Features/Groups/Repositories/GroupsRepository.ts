import { injectable } from "inversify";

import { IGroupsRepository } from "../Contracts/IGroupsRepository";
import { IGroup } from "../Contracts/IGroup";

@injectable()
export class GroupsRepository implements IGroupsRepository {

    getAllGroups(): Promise<IGroup[]> {
        const groups: IGroup[] = [
            { id: "1", displayName: "Admin" },
            { id: "2", displayName: "Content Creator" },
        ];

        return Promise.resolve(groups);
    }

    getGroupById(id: string): Promise<IGroup> {
        throw new Error("Method not implemented.");
    }
}