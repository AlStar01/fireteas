import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as Firebase from 'firebase/app';

import { AuthService } from '../../core/auth/auth.service';

import { Brew } from '../../shared/models/brew';

@Injectable()
export class DashboardService {

  constructor(
    private db: AngularFireDatabase,
    private authService: AuthService) { }

  getUser(): Observable<Firebase.User> {
    return this.authService.user.take(1);
  }

  getBrews(): FirebaseListObservable<Brew[]> {
      return this.getUser()
        .map(user => user.uid)
        .switchMap(uid => this.db.list(`/user-brews/${uid}`, {
          query: {
            limitToLast: 10
          }
        })) as FirebaseListObservable<Brew[]>;
  }
}
