import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SidenavService } from './sidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor(private sidenavService: SidenavService) { }

  ngOnInit() {
    this.sidenavService.sidenavClose$.subscribe(close => console.log(close));
  }
}
