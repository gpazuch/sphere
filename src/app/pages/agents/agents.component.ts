import { Component, OnInit } from '@angular/core';
import { AgentService } from 'src/app/services/agent.service';

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.scss']
})
export class AgentsComponent implements OnInit {

  constructor(
    private agents: AgentService,
  ) { }

  ngOnInit(): void {
    this.agents.getAllAgents().subscribe(resp => {
      console.log("got it");
    })
  }

}
