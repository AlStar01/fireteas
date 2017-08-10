import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found.component';

const appRoutes: Routes = [
  { path: 'teas', loadChildren: 'app/teas/teas.module#TeasModule' },
  { path: 'brew', loadChildren: 'app/brew/brew.module#BrewModule' },
  { path: 'login', loadChildren: 'app/account/login/login.module#LoginModule' },
  { path: 'sign-up', loadChildren: 'app/account/sign-up/sign-up.module#SignUpModule' },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: '/teas', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
