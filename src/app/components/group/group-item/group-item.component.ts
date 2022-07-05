import { Component, Input } from '@angular/core';
import {
  AgentGroup,
  GroupStates,
} from 'src/app/services/interfaces/group.interface';

@Component({
  selector: 'app-group-item',
  templateUrl: './group-item.component.html',
  styleUrls: ['./group-item.component.scss'],
})
export class GroupItemComponent {
  @Input()
  group: AgentGroup = {};

  constructor() {}
}
