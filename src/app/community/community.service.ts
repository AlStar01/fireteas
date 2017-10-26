import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AngularFireDatabase } from 'angularfire2/database';

import { Brew } from '../shared/models/brew';

@Injectable()
export class CommunityService {

  constructor(private db: AngularFireDatabase) { }

  getBrews(): Observable<Brew[]> {
    return this.db.list<Brew>('/brews', ref => ref.orderByKey().limitToLast(25)).valueChanges()
      .map((brews: Brew[]) => brews.sort((a, b) => b.completedDate - a.completedDate));
  }
}
