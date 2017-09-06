import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, Validators, FormGroupDirective } from '@angular/forms';

import { Observable } from 'rxjs/Observable';

import { MdDialog, MdDialogRef, MdSnackBar } from '@angular/material';

import { ContactService } from './contact.service';
import { ContactDialogComponent } from './contact-dialog.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  @ViewChild(FormGroupDirective) form;
  contactForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService,
    private dialog: MdDialog,
    private snackBar: MdSnackBar) {
    this.createForm();
  }

  hasError(key: string, error: string): boolean {
    const control = this.contactForm.get(key);
    return this.isInvalid(control) && control.errors[error];
  }

  onSubmit(): void {
    this.contactService.sendContact(this.contactForm.value)
      .subscribe(
        res => {
          this.contactService.openSnackBar('☕ Message sent. Thanks! ☕');
          this.resetForm();
        },
        error => {
          this.contactService.openSnackBar('⚠️ Error sending message! Please try again. ⚠️');
        }
      );
  }

  isInvalid(control: AbstractControl) {
    return control.invalid && (control.dirty || control.touched);
  }

  isDisabled(): boolean {
    return this.contactForm.invalid;
  }

  canDeactivate(): Observable<boolean> | boolean {
    const hasChanged: boolean = Object.keys(this.contactForm.controls).some(key => this.contactForm.get(key).value !== '');

    return hasChanged ? this.openDialog() : true;
  }

  private openDialog(): Observable<boolean> {
    const dialogRef = this.dialog.open(ContactDialogComponent, {
      disableClose: true
    });

    return dialogRef.afterClosed();
  }

  private createForm(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(128)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.maxLength(128)]],
      message: ['', [Validators.required, Validators.maxLength(1000)]]
    });
  }

  private resetForm(): void {
    this.contactForm.reset();

    if (this.form) {
      this.form.resetForm();
    }
  }
}
