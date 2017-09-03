import { Component, OnInit } from '@angular/core';

import { DashboardService } from '../../dashboard.service';

import { User } from '../../../../shared/models/user';

@Component({
  selector: 'app-dashboard-profile-home',
  templateUrl: './dashboard-profile-home.component.html',
  styleUrls: ['./dashboard-profile-home.component.css']
})
export class DashboardProfileHomeComponent implements OnInit {
  user: User;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.dashboardService.getUser().subscribe(user => this.user = user);
  }
}
