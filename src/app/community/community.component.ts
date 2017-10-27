import { Component } from '@angular/core';

import { Link } from '../shared/models/link';

@Component({
  selector: 'app-community-brews',
  templateUrl: './community.component.html'
})
export class CommunityComponent {
  navLinks: Link[] = [
    { path: ['brews'], label: 'Brews' },
    { path: ['teas'], label: 'Teas' }
  ];
}
