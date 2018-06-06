import { Group } from "./group.contract";

export interface IGroupsService {

    getAllGroups(): Promise<Group[]>;

    getGroupById(id: string): Promise<Group>;

}