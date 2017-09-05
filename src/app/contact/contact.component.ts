import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormGroupDirective } from '@angular/forms';

import { MdSnackBar } from '@angular/material';

import { ContactService } from './contact.service';

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
    private snackBar: MdSnackBar) {
    this.createForm();
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

  isDisabled(): boolean {
    return this.contactForm.invalid;
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
