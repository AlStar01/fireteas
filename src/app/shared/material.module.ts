import { NgModule } from '@angular/core';

import {
  MdSidenavModule,
  MdToolbarModule,
  MdIconModule,
  MdButtonModule,
  MdListModule,
  MdMenuModule,
  MdGridListModule } from '@angular/material';

  @NgModule({
  imports: [
    MdSidenavModule,
    MdToolbarModule,
    MdIconModule,
    MdButtonModule,
    MdListModule,
    MdMenuModule
  ],
  exports: [
    MdSidenavModule,
    MdToolbarModule,
    MdIconModule,
    MdButtonModule,
    MdListModule,
    MdMenuModule,
    MdGridListModule
  ]
})
export class SharedMaterialModule { }