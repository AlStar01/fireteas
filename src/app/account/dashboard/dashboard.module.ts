import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';

import { DashboardService } from './dashboard.service';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './dashboard.component';
import { DashboardProfileComponent } from './dashboard-profile/dashboard-profile.component';
import { DashboardBrewsComponent } from './dashboard-brews/dashboard-brews.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule,
    DashboardRoutingModule
  ],
  declarations: [
    DashboardComponent,
    DashboardProfileComponent,
    DashboardBrewsComponent
  ],
  providers: [DashboardService]
})
export class DashboardModule { }
