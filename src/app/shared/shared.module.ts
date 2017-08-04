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
  MdProgressSpinnerModule } from '@angular/material';

// Layout
import { NavigationComponent } from './layout/navigation/navigation.component';

// Components
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';

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
  MdProgressSpinnerModule
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
    CountdownTimerComponent,
    BlinkDirective
  ],
  declarations: [
    NavigationComponent,
    CountdownTimerComponent,
    BlinkDirective
  ]
})
export class SharedModule { }
