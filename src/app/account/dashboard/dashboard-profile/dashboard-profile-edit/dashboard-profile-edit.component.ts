import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-dashboard-profile-edit',
  templateUrl: './dashboard-profile-edit.component.html',
  styleUrls: ['./dashboard-profile-edit.component.css']
})
export class DashboardProfileEditComponent implements OnInit {
  profileForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private dashboardService: DashboardService) {
    this.createForm();
  }

  ngOnInit() { }

  onSubmit(): void {}

  private createForm(): void {
    this.profileForm = this.fb.group({
      displayName: ['', [Validators.required, Validators.minLength(8)]],
      email: ['', [Validators.required, Validators.email]],
      bio: ['', [Validators.maxLength(1000)]]
    });
  }
}
