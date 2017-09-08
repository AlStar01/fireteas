import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { CodeOfConductComponent } from './code-of-conduct/code-of-conduct.component';

const staticRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'code-of-conduct', component: CodeOfConductComponent },
];

@NgModule({
  imports: [RouterModule.forChild(staticRoutes)],
  exports: [RouterModule]
})
export class StaticRoutingModule { }
