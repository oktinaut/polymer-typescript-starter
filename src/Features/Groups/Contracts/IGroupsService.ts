import { IGroup } from "./IGroup";

export interface IGroupsService {

    getAllGroups(): Promise<IGroup[]>;

    getGroupById(id: string): Promise<IGroup>;

}