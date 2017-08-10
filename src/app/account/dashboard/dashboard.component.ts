import { Component } from '@angular/core';

import { Link } from '../../shared/models/link';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  navLinks: Link[] = [
    { path: ['profile'], label: 'Profile' },
    { path: ['brews'], label: 'Brews' }
  ];
}
