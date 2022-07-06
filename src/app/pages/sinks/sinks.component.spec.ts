import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinksComponent } from './sinks.component';

describe('SinksComponent', () => {
  let component: SinksComponent;
  let fixture: ComponentFixture<SinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SinksComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
