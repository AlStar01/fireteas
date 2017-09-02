import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-profile-edit',
  templateUrl: './dashboard-profile-edit.component.html',
  styleUrls: ['./dashboard-profile-edit.component.css']
})
export class DashboardProfileEditComponent implements OnInit {
  profileForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.createForm();
  }

  onSubmit(): void {}

  private createForm(): void {
    this.profileForm = this.fb.group({
      username: ['', [Validators.maxLength(64)]],
      bio: ['', [Validators.maxLength(1000)]],
      websiteUrl: ['', [Validators.maxLength(256)]],
      facebookUrl: ['', [Validators.maxLength(256)]],
      twitterUrl: ['', [Validators.maxLength(256)]]
    });
  }

  ngOnInit() {
  }

}
