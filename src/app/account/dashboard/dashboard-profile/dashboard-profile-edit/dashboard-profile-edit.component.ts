import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { DashboardService } from '../../dashboard.service';
import { User } from '../../../../shared/models/user';

@Component({
  selector: 'app-dashboard-profile-edit',
  templateUrl: './dashboard-profile-edit.component.html',
  styleUrls: ['./dashboard-profile-edit.component.css']
})
export class DashboardProfileEditComponent implements OnInit {
  user: User;
  profileForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private dashboardService: DashboardService) {
    this.createForm();
  }

  ngOnInit() {
    this.dashboardService.getUser().subscribe(user => {
      this.user = user;
      this.updateForm();
    });
  }

  onSubmit(): void {
    const user: User = { ...this.user, ...this.profileForm.value };
    this.dashboardService.updateUser(user).subscribe(() => this.router.navigate(['/account/profile']));
  }

  isDisabled(): boolean {
    return this.profileForm.invalid;
  }

  private createForm(): void {
    this.profileForm = this.fb.group({
      displayName: ['', [Validators.required, Validators.minLength(8)]],
      email: ['', [Validators.required, Validators.email]],
      story: ['', [Validators.maxLength(1000)]]
    });
  }

  private updateForm(): void {
    this.profileForm.setValue({
      displayName: this.user.displayName,
      email: this.user.email,
      story: this.user.story || ''
    });
  }
}
