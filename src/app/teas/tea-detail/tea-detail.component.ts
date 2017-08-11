import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { TeaService } from '../tea.service';
import { Tea } from '../tea';

@Component({
  selector: 'app-tea-detail',
  templateUrl: './tea-detail.component.html',
  styleUrls: ['./tea-detail.component.css']
})
export class TeaDetailComponent implements OnInit {
  tea: Tea;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private teaService: TeaService) { }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.teaService.getTeaData(params.get('id')))
      .subscribe(tea => this.tea = tea);
  }

  goToTeas(): void {
    this.router.navigate(['/teas']);
  }
}
