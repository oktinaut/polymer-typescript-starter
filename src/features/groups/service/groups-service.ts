import { injectable, inject } from "inversify";

import { Types } from "../contract/types";
import { IGroupsService } from "../contract/groups-service.contract";
import { IGroupsRepository } from "../contract/groups-repository.contract";
import { Group } from "../contract/group.contract";

@injectable()
export class GroupsService implements IGroupsService {

    private groupsRepository: IGroupsRepository;
    
    constructor(
        @inject(Types.IGroupsRepository) groupsRepository: IGroupsRepository
    ) {
        this.groupsRepository = groupsRepository;
    }
        
    getAllGroups(): Promise<Group[]> {
        return this.groupsRepository.getAllGroups();
    }

    getGroupById(id: string): Promise<Group> {
        return this.groupsRepository.getGroupById(id);
    }
}