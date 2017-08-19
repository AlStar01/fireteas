import { Injectable, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

import { MediaChange, ObservableMedia } from '@angular/flex-layout';

import { Subject } from 'rxjs/Subject';

@Injectable()
export class SidenavService {
  private sidenavSource = new Subject<string>();

  sidenav$ = this.sidenavSource.asObservable();

  constructor(private router: Router, private media: ObservableMedia) {
    this.router.events
      .filter(event => event instanceof NavigationStart)
      .subscribe(event => {
        this.sidenavSource.next('close');
      });
  }

  open() {
    this.sidenavSource.next('open');
  }

  close() {
    this.sidenavSource.next('close');
  }
}
