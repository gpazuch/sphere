import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilterService } from 'src/app/services/filter.service';
import { OrbService } from 'src/app/services/orb.service';

import { AgentsComponent } from './agents.component';

describe('AgentsComponent', () => {
  let component: AgentsComponent;
  let fixture: ComponentFixture<AgentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgentsComponent],
      imports: [HttpClientTestingModule],
      providers: [OrbService, FilterService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
