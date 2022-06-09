import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Agent } from './interfaces/agent.interface';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  constructor(
    private http: HttpClient,
  ) { }

  addAgent(agent: Agent) {
    return this.http.post(environment.agents, agent);
  }

  getAgentById(id: string) {
    return this.http.get(`${environment.agents}/${id}`);
  }

  getAllAgents() {

  }

  getAgentPage(pageInfo: any) {

  }

  updateAgent(agent: Agent) {
    const { id } = agent;
    return this.http.put(`${environment.agents}/${id}`, agent);
  }

  deleteAgent(id: string) {
    return this.http.delete(`${environment.agents}/${id}`);
  }

  getMatchingAgents(tags: any) {

  }

  resetAgent(id: string) {
    return this.http.post(`${environment.agents}/${id}/rpc/reset`, {});
  }

  validateAgent(agent: Agent) {
    return this.http.post(environment.agentValidate,
      {...agent, validate_only: true});
  }
}
