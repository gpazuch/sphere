import { Component, Input } from '@angular/core';
import { Sink } from 'src/app/services/interfaces/sink.interface';

@Component({
  selector: 'app-sink-item',
  templateUrl: './sink-item.component.html',
  styleUrls: ['./sink-item.component.scss'],
})
export class SinkItemComponent {
  @Input()
  sink: Sink = {};

  constructor() {}

  sinkState() {
    const state = 'stale';
    return state;
  }
}
