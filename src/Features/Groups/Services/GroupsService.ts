import { injectable, inject } from "inversify";

import { Types } from "../Contracts/Types";
import { IGroupsService } from "../Contracts/IGroupsService";
import { IGroupsRepository } from "../Contracts/IGroupsRepository";
import { IGroup } from "../Contracts/IGroup";

@injectable()
export class GroupsService implements IGroupsService {

    private groupsRepository: IGroupsRepository;
    
    constructor(
        @inject(Types.IGroupsRepository) groupsRepository: IGroupsRepository
    ) {
        this.groupsRepository = groupsRepository;
    }
        
    getAllGroups(): Promise<IGroup[]> {
        return this.groupsRepository.getAllGroups();
    }

    getGroupById(id: string): Promise<IGroup> {
        return this.groupsRepository.getGroupById(id);
    }
}