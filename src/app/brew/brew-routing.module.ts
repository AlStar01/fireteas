import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BrewListComponent } from './brew-list/brew-list.component';
import { BrewDetailComponent } from './brew-detail/brew-detail.component';

const brewRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: BrewListComponent },
      { path: ':id', component: BrewDetailComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(brewRoutes)],
  exports: [RouterModule]
})
export class BrewRoutingModule { }
