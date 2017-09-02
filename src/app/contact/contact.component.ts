import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MdSnackBar } from '@angular/material';

import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  submitted = false;
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
          this.snackBar.open('☕ Message sent. Thanks! ☕');
          this.submitted = true;
        },
        error => this.snackBar.open('⚠️ Error sending message! Please try again. ⚠️')
      );

  }

  isDisabled(): boolean {
    return this.contactForm.invalid || this.submitted;
  }

  private createForm(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(128)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.maxLength(128)]],
      message: ['', [Validators.required, Validators.maxLength(1000)]]
    });
  }
}
