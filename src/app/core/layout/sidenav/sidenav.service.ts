import { Injectable, OnInit } from '@angular/core';
import { Router, NavigationStart, Event } from '@angular/router';

import { Subject } from 'rxjs/Subject';

@Injectable()
export class SidenavService {
  private sidenavToggledSource = new Subject<string>();

  sidenavToggled$ = this.sidenavToggledSource.asObservable();

  constructor(private router: Router) {
    this.router.events
      .filter(event => event instanceof NavigationStart)
      .subscribe(event => this.sidenavToggledSource.next('close'));
  }

  open() {
    this.sidenavToggledSource.next('open');
  }

  close() {
    this.sidenavToggledSource.next('close');
  }
}
