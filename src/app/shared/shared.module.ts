import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';

import { SharedMaterialModule } from "./material.module";

import { NavigationComponent } from './layout/navigation/navigation.component';
import { HeaderComponent } from './layout/header/header.component';

import { CountdownComponent } from './countdown/countdown.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    SharedMaterialModule
  ],
  exports: [
    CommonModule,
    FlexLayoutModule,
    SharedMaterialModule,
    NavigationComponent,
    HeaderComponent
  ],
  declarations: [
    NavigationComponent,
    HeaderComponent,
    CountdownComponent
  ]
})
export class SharedModule { }
