import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CanDeactivateGuard } from '../core/can-deactivate-guard.service';

import { ContactComponent } from './contact.component';

const contactRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ContactComponent,
        canDeactivate: [CanDeactivateGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(contactRoutes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
