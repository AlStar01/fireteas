import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { ContactService } from './contact.service';
import { Message } from './message';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService) {
      this.createForm();
    }

  ngOnInit() {

  }

  private createForm(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(10)]],
      message: ['', [Validators.required, Validators.minLength(25)]]
    });
  }
}
