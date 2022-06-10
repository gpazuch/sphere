import { environment } from "src/environments/environment";
import {NavMenuItem} from "../components/nav-menu/nav-item.component";

const items: NavMenuItem[] = [
  {
    title: 'Home',
    icon: 'view_quilt',
    link: '/pages/home',
    home: true,
  },
  {
    title: 'Agents',
    icon: 'cell_tower',
    link: '/pages/home',
  },
  {
    title: 'Agent Groups',
    icon: 'storage',
    link: '/pages/home',
  },
  {
    title: 'Policy Management',
    icon: 'query_stats',
    link: '/pages/home',
  },
  {
    title: 'Sink Management',
    icon: 'settings',
    link: '/pages/home',
  },
];

const dev_items: NavMenuItem[] = [
  {
    title: 'Dev Showroom',
    icon: 'book',
    link: '/pages/dev',
  },
];

export const NAV_MENU_ITEMS: NavMenuItem[] = [
  ...items,
  ...environment.production ? [] : dev_items,
]
