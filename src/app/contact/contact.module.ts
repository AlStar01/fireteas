import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { ContactService } from './contact.service';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { ContactDialogComponent } from './contact-dialog.component';


@NgModule({
  imports: [
    SharedModule,
    ContactRoutingModule
  ],
  declarations: [
    ContactComponent,
    ContactDialogComponent
  ],
  providers: [ContactService],
  entryComponents: [ContactDialogComponent]
})
export class ContactModule { }
