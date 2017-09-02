import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../../core/auth/auth-guard.service';

import { DashboardComponent } from './dashboard.component';

// Profile
import { DashboardProfileComponent } from './dashboard-profile/dashboard-profile.component';
import { DashboardProfileHomeComponent } from './dashboard-profile/dashboard-profile-home/dashboard-profile-home.component';
import { DashboardProfileEditComponent } from './dashboard-profile/dashboard-profile-edit/dashboard-profile-edit.component';

// Brews
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
          {
            path: 'profile',
            component: DashboardProfileComponent,
            children: [
              { path: '', component: DashboardProfileHomeComponent },
              { path: 'edit', component: DashboardProfileEditComponent }
            ]
          },
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
