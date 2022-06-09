import { Injectable } from '@angular/core';
import { AgentPolicy } from './interfaces/policy.interface';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  constructor() { }

  addPolicy(policy: AgentPolicy) {}

  updatePolicy(policy: AgentPolicy) {}

  getPolicyById(id: string) {}

  getAllPolicies() {}

  getPolicyPage(pageInfo: any) {}

  deletePolicy(id: string) {}

  duplicatePolicy(id: string) {}

  getAvailableBackends() {}

  getBackendConfig() {}
}
