import { Injectable } from '@angular/core';

import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';
import * as Firebase from 'firebase/app';

import { AuthService } from '../core/auth/auth.service';

import { Brew } from './brew';

@Injectable()
export class BrewService {
  private brews: Brew[] = [
    { type: 'white', brewTime: 150 },
    { type: 'green', brewTime: 180 },
    { type: 'black', brewTime: 240 },
    { type: 'pu-erh', brewTime: 240 },
    { type: 'oolong', brewTime: 300 },
    { type: 'herbal', brewTime: 360 }
  ];

  brewsRef: FirebaseListObservable<any>;

  constructor(private db: AngularFireDatabase, private authService: AuthService) {
    this.brewsRef = this.db.list('/brews');
  }

  addBrew(brew: Brew) {
    this.authService.user
      .take(1)
      .subscribe(user => {
        if (user) {
          const { uid, displayName } = user;

          const { brewTime, type } = brew;
          const completedDate = Firebase.database.ServerValue.TIMESTAMP;

          const brewData = {
            uid,
            displayName,
            type,
            brewTime,
            completedDate
          };

          const newBrewKey = this.brewsRef.push({}).key;

          // tslint:disable-next-line:prefer-const
          let updates = {};

          updates[`/brews/${newBrewKey}`] = brewData;
          updates[`/users/${uid}/brews/${newBrewKey}`] = true;

          this.db.object('/').update(updates);
        }
      });
  }

  getBrews(): Brew[] {
    return this.brews;
  }

  getBrew(type: string): Brew {
    const id = type.toLocaleLowerCase();
    const brew = this.brews.find(t => t.type === id);

    return brew;
  }
}
