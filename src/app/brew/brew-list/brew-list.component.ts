import { Component, OnInit } from '@angular/core';

import { BrewService } from '../brew.service';

@Component({
  selector: 'app-brew-list',
  templateUrl: './brew-list.component.html',
  styleUrls: ['./brew-list.component.css']
})
export class BrewListComponent implements OnInit {
  tiles: any[] = [];

  constructor(private brewService: BrewService) {}

  ngOnInit(): void {
    this.tiles = this.brewService.getBrews();
  }
}
