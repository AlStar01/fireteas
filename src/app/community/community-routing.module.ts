import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../core/auth/auth-guard.service';

import { CommunityComponent } from './community.component';
import { CommunityBrewsComponent } from './community-brews/community-brews.component';
import { CommunityTeasComponent } from './community-teas/community-teas.component';
import { CommunityTeaListComponent } from './community-teas/community-tea-list/community-tea-list.component';
import { CommunityTeaDetailComponent } from './community-teas/community-tea-detail/community-tea-detail.component';

const communityRoutes: Routes = [
  {
    path: '',
    component: CommunityComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          {
            path: 'teas',
            component: CommunityTeasComponent ,
            children: [
              { path: '', component: CommunityTeaListComponent },
              { path: ':id', component: CommunityTeaDetailComponent }
            ]
          },
          { path: 'brews', component: CommunityBrewsComponent },
          { path: '', redirectTo: 'brews', pathMatch: 'full' }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(communityRoutes)],
  exports: [RouterModule]
})
export class CommunityRoutingModule { }
