import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { AgentService } from './agent.service';

describe('AgentService', () => {
  let service: AgentService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(AgentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
