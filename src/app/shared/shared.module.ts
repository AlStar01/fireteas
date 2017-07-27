import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { 
  MdSidenavModule, 
  MdToolbarModule, 
  MdIconModule,
  MdButtonModule,
  MdListModule } from '@angular/material';

@NgModule({
  imports: [
    MdSidenavModule, 
    MdToolbarModule, 
    MdIconModule,
    MdButtonModule,
    MdListModule
  ],
  exports: [
    MdSidenavModule, 
    MdToolbarModule, 
    MdIconModule,
    MdButtonModule,
    MdListModule
  ]
})
export class SharedModule { }
