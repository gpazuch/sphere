import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AgentService } from './agent.service';
import { DatasetService } from './dataset.service';
import { GroupService } from './group.service';

import { OrbService } from './orb.service';
import { PolicyService } from './policy.service';
import { SinkService } from './sink.service';

describe('OrbService', () => {
  let service: OrbService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        AgentService,
        DatasetService,
        GroupService,
        PolicyService,
        SinkService,
      ],
    });
    service = TestBed.inject(OrbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
