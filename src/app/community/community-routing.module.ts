import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommunityComponent } from './community.component';
import { CommunityBrewsComponent } from './community-brews/community-brews.component';

const communityRoutes: Routes = [
  {
    path: '',
    component: CommunityComponent,
    children: [
      { path: 'brews', component: CommunityBrewsComponent },
      { path: '', redirectTo: 'brews', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(communityRoutes)],
  exports: [RouterModule]
})
export class CommunityRoutingModule { }
