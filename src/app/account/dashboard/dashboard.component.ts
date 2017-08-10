import { Component } from '@angular/core';

import { Link } from '../../shared/models/link';

@Component({
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  navLinks: Link[] = [
    { path: ['profile'], label: 'Profile' },
    { path: ['brews'], label: 'Brews' }
  ];
}
