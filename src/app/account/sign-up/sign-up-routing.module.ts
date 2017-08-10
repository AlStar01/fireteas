import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignUpComponent } from './sign-up.component';


const signUpRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: SignUpComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(signUpRoutes)],
  exports: [RouterModule]
})
export class SignUpRoutingModule { }
