import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { ComponentsModule } from '../components/components.module';
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
import { MatToolbarModule } from '@angular/material/toolbar';
import { GroupsComponent } from './groups/groups.component';
import { PoliciesComponent } from './policies/policies.component';
import { SinksComponent } from './sinks/sinks.component';
import { DatasetsComponent } from './datasets/datasets.component';
import { AgentAddComponent } from './agents/agent-add.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    DevComponent,
    AgentsComponent,
    GroupsComponent,
    PoliciesComponent,
    SinksComponent,
    DatasetsComponent,
    AgentAddComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ServicesModule,
    ComponentsModule,
    PagesRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatTabsModule,
    LayoutModule,
    ScrollingModule,
  ],
  providers: [AgentService],
})
export class PagesModule {}
