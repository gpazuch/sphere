import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { combineLatest, map, Observable, startWith } from 'rxjs';
import {
  DeleteConfirmationComponent,
  DeleteDialogData,
} from 'src/app/components/delete-confirmation/delete-confirmation.component';
import {
  FilterOption,
  FilterTypes,
} from 'src/app/components/filter/filter.component';
import { AgentService } from 'src/app/services/agent.service';
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
export class AgentsComponent {
  filterOptions: FilterOption[];

  filters$!: Observable<FilterOption[]>;

  agents$: Observable<Agent[]>;

  filteredAgents$: Observable<Agent[]>;

  addItem = false;

  constructor(
    private orb: OrbService,
    private filters: FilterService,
    private agents: AgentService,
    private dialog: MatDialog
  ) {
    this.agents$ = orb.getAgentListView();
    this.filters$ = filters.getFilters().pipe(startWith([]));

    this.filteredAgents$ = combineLatest({
      agents: this.agents$,
      filters: this.filters$,
    }).pipe(
      map(({ agents, filters }) => {
        let filtered = agents;
        filters.forEach((filter) => {
          filtered = filtered.filter((value) => {
            const paramValue = filter.param;
            const result = filter.filter(value, paramValue);
            return result;
          });
        });

        return filtered;
      })
    );

    this.filterOptions = [
      {
        name: 'Name',
        prop: 'name',
        filter: (agent: Agent, name: string) => {
          return agent.name?.includes(name);
        },
        type: FilterTypes.Input,
      },
      {
        name: 'Agent Tags',
        prop: 'agent_tags',
        filter: (agent: Agent, tag: string) => {
          const values = Object.entries(agent.agent_tags)
            .map((entry) => `${entry[0]}: ${entry[1]}`)
            .flat();
          return values.includes(tag.trim());
        },
        autoSuggestion: orb.getAgentsTags(),
        type: FilterTypes.AutoComplete,
      },
      {
        name: 'Orb Tags',
        prop: 'orb_tags',
        filter: (agent: Agent, tag: string) => {
          const values = Object.entries(agent.orb_tags)
            .map((entry) => `${entry[0]}: ${entry[1]}`)
            .flat();
          return values.includes(tag.trim());
        },
        autoSuggestion: orb.getAgentsTags(),
        type: FilterTypes.AutoComplete,
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
  }

  onDelete(agent: Agent) {
    const { id, name } = agent;

    if (!!id && !!name) {
      const data: DeleteDialogData = {
        entity: 'Agent',
        confirmationString: name,
      };
      const options: MatDialogConfig = {
        autoFocus: true,
        disableClose: true,
        hasBackdrop: true,
      };

      this.dialog
        .open(DeleteConfirmationComponent, { data, ...options })
        .afterClosed()
        .subscribe((deleted?: boolean) => {
          !!deleted && this.agents.deleteAgent(id).subscribe();
        });
    }
  }
}
