import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeaListComponent } from './src/app/tea/tea-list/tea-list.component';
import { TeaDetailComponent } from './src/app/tea/tea-detail/tea-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TeaListComponent, TeaDetailComponent]
})
export class TeaModule { }
