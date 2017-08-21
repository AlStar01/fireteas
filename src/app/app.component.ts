import { Component } from '@angular/core';

import { ObservableMedia } from '@angular/flex-layout';

import { SidenavService } from './core/layout/sidenav/sidenav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private media: ObservableMedia, private sidenavService: SidenavService) {
    this.media
      .asObservable()
      .take(1)
      .subscribe(mediaChange => this.sidenavService.setMode(mediaChange));
  }
}
