import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrewListComponent } from './brew-list/brew-list.component';
import { BrewDetailComponent } from './brew-detail/brew-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BrewListComponent, BrewDetailComponent]
})
export class BrewModule { }
