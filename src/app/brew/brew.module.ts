import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { BrewListComponent } from './brew-list/brew-list.component';
import { BrewDetailComponent } from './brew-detail/brew-detail.component';
import { BrewRoutingModule } from './brew-routing.module';
import { BrewService } from './brew.service';

@NgModule({
  imports: [
    SharedModule,
    BrewRoutingModule
  ],
  declarations: [
    BrewListComponent,
    BrewDetailComponent
  ],
  providers: [BrewService]
})
export class BrewModule { }
