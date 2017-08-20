import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import * as Firebase from 'firebase/app';

import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard-profile',
  templateUrl: './dashboard-profile.component.html',
  styleUrls: ['./dashboard-profile.component.css']
})
export class DashboardProfileComponent implements OnInit {
  user: Firebase.User;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.dashboardService.getUser().subscribe(user => this.user = user);
  }
}
