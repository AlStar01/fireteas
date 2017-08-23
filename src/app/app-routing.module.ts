import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { CodeOfConductComponent } from './code-of-conduct/code-of-conduct.component';

const appRoutes: Routes = [
  { path: 'teas', loadChildren: 'app/teas/teas.module#TeasModule' },
  { path: 'brew', loadChildren: 'app/brew/brew.module#BrewModule' },
  { path: 'login', loadChildren: 'app/account/login/login.module#LoginModule' },
  { path: 'sign-up', loadChildren: 'app/account/sign-up/sign-up.module#SignUpModule' },
  { path: 'account', loadChildren: 'app/account/dashboard/dashboard.module#DashboardModule' },
  { path: 'contact', loadChildren: 'app/contact/contact.module#ContactModule' },
  { path: 'about', component: AboutComponent },
  { path: 'code-of-conduct', component: CodeOfConductComponent },
  { path: '', redirectTo: '/teas', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
