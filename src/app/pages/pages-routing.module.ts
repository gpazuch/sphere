import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import {environment} from "../../environments/environment";
import {HomeComponent} from "./home/home.component";
import {DevComponent} from "./dev/dev.component";
import { AgentsComponent } from './agents/agents.component';

const children = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'fleet',
    children: [
      {
        path: 'agents',
        component: AgentsComponent,
      }
    ],
  }
];

const dev_routes = [
  {
    path: 'dev',
    component: DevComponent,
  }
];

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      ...children,
      ...environment.production ? [] : dev_routes,
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
