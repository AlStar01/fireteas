import { NgModule } from '@angular/core';

import {
  MdSidenavModule,
  MdToolbarModule,
  MdIconModule,
  MdButtonModule,
  MdListModule,
  MdMenuModule,
  MdGridListModule,
  MdProgressSpinnerModule } from '@angular/material';

  @NgModule({
  imports: [
    MdSidenavModule,
    MdToolbarModule,
    MdIconModule,
    MdButtonModule,
    MdListModule,
    MdMenuModule,
    MdProgressSpinnerModule
  ],
  exports: [
    MdSidenavModule,
    MdToolbarModule,
    MdIconModule,
    MdButtonModule,
    MdListModule,
    MdMenuModule,
    MdGridListModule,
    MdProgressSpinnerModule
  ]
})
export class SharedMaterialModule { }
