import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { FilterOption } from '../components/filter/filter.component';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  private _filters: FilterOption[];

  private filters: Subject<FilterOption[]>;

  constructor() {
    this.filters = new Subject();
    this._filters = [];
    this.filters.next(this._filters);
  }

  getFilters() {
    return this.filters.asObservable();
  }

  cleanFilters() {
    this._filters = [];
    this.filters.next([]);
  }

  addFilter(filter: FilterOption) {
    this._filters.push(filter);
    this.filters.next(this._filters);
  }

  removeFilter(index: number) {
    if (index >= 0 && index < this._filters.length) {
      this._filters.splice(index, 1);
      this.filters.next(this._filters);
    }
  }
}
