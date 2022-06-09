import { Injectable } from '@angular/core';
import { Sink } from './interfaces/sink.interface';

@Injectable({
  providedIn: 'root'
})
export class SinkService {

  constructor() { }

  addSink(sink: Sink) {}

  updateSink(sink: Sink) {}

  getSinkById(id: string) {}

  getAllSinks() {}

  getSinkPage(pageInfo: any) {}

  deleteSink(id: string) {}

  getSinkBackends() {}
}
