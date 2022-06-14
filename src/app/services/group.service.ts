import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, EMPTY, expand, map, reduce } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AgentGroup } from './interfaces/group.interface';
import { OrbPagination } from './interfaces/pagination.interface';

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

  getAllGroups() {
    let page = {order: 'name', dir: 'asc', limit: 100, offset: 0} as OrbPagination<AgentGroup>;

    return this.getGroupPage(page)
      .pipe(
        expand(page => {
          return page.next ? this.getGroupPage(page.next) : EMPTY;
        }),
        delay(100),
        reduce((acc, value) => {
          acc.data = [...acc?.data || [], ...value?.data || []];
          acc.offset = 0;
          acc.total = acc.data.length;
          return acc;
        }, page),
      );
  }

  getGroupPage(page: any) {
    const {order, dir, offset, limit} = page;

    let params = new HttpParams()
      .set('order', order)
      .set('dir', dir)
      .set('offset', offset.toString())
      .set('limit', limit.toString());

    return this.http.get(`${environment.groups}`, {params})
    .pipe(map((resp: any) => {
      const {order, dir, offset, limit, total, agentGroups} = resp;
      const next = offset + limit < total && {
        limit, order, dir,
        offset: (parseInt(offset, 10) + parseInt(limit, 10)).toString(),
      }
      return {order, dir, offset, limit, total, data: agentGroups, next} as OrbPagination<AgentGroup>;
    }));
  }

  deleteGroup(id: string) {
    return this.http.delete(`${environment.groups}/${id}`);
  }

  validateGroup(group: AgentGroup) {
    return this.http.post(environment.groupValidate, {
      ...group, validate_only: true,
    });
  }
}
