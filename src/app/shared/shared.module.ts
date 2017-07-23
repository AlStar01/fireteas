import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { 
  MdSidenavModule, 
  MdToolbarModule, 
  MdIconModule,
  MdButtonModule } from '@angular/material';

@NgModule({
  imports: [
    MdSidenavModule, 
    MdToolbarModule, 
    MdIconModule,
    MdButtonModule
  ],
  exports: [
    MdSidenavModule, 
    MdToolbarModule, 
    MdIconModule,
    MdButtonModule
  ]
})
export class SharedModule { }
