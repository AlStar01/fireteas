import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { CommunityRoutingModule } from './community-routing.module';
import { CommunityComponent } from './community.component';
import { CommunityBrewsComponent } from './community-brews/community-brews.component';

@NgModule({
  imports: [
    SharedModule,
    CommunityRoutingModule
  ],
  declarations: [
    CommunityComponent,
    CommunityBrewsComponent
  ]
})
export class CommunityModule { }
