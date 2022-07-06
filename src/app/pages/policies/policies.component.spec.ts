import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilterService } from 'src/app/services/filter.service';
import { OrbService } from 'src/app/services/orb.service';

import { PoliciesComponent } from './policies.component';

describe('PoliciesComponent', () => {
  let component: PoliciesComponent;
  let fixture: ComponentFixture<PoliciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PoliciesComponent],
      imports: [HttpClientTestingModule],
      providers: [OrbService, FilterService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
