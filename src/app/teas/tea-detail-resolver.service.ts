import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { TeaService } from './tea.service';
import { Tea } from './tea';

@Injectable()
export class TeaDetailResolver implements Resolve<Tea> {

  constructor(private router: Router, private teaService: TeaService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Tea> {
    const type: string = route.paramMap.get('id');

    return this.teaService.getTea(type).do(tea => {
      if (!tea) {
        this.router.navigate(['/teas']);
        return null;
      }
    });
  }
}
