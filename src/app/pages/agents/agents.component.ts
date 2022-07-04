import { Component, OnInit } from '@angular/core';
import { last, lastValueFrom, Observable } from 'rxjs';
import {
  FilterOption,
  FilterTypes,
} from 'src/app/components/filter/filter.component';
import {
  Agent,
  AgentStates,
} from 'src/app/services/interfaces/agent.interface';
import { OrbService } from 'src/app/services/orb.service';

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.scss'],
})
export class AgentsComponent implements OnInit {
  filterOptions: FilterOption[] = [
    {
      name: 'Name',
      prop: 'name',
      filter: (param: string) => {
        return;
      },
      type: FilterTypes.Input,
    },
    {
      name: 'Tags',
      prop: 'tags',
      filter: (param: string) => {
        return;
      },
      type: FilterTypes.Input,
    },
    {
      name: 'Status',
      prop: 'state',
      filter: (param: string[]) => {
        return;
      },
      type: FilterTypes.MultiSelect,
      options: Object.values(AgentStates).map((value) => value as string),
    },
  ];

  agents$: Observable<Agent[]>;

  addItem = false;

  constructor(private orb: OrbService) {
    this.agents$ = this.orb.getAgentListView();
  }

  ngOnInit(): void {}
}
