import { Component, OnInit } from '@angular/core';
import {
  combineLatest,
  last,
  lastValueFrom,
  map,
  mergeMap,
  Observable,
  tap,
  withLatestFrom,
} from 'rxjs';
import {
  FilterOption,
  FilterTypes,
} from 'src/app/components/filter/filter.component';
import { FilterService } from 'src/app/services/filter.service';
import {
  Agent,
  AgentStates,
} from 'src/app/services/interfaces/agent.interface';
import { OrbService } from 'src/app/services/orb.service';

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.scss'],
  providers: [FilterService],
})
export class AgentsComponent implements OnInit {
  filterOptions: FilterOption[] = [
    {
      name: 'Name',
      prop: 'name',
      filter: (agent: Agent, name: string) => {
        return agent.name?.includes(name);
      },
      type: FilterTypes.Input,
    },
    {
      name: 'Tags',
      prop: 'combined_tags',
      filter: (agent: Agent, tag: string) => {
        const values = Object.entries(agent.combined_tags).flatMap(
          (entry) => `entry[0]:entry[1]`
        );
        return;
      },
      type: FilterTypes.Input,
    },
    {
      name: 'Status',
      prop: 'state',
      filter: (agent: Agent, states: string[]) => {
        return states.reduce((prev, cur) => {
          return agent.state === cur || prev;
        }, false);
      },
      type: FilterTypes.MultiSelect,
      options: Object.values(AgentStates).map((value) => value as string),
    },
  ];

  filters$!: Observable<FilterOption[]>;

  agents$: Observable<Agent[]>;

  filteredAgents$: Observable<Agent[]>;

  addItem = false;

  constructor(private orb: OrbService, private filters: FilterService) {
    this.agents$ = orb.getAgentListView();
    this.filters$ = filters.getFilters();

    this.filteredAgents$ = combineLatest({
      agents: this.agents$,
      filters: this.filters$,
    }).pipe(
      map(({ agents, filters }) => {
        let filtered = agents;
        filters.forEach((filter) => {
          filtered = filtered.filter((value) => {
            const propName = filter.prop;
            const paramValue = filter.param;
            const result = filter.filter(value, paramValue);
            return result;
          });
        });

        return filtered;
      })
    );
    this.filters.cleanFilters();
  }

  ngOnInit(): void {}
}
