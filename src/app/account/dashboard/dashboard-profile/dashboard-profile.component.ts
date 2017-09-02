import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import * as Firebase from 'firebase/app';

import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard-profile',
  template: '<router-outlet></router-outlet>'
})
export class DashboardProfileComponent {}
