import { Component } from '@angular/core';

import { AuthService } from './core/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Fireteas';

  constructor(public authService: AuthService) { }

  logout(): void {
    this.authService.logout();
  }
}
