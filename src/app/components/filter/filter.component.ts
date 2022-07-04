import { Component, Input, OnInit } from '@angular/core';

export enum FilterTypes {
  Input, // string input
  Select, // allows select one option
  MultiSelect, // allows select multi options
  Checkbox, // on|off option
}

export interface FilterOption {
  name: string;
  prop: string;
  filter?: (param: any) => any;
  type: FilterTypes;
  param?: any;
  options?: string[];
}

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  @Input()
  availableFilters!: FilterOption[];

  protected type = FilterTypes;

  protected appliedFilters: FilterOption[];

  protected selectedFilter!: FilterOption;

  constructor() {
    this.availableFilters = [];
    this.appliedFilters = [];
  }

  ngOnInit(): void {}

  addFilter(): void {}
}
