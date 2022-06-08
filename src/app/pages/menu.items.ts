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
    title: 'Fleet Management',
    icon: 'cell_tower',
    link: '/pages/home',
  },
  {
    title: 'Sinks Management',
    icon: 'storage',
    link: '/pages/home',
  },
  {
    title: 'Dataset Explorer',
    icon: 'query_stats',
    link: '/pages/home',
  },
  {
    title: 'Settings',
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
