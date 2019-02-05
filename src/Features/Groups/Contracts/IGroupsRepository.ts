import { IGroup } from "./IGroup";

export interface IGroupsRepository {

    getAllGroups(): Promise<IGroup[]>;

    getGroupById(id: string): Promise<IGroup>;

}