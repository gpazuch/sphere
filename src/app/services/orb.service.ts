import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { AgentService } from './agent.service';
import { DatasetService } from './dataset.service';
import { GroupService } from './group.service';
import { PolicyService } from './policy.service';
import { SinkService } from './sink.service';

@Injectable({
  providedIn: 'root'
})
export class OrbService {

  constructor(
    private agent: AgentService,
    private dataset: DatasetService,
    private group: GroupService,
    private policy: PolicyService,
    private sink: SinkService,
  ) { }

  getAgentListView() {
    return this.agent.getAllAgents().pipe(
      map(resp => {
        return resp.data;
      }),
    );
  }

  getGroupListView() {
    return this.group.getAllGroups().pipe(
      map(resp => {
        return resp.data;
      })
    )
  }

  getDatasetListView() {
    return this.dataset.getAllDatasets().pipe(
      map(resp => {
        return resp.data;
      })
    )
  }

  getPolicyListView() {
    return this.policy.getAllPolicies().pipe(
      map(resp => {
        return resp.data;
      })
    )
  }

  getSinkListView() {
    return this.sink.getAllSinks().pipe(
      map(resp => {
        return resp.data;
      })
    )
  }
}
