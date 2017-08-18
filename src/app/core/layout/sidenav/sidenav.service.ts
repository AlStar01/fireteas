import { Injectable, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

import { Subject } from 'rxjs/Subject';

@Injectable()
export class SidenavService {
  private sidenavCloseSource = new Subject<boolean>();

  sidenavClose$ = this.sidenavCloseSource.asObservable();

  constructor(private router: Router) {
    this.router.events
      .filter(event => event instanceof NavigationStart)
      .subscribe(event => {
        this.sidenavCloseSource.next(true);
      });
  }
}
