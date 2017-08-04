import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';

import * as Firebase from 'firebase/app';

import { AuthService } from '../../core/auth/auth.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  errorMessage: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private zone: NgZone) { }

  loginGoogle(): void {
    const router = this.router;

    this.authService.login()
      .then((result: Firebase.auth.UserCredential) => {
        const redirectUrl = this.authService.redirectUrl || '/teas';
        this.authService.redirectUrl = null;

        this.zone.run(() => this.router.navigate([redirectUrl]));
      })
      .catch((error: Firebase.FirebaseError) => {
        this.errorMessage = error.message;
      });
  }
}
