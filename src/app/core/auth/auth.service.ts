import { Injectable } from '@angular/core';

import { Observable } from "rxjs/Observable";

import { AngularFireAuth } from 'angularfire2/auth';
import * as Firebase from 'firebase/app';

@Injectable()
export class AuthService {
  user: Observable<Firebase.User>;

  constructor(private afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }

  login(): void {
    this.afAuth.auth.signInWithPopup(new Firebase.auth.GoogleAuthProvider());
  }

  logout(): void {
    this.afAuth.auth.signOut();
  }
}
