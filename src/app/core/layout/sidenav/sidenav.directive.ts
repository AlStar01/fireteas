import { Directive, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material';

import { SidenavService } from './sidenav.service';

type MatSidenavMode = 'over' | 'push' | 'side';

@Directive({
  selector: '[appSidenav]'
})
export class SidenavDirective implements OnInit {
  @Input() appSidenav: MatSidenav;

  constructor(private sidenavService: SidenavService) { }

  ngOnInit(): void {
    this.sidenavService.sidenavToggled$
      .subscribe(action => {
        if (action === 'close' && this.canClose()) {
          this.appSidenav.close();
        } else if (action === 'open' && this.canOpen()) {
          this.appSidenav.open();
        }
      });

    this.sidenavService.sidenavModeChanged$
      .subscribe((mode: MatSidenavMode) => {
        this.appSidenav.mode = mode;

        if (mode === 'side') {
          this.sidenavService.open();
        } else {
          this.sidenavService.close();
        }
      });

    this.initSidenav();
  }

  private initSidenav(): void {
    if (window.innerWidth >= 960) {
      this.appSidenav.mode = 'side';
      this.appSidenav.open();
    } else {
      this.appSidenav.mode = 'over';
      this.appSidenav.close();
    }
  }

  private canClose(): boolean {
    return (this.appSidenav.mode === 'over') && (this.appSidenav.opened);
  }

  private canOpen(): boolean {
    return !this.appSidenav.opened;
  }
}
