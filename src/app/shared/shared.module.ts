import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';

import { SharedMaterialModule } from './material.module';

import { NavigationComponent } from './layout/navigation/navigation.component';
import { HeaderComponent } from './layout/header/header.component';

import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SharedMaterialModule
  ],
  exports: [
    CommonModule,
    FlexLayoutModule,
    SharedMaterialModule,
    NavigationComponent,
    HeaderComponent,
    CountdownTimerComponent
  ],
  declarations: [
    NavigationComponent,
    HeaderComponent,
    CountdownTimerComponent
  ]
})
export class SharedModule { }
