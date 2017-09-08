import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { Brew } from '../shared/models/brew';

@Injectable()
export class CommunityService {

  constructor(private db: AngularFireDatabase) { }

  getBrews(): FirebaseListObservable<Brew[]> {
    return this.db.list('/brews', {
      query: {
        limitToLast: 25
      }
    })
    .map((brews: Brew[]) => brews.sort((a, b) => b.completedDate - a.completedDate)) as FirebaseListObservable<Brew[]>;
  }
}
