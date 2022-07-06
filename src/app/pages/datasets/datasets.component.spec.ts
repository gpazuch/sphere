import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgentService } from 'src/app/services/agent.service';
import { OrbService } from 'src/app/services/orb.service';

import { DatasetsComponent } from './datasets.component';

describe('DatasetsComponent', () => {
  let component: DatasetsComponent;
  let fixture: ComponentFixture<DatasetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DatasetsComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatasetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
