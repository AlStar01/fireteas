import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { BrewListComponent } from './brew-list/brew-list.component';
import { BrewDetailComponent } from './brew-detail/brew-detail.component';
import { BrewRoutingModule } from "./brew-routing.module";

@NgModule({
  imports: [
    SharedModule,
    BrewRoutingModule
  ],
  declarations: [
    BrewListComponent,
    BrewDetailComponent
  ]
})
export class BrewModule { }