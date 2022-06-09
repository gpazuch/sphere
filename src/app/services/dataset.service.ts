import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Dataset } from './interfaces/dataset.interface';

@Injectable({
  providedIn: 'root'
})
export class DatasetService {

  constructor(
    private http: HttpClient,
  ) { }

  addDataset(dataset: Dataset) {
    return this.http.post(environment.datasets, dataset);
  }

  updateDataset(dataset: Dataset) {
    const { id } = dataset;
    return this.http.put(`${environment.datasets}/${id}`, dataset);
  }

  getDatasetById(id: string) {
    return this.http.get(`${environment.datasets}/${id}`);
  }

  getAllDatasets() {

  }

  getDatasetPage(pageInfo: any) {

  }

  deleteDataset(id: string) {
    return this.http.delete(`${environment.datasets}/${id}`);
  }
}
