import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AgentAddComponent } from './agent-add.component';

describe('AgentAddComponent', () => {
  let component: AgentAddComponent;
  let fixture: ComponentFixture<AgentAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgentAddComponent],
      imports: [FormsModule, ReactiveFormsModule, HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
