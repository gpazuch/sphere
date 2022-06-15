import { Component, Input, OnInit } from '@angular/core';
import { Agent } from 'src/app/services/interfaces/agent.interface';

@Component({
  selector: 'app-agent-item',
  templateUrl: './agent-item.component.html',
  styleUrls: ['./agent-item.component.scss']
})
export class AgentItemComponent implements OnInit {
  @Input()
  agent: Agent = {};

  constructor() { }

  ngOnInit(): void {
  }

}
