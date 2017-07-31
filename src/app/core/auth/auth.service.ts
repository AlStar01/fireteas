import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { AngularFireAuth, FirebaseAuthStateObservable } from 'angularfire2/auth';
import * as Firebase from 'firebase/app';

@Injectable()
export class AuthService {
  user: Observable<Firebase.User>;

  redirectUrl: string;

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.user = afAuth.authState;
  }

  isLoggedIn(redirectUrl: string): Observable<boolean> {
    return this.afAuth.authState
      .take(1)
      .map(authState => !!authState)
      .do(authenticated => {
        if (!authenticated) {
          // store attempted URL for redirecting
          this.redirectUrl = redirectUrl;
          this.router.navigate(['/login']);
        }
      });
  }

  login(): void {
    this.afAuth.auth.signInWithPopup(new Firebase.auth.GoogleAuthProvider());
  }

  logout(): void {
    this.afAuth.auth.signOut();
  }
}
