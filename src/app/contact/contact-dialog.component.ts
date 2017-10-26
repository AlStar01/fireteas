import { Component } from '@angular/core';

import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-contact-dialog',
  template: `
    <h2 mat-dialog-title>Discard changes</h2>

    <mat-dialog-content>Are you sure?</mat-dialog-content>

    <mat-dialog-actions>
      <button mat-button [mat-dialog-close]="false">No</button>
      <!-- Can optionally provide a result for the closing dialog. -->
      <button mat-button [mat-dialog-close]="true">Yes</button>
    </mat-dialog-actions>
  `
})
export class ContactDialogComponent {

  constructor(private dialogRef: MatDialogRef<ContactDialogComponent>) {}
}
