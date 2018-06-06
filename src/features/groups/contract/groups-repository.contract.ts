import { Group } from "./group.contract";

export interface IGroupsRepository {

    getAllGroups(): Promise<Group[]>;

    getGroupById(id: string): Promise<Group>;

}