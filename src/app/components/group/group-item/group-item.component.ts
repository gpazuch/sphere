import { Component, Input, OnInit } from '@angular/core';
import { AgentGroup } from 'src/app/services/interfaces/group.interface';

@Component({
  selector: 'app-group-item',
  templateUrl: './group-item.component.html',
  styleUrls: ['./group-item.component.scss']
})
export class GroupItemComponent implements OnInit {
  @Input()
  group: AgentGroup = {};

  constructor() { }

  ngOnInit(): void {
  }

  groupState() {
    const {total, online} = this.group?.matching_agents || {online: 0, total: 0};
    const hasAgents = !!total && total > 0;
    const allOnline = !!hasAgents && !!online && total === online;

    const state = (!hasAgents && 'offline') || (allOnline && 'online') || 'stale'

    return state;
  }

}
