import { Injectable, OnDestroy } from '@angular/core';
import { map, Observable, retry, share, Subject, switchMap, takeUntil, timer } from 'rxjs';
import { AgentService } from './agent.service';
import { DatasetService } from './dataset.service';
import { GroupService } from './group.service';
import { PolicyService } from './policy.service';
import { SinkService } from './sink.service';

@Injectable({
  providedIn: 'root'
})
export class OrbService implements OnDestroy {
  // ms
  pollInterval = 1000;
  private stopPolling: Subject<void>;
  private pollTimer: Observable<number>;

  constructor(
    private agent: AgentService,
    private dataset: DatasetService,
    private group: GroupService,
    private policy: PolicyService,
    private sink: SinkService,
  ) {
    this.stopPolling = new Subject();
    this.pollTimer = timer(1, this.pollInterval).pipe(
      takeUntil(this.stopPolling),
    );
  }

  ngOnDestroy(): void {
    this.stopPolling.next();
  }

  getAgentListView() {
    return this.pollTimer.pipe(
      switchMap(() => this.agent.getAllAgents()),
      retry(),
      share(),
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
