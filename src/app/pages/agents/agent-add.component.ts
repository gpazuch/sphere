import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Tags } from 'src/app/services/interfaces/tag';

@Component({
  selector: 'app-agent-add',
  templateUrl: './agent-add.component.html',
  styleUrls: ['./agent-add.component.scss'],
})
export class AgentAddComponent implements OnInit {
  agentForm: UntypedFormGroup;

  tags: Tags = {};

  constructor(private fb: UntypedFormBuilder) {
    this.agentForm = fb.group({
      name: [null, [Validators.required]],
      tags: [null, [Validators.required]],
    });
  }

  ngOnInit(): void {}

  onTagsChange(tags: Tags) {}
}
