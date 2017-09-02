import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import * as Firebase from 'firebase/app';

import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-dashboard-profile-home',
  templateUrl: './dashboard-profile-home.component.html',
  styleUrls: ['./dashboard-profile-home.component.css']
})
export class DashboardProfileHomeComponent implements OnInit {
  user: Firebase.User;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.dashboardService.getUser().subscribe(user => this.user = user);
  }
}
