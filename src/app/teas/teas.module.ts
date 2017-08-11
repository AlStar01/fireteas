import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { TeaRoutingModule } from './teas-routing.module';
import { TeaListComponent } from './tea-list/tea-list.component';
import { TeaDetailComponent } from './tea-detail/tea-detail.component';

import { TeaService } from './tea.service';

@NgModule({
  imports: [
    SharedModule,
    TeaRoutingModule
  ],
  declarations: [
    TeaListComponent,
    TeaDetailComponent
  ],
  providers: [TeaService]
})
export class TeasModule { }
