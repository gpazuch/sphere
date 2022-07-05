import { Component, Input } from '@angular/core';
import { AgentPolicy } from 'src/app/services/interfaces/policy.interface';

@Component({
  selector: 'app-policy-item',
  templateUrl: './policy-item.component.html',
  styleUrls: ['./policy-item.component.scss'],
})
export class PolicyItemComponent {
  @Input()
  policy: AgentPolicy = {};

  constructor() {}

  policyState() {
    const state = 'stale';

    return state;
  }
}
