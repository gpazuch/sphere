import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AgentGroup } from './interfaces/group.interface';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(
    private http: HttpClient,
  ) { }

  addGroup(group: AgentGroup) {
    return this.http.post(environment.groups, group);
  }

  updateGroup(group: AgentGroup) {
    const { id } = group;
    return this.http.post(`${environment.groups}/${id}`, group);
  }

  getGroupById(id: string) {
    return this.http.get(`${environment.groups}/${id}`);
  }

  getAllGroups() {}

  getGroupPage(pageInfo: any) {}

  deleteGroup(id: string) {
    return this.http.delete(`${environment.groups}/${id}`);
  }

  validateGroup(group: AgentGroup) {
    return this.http.post(environment.groupValidate, {
      ...group, validate_only: true,
    });
  }
}
