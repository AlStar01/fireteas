import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { CommunityService } from '../community.service';
import { Brew } from '../../shared/models/brew';

@Component({
  selector: 'app-community-brews',
  templateUrl: './community-brews.component.html',
  styleUrls: ['./community-brews.component.css']
})
export class CommunityBrewsComponent implements OnInit {
  brews$: Observable<Brew[]>;

  constructor(private communityService: CommunityService) { }

  ngOnInit() {
    this.brews$ = this.communityService.getBrews();
  }
}
