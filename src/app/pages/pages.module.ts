import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import {ComponentsModule} from "../components/components.module";
import { HomeComponent } from './home/home.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { DevComponent } from './dev/dev.component';
import { AgentsComponent } from './agents/agents.component';
import { ServicesModule } from '../services/services.module';
import { AgentService } from '../services/agent.service';


@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    DevComponent,
    AgentsComponent
  ],
  imports: [
    CommonModule,
    ServicesModule,
    ComponentsModule,
    PagesRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule
  ],
  providers: [
    AgentService,
  ]
})
export class PagesModule { }
