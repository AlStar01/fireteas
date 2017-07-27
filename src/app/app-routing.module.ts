import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { AboutComponent } from "./about/about.component";
import { PageNotFoundComponent } from "./page-not-found.component";

const appRoutes: Routes = [
  { path: '', loadChildren: 'app/teas/teas.module#TeasModule' },
  { path: 'about', component: AboutComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
