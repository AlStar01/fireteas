import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Style
import { FlexLayoutModule } from '@angular/flex-layout';

// Material Modules
import {
  MdSidenavModule,
  MdToolbarModule,
  MdIconModule,
  MdButtonModule,
  MdListModule,
  MdMenuModule,
  MdGridListModule,
  MdProgressSpinnerModule,
  MdCardModule,
  MdTabsModule } from '@angular/material';

// Directives
import { BlinkDirective } from './directives/blink.directive';

const materialModules = [
  MdSidenavModule,
  MdToolbarModule,
  MdIconModule,
  MdButtonModule,
  MdListModule,
  MdMenuModule,
  MdProgressSpinnerModule,
  MdCardModule,
  MdTabsModule
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    ...materialModules
  ],
  exports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    ...materialModules,
    BlinkDirective
  ],
  declarations: [
    BlinkDirective
  ]
})
export class SharedModule { }
