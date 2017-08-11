import { Component, OnInit } from '@angular/core';

import { TeaService } from '../tea.service';

@Component({
  selector: 'app-tea-list',
  templateUrl: './tea-list.component.html',
  styleUrls: ['./tea-list.component.css']
})
export class TeaListComponent implements OnInit {
  teas: { type: string; title: string }[] = [];

  constructor(private teaService: TeaService) { }

  ngOnInit() {
    this.teas = this.teaService.getTeas();
  }
}
