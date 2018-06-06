import { injectable } from "inversify";

import { IGroupsRepository } from "../contract/groups-repository.contract";
import { Group } from "../contract/group.contract";

@injectable()
export class GroupsRepository implements IGroupsRepository {

    getAllGroups(): Promise<Group[]> {
        const groups: Group[] = [
            { id: "1", displayName: "Admin" },
            { id: "2", displayName: "Content Creator" },
        ];

        return Promise.resolve(groups);
    }

    getGroupById(id: string): Promise<Group> {
        throw new Error("Method not implemented.");
    }
}