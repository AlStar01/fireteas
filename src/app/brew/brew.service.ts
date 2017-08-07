import { Injectable } from '@angular/core';

import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';

import { AuthService } from '../core/auth/auth.service';

import { Brew } from './brew';

const lightText = 'rgba(255, 255, 255, 1)';
const darkText = 'rgba(0, 0, 0, 0.87)';

const brews: Brew[] = [
  { type: 'green', cols: 3, rows: 1, backgroundColor: '#43a047', textColor: lightText, brewTime: 180 },
  { type: 'white', cols: 1, rows: 2, backgroundColor: '#ffeb3b', textColor: darkText, brewTime: 180 },
  { type: 'herbal', cols: 1, rows: 1, backgroundColor: '#cddc39', textColor: darkText, brewTime: 180 },
  { type: 'black', cols: 2, rows: 1, backgroundColor: '#795548', textColor: lightText, brewTime: 180 },
  { type: 'oolong', cols: 2, rows: 1, backgroundColor: '#e65100', textColor: lightText, brewTime: 180 },
  { type: 'pu-erh', cols: 2, rows: 1, backgroundColor: '#DDBDF1', textColor: darkText, brewTime: 180 }
];

@Injectable()
export class BrewService {
  brews: FirebaseListObservable<any>;

  constructor(
    private db: AngularFireDatabase,
    private authService: AuthService) {
    this.brews = this.db.list('/brews');
  }

  addBrew(brew: Brew) {
    this.authService.user
      .take(1)
      .subscribe(auth => {
        if (auth) {
          const { uid, displayName } = auth;

          const { brewTime, type } = brew;
          const completedDate: string = new Date().toISOString();

          const brewData = {
            uid,
            displayName,
            type,
            brewTime,
            completedDate
          };

          const newBrewKey = this.brews.push({}).key;

          const updates = {};

          updates[`/brews/${newBrewKey}`] = brewData;
          updates[`/users/${uid}/brews/${newBrewKey}`] = true;

          this.db.object('/').update(updates);
        }
      });
  }

  getBrews(): Brew[] {
    return brews;
  }

  getBrew(type: string): Brew {
    const id = type.toLocaleLowerCase();
    const brew = brews.find(t => t.type === id);

    return brew;
  }
}
