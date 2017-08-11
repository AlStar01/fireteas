import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TeaListComponent } from './tea-list/tea-list.component';
import { TeaDetailComponent } from './tea-detail/tea-detail.component';
import { TeaDetailResolver } from './tea-detail-resolver.service';

const teaRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: TeaListComponent },
      {
        path: ':id',
        component: TeaDetailComponent,
        resolve: {
          tea: TeaDetailResolver
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(teaRoutes)],
  exports: [RouterModule],
  providers: [TeaDetailResolver]
})
export class TeaRoutingModule { }
