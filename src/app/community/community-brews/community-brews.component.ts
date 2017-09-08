import { Component, OnInit } from '@angular/core';

import { FirebaseListObservable } from 'angularfire2/database';

import { CommunityService } from '../community.service';
import { Brew } from '../../shared/models/brew';

@Component({
  selector: 'app-community-brews',
  templateUrl: './community-brews.component.html',
  styleUrls: ['./community-brews.component.css']
})
export class CommunityBrewsComponent implements OnInit {
  brews$: FirebaseListObservable<Brew[]>;

  constructor(private communityService: CommunityService) { }

  ngOnInit() {
    this.brews$ = this.communityService.getBrews();
  }
}
