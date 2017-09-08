import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaticRoutingModule } from './static-routing.module';

import { AboutComponent } from './about/about.component';
import { CodeOfConductComponent } from './code-of-conduct/code-of-conduct.component';

@NgModule({
  imports: [
    CommonModule,
    StaticRoutingModule
  ],
  declarations: [
    AboutComponent,
    CodeOfConductComponent
  ]
})
export class StaticModule { }
