import { Component, OnInit } from '@angular/core';

import { Brew } from '../brew';
import { BrewService } from '../brew.service';

@Component({
  selector: 'app-brew-list',
  templateUrl: './brew-list.component.html',
  styleUrls: ['./brew-list.component.css']
})
export class BrewListComponent implements OnInit {
  brews: Brew[] = [];

  constructor(private brewService: BrewService) {}

  ngOnInit(): void {
    this.brews = this.brewService.getBrews();
  }
}
