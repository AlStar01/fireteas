import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule} from '@angular/http';

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
  MdCardModule } from '@angular/material';

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
  MdGridListModule,
  MdProgressSpinnerModule,
  MdCardModule
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
    HttpModule,
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
