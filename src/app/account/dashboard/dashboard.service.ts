import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Observable as ObservableObject } from 'rxjs/Rx';

import {
  AngularFireDatabase } from 'angularfire2/database';
import * as Firebase from 'firebase/app';

import { AuthService } from '../../core/auth/auth.service';

import { Brew } from '../../shared/models/brew';
import { User } from '../../shared/models/user';

@Injectable()
export class DashboardService {
  constructor(
    private db: AngularFireDatabase,
    private authService: AuthService) { }

  getUser(): Observable<User> {
    return this.getAuthUser().mergeMap(this.getDbUser, this.getMergedUser);
  }

  updateUser(user: User): Observable<void> {
    const { displayName, email, photoURL, story, uid } = user;

    return this.getAuthUser()
      .switchMap(authUser =>
        Observable.forkJoin(
          authUser.updateEmail(email),
          authUser.updateProfile({ displayName, photoURL })
        )
      )
      .switchMap(() =>
        this.db.object(`/users/${uid}`).update({ displayName, email, story })
      );
  }

  getBrews(limitToLast: number): Observable<Brew[]> {
      return this.authService.getUser()
        .map(user => user.uid)
        .switchMap(uid =>
          this.db.list<Brew>(`/user-brews/${uid}`, ref => ref.orderByKey().limitToLast(10)).valueChanges())
          .map((brews: Brew[]) => brews.sort((a, b) => b.completedDate - a.completedDate));
  }

  private getAuthUser(): Observable<Firebase.User> {
    return this.authService.getUser();
  }

  private getDbUser = (user: Firebase.User): Observable<User> => {
    return this.db.object<User>(`/users/${user.uid}`).valueChanges();
  }

  private getMergedUser = (authUser: Firebase.User, dbUser: User): User => ({ email: authUser.email, ...dbUser });
}
