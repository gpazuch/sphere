import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Sink } from './interfaces/sink.interface';

@Injectable({
  providedIn: 'root'
})
export class SinkService {

  constructor(
    private http: HttpClient,
  ) { }

  addSink(sink: Sink) {
    return this.http.post(environment.sinks, sink);
  }

  updateSink(sink: Sink) {
    const { id } = sink;
    return this.http.put(`${environment.sinks}/${id}`, sink);
  }

  getSinkById(id: string) {
    return this.http.get(`${environment.sinks}/${id}`);
  }

  getAllSinks() {}

  getSinkPage(pageInfo: any) {}

  deleteSink(id: string) {
    return this.http.delete(`${environment.sinks}/${id}`);
  }

  getSinkBackends() {
    return this.http.get(environment.sinkBackends);
  }
}
