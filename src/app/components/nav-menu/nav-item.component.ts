import { Component, Input } from '@angular/core';

export interface NavMenuItem {
  title?: string;
  icon?: string;
  link?: string;
  home?: boolean;
  children?: NavMenuItem[];
}

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss'],
})
export class NavItemComponent {
  @Input()
  item: NavMenuItem;

  constructor() {
    this.item = {};
  }
}
