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

// Layout
import { NavigationComponent } from './layout/navigation/navigation.component';

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
    NavigationComponent,
    BlinkDirective
  ],
  declarations: [
    NavigationComponent,
    BlinkDirective
  ]
})
export class SharedModule { }
