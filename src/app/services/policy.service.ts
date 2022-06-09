import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AgentPolicy } from './interfaces/policy.interface';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  constructor(
    private http: HttpClient,
  ) { }

  addPolicy(policy: AgentPolicy) {
    return this.http.post(environment.policies, policy);
  }

  updatePolicy(policy: AgentPolicy) {
    const { id } = policy;
    return this.http.put(`${environment.policies}/${id}`, policy);
  }

  getPolicyById(id: string) {
    return this.http.get(`${environment.policies}/${id}`);
  }

  getAllPolicies() {}

  getPolicyPage(pageInfo: any) {}

  deletePolicy(id: string) {
    return this.http.delete(`${environment.policies}/${id}`);
  }

  duplicatePolicy(id: string) {
    return this.http.post(`${environment.policies}/${id}/duplicate`, {});
  }

  getAvailableBackends() {
    return this.http.get(environment.agentBackends);
  }

  getBackendConfig(route: string[]) {
    const final = route.join('/');
    return this.http.get(`${environment.agentBackends}/${final}`);
  }
}
