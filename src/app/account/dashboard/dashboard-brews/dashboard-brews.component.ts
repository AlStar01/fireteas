import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Brew } from '../../../shared/models/brew';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard-brews',
  templateUrl: './dashboard-brews.component.html',
  styleUrls: ['./dashboard-brews.component.css']
})
export class DashboardBrewsComponent implements OnInit {
  limitToLast = 10;

  brews$: Observable<Brew[]>;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.getBrews();
  }

  private getBrews() {
    this.brews$ = this.dashboardService.getBrews(this.limitToLast);
  }
}
