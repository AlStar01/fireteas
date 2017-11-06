import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { CommunityRoutingModule } from './community-routing.module';
import { CommunityComponent } from './community.component';
import { CommunityBrewsComponent } from './community-brews/community-brews.component';
import { CommunityTeasComponent } from './community-teas/community-teas.component';
import { CommunityService } from './community.service';
import { CommunityTeaListComponent } from './community-teas/community-tea-list/community-tea-list.component';
import { CommunityTeaDetailComponent } from './community-teas/community-tea-detail/community-tea-detail.component';

@NgModule({
  imports: [
    SharedModule,
    CommunityRoutingModule
  ],
  declarations: [
    CommunityComponent,
    CommunityBrewsComponent,
    CommunityTeasComponent,
    CommunityTeaListComponent,
    CommunityTeaDetailComponent
  ],
  providers: [CommunityService]
})
export class CommunityModule { }
