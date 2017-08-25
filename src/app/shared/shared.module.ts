import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

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
  MdTabsModule,
  MdInputModule } from '@angular/material';

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
  MdTabsModule,
  MdInputModule
];

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    ...materialModules
  ],
  exports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    ...materialModules,
    BlinkDirective
  ],
  declarations: [
    BlinkDirective
  ]
})
export class SharedModule { }
