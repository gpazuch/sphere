import { Injectable } from '@angular/core';
import { AgentGroup } from './interfaces/group.interface';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor() { }

  addGroup(group: AgentGroup) {}

  updateGroup(group: AgentGroup) {}

  getGroupById(id: string) {}

  getAllGroups() {}

  getGroupPage(pageInfo: any) {}

  deleteGroup(id: string) {}

  validateGroup(group: AgentGroup) {}
}
