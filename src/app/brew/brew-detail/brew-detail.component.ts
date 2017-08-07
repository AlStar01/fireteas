import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { BrewService } from '../brew.service';

import { Brew } from '../brew';

@Component({
  selector: 'app-brew-detail',
  templateUrl: './brew-detail.component.html',
  styleUrls: ['./brew-detail.component.css']
})
export class BrewDetailComponent implements OnInit {
  brew: Brew;

  constructor(
    private route: ActivatedRoute,
    private brewService: BrewService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const type = params.get('id');
      this.brew = this.brewService.getBrew(type);
    });
  }

  onCompleted(completed: boolean): void {
    this.brewService.addBrew(this.brew);
  }
}
