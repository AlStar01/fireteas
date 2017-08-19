import { Directive, Input, OnInit } from '@angular/core';
import { MdSidenav } from '@angular/material';

import { SidenavService } from './sidenav.service';

@Directive({
  selector: '[appSidenav]'
})
export class SidenavDirective implements OnInit {
  @Input() appSidenav: MdSidenav;

  constructor(private sidenavService: SidenavService) { }

  ngOnInit(): void {
    this.sidenavService.sidenav$.subscribe(close => this.appSidenav.close());
  }
}
