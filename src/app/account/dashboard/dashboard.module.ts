import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';

import { DashboardService } from './dashboard.service';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './dashboard.component';
import { DashboardProfileComponent } from './dashboard-profile/dashboard-profile.component';
import { DashboardProfileHomeComponent } from './dashboard-profile/dashboard-profile-home/dashboard-profile-home.component';
import { DashboardBrewsComponent } from './dashboard-brews/dashboard-brews.component';
import { DashboardProfileEditComponent } from './dashboard-profile/dashboard-profile-edit/dashboard-profile-edit.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule,
    DashboardRoutingModule
  ],
  declarations: [
    DashboardComponent,
    DashboardProfileComponent,
    DashboardProfileHomeComponent,
    DashboardBrewsComponent,
    DashboardProfileEditComponent
  ],
  providers: [DashboardService]
})
export class DashboardModule { }
