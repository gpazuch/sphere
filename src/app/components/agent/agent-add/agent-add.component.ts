import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { AgentService } from 'src/app/services/agent.service';
import { Tags } from 'src/app/services/interfaces/tag';
import { OrbService } from 'src/app/services/orb.service';

@Component({
  selector: 'app-agent-add',
  templateUrl: './agent-add.component.html',
  styleUrls: ['./agent-add.component.scss'],
})
export class AgentAddComponent implements OnInit {
  @Output()
  onClose: EventEmitter<void>;

  agentForm: UntypedFormGroup;

  tags: Tags = {};

  constructor(
    private fb: FormBuilder,
    private orb: OrbService,
    private agents: AgentService
  ) {
    this.onClose = new EventEmitter();
    this.agentForm = fb.group({
      name: [null, [Validators.required]],
      orb_tags: [null, [Validators.required]],
    });
  }

  ngOnInit(): void {}

  onTagsChange(tags: Tags) {
    const orb_tags =
      Object.entries(tags).length > 0 ? JSON.stringify(tags) : null;
    this.agentForm.patchValue({ orb_tags }, { emitEvent: true });
    this.agentForm.updateValueAndValidity();
  }

  onSave() {
    const agent = this.agentForm.value;
    this.agents.addAgent(agent).subscribe();
  }

  onDiscard() {
    this.onClose.emit();
  }
}
