import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  Agent,
  AgentStates,
} from 'src/app/services/interfaces/agent.interface';

@Component({
  selector: 'app-agent-item',
  templateUrl: './agent-item.component.html',
  styleUrls: ['./agent-item.component.scss'],
})
export class AgentItemComponent {
  @Input()
  agent: Agent = {};

  @Output()
  edit: EventEmitter<Agent>;

  @Output()
  delete: EventEmitter<Agent>;

  constructor() {
    this.edit = new EventEmitter();
    this.delete = new EventEmitter();
  }

  stateIcon(): string {
    const { state } = this.agent;
    let icon = 'error';
    switch (state) {
      case AgentStates.new:
        icon = 'pending';
        break;
      case AgentStates.offline:
      case AgentStates.stale:
        icon = 'error';
        break;
      case AgentStates.online:
        icon = 'check_circle';
        break;
      case AgentStates.removed:
        icon = 'stop_circle';
        break;
    }
    return icon;
  }
}
