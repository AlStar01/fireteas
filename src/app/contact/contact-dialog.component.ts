import { Component } from '@angular/core';

import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-contact-dialog',
  template: `
    <h2 md-dialog-title>Discard changes</h2>

    <md-dialog-content>Are you sure?</md-dialog-content>

    <md-dialog-actions>
      <button md-button [md-dialog-close]="false">No</button>
      <!-- Can optionally provide a result for the closing dialog. -->
      <button md-button [md-dialog-close]="true">Yes</button>
    </md-dialog-actions>
  `
})
export class ContactDialogComponent {

  constructor(private dialogRef: MdDialogRef<ContactDialogComponent>) {}
}
