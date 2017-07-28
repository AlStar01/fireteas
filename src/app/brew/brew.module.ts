import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrewListComponent } from './brew-list/brew-list.component';
import { BrewDetailComponent } from './brew-detail/brew-detail.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [SharedModule],
  declarations: [BrewListComponent, BrewDetailComponent]
})
export class BrewModule { }
