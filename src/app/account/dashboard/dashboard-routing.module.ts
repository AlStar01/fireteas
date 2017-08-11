import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../../core/auth/auth-guard.service';

import { DashboardComponent } from './dashboard.component';
import { DashboardProfileComponent } from './dashboard-profile/dashboard-profile.component';
import { DashboardBrewsComponent } from './dashboard-brews/dashboard-brews.component';

const dashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          { path: 'profile', component: DashboardProfileComponent },
          { path: 'brews', component: DashboardBrewsComponent },
          { path: '', redirectTo: 'profile', pathMatch: 'full' }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(dashboardRoutes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
