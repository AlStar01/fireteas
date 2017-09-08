import { Component } from '@angular/core';

import { AuthService } from '../../auth/auth.service';
import { SidenavService } from '../sidenav/sidenav.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(
    private sidenavService: SidenavService,
    public authService: AuthService) { }

  openSidenav() {
    this.sidenavService.open();
  }

  logout() {
    this.authService.logout();
  }
}
