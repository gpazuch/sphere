import { Component, Input } from '@angular/core';
import { Tags } from 'src/app/services/interfaces/tag';

@Component({
  selector: 'app-tag-display',
  templateUrl: './tag-display.component.html',
  styleUrls: ['./tag-display.component.scss'],
})
export class TagDisplayComponent {
  @Input()
  tags: Tags = {};

  constructor() {}
}
