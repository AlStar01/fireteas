import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TeaListComponent } from './tea-list/tea-list.component';
import { TeaDetailComponent } from './tea-detail/tea-detail.component';

const teaRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: TeaListComponent },
      { path: ':id', component: TeaDetailComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(teaRoutes)],
  exports: [RouterModule]
})
export class TeaRoutingModule { }
