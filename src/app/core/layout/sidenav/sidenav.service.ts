import { Injectable, OnInit } from '@angular/core';
import {
  Router,
  NavigationEnd,
  Event } from '@angular/router';

import { Subject } from 'rxjs/Subject';

import { ObservableMedia, MediaChange } from '@angular/flex-layout';
import { AnalyticsService } from '../../meta/analytics.service';

@Injectable()
export class SidenavService {
  private sidenavToggledSource = new Subject<string>();
  private sidenavModeChangedSource = new Subject<string>();

  sidenavToggled$ = this.sidenavToggledSource.asObservable();
  sidenavModeChanged$ = this.sidenavModeChangedSource.asObservable();

  constructor(
    private router: Router,
    private media: ObservableMedia,
    private analyticsService: AnalyticsService) {
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe((event: NavigationEnd) => {
        this.analyticsService.sendPageView(event.urlAfterRedirects);
        this.sidenavToggledSource.next('close');
      });

    this.media.subscribe(mediaChange => this.setMode(mediaChange));
  }

  open(): void {
    this.sidenavToggledSource.next('open');
  }

  close(): void {
    this.sidenavToggledSource.next('close');
  }

  setMode(mediaChange: MediaChange): void {
    const sidenavMode: string = this.getMode(mediaChange);
    this.sidenavModeChangedSource.next(sidenavMode);
  }

  private getMode(mediaChange: MediaChange): string {
    const { mqAlias } = mediaChange;

    if (this.media.isActive('gt-sm')) {
      return 'side';
    } else {
      return 'over';
    }
  }
}
