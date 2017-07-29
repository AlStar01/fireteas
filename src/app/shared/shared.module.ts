import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';

import {
  MdSidenavModule,
  MdToolbarModule,
  MdIconModule,
  MdButtonModule,
  MdListModule,
  MdMenuModule,
  MdGridListModule } from '@angular/material';

import { NavigationComponent } from './layout/navigation/navigation.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MdSidenavModule,
    MdToolbarModule,
    MdIconModule,
    MdButtonModule,
    MdListModule,
    MdMenuModule
  ],
  exports: [
    CommonModule,
    FlexLayoutModule,
    MdSidenavModule,
    MdToolbarModule,
    MdIconModule,
    MdButtonModule,
    MdListModule,
    MdMenuModule,
    MdGridListModule,
    NavigationComponent
  ],
  declarations: [
    NavigationComponent
  ]
})
export class SharedModule { }
