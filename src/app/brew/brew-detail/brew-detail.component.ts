import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { BrewService } from '../brew.service';

@Component({
  selector: 'app-brew-detail',
  templateUrl: './brew-detail.component.html',
  styleUrls: ['./brew-detail.component.css']
})
export class BrewDetailComponent implements OnInit {
  brewTime: number;

  constructor(
    private route: ActivatedRoute,
    private brewService: BrewService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const type = params.get('id');

      this.brewTime = this.brewService.getBrewTime(type);
    });
  }
}
