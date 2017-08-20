import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import * as Firebase from 'firebase/app';

import { AuthService } from '../../core/auth/auth.service';

@Injectable()
export class DashboardService {

  constructor(private authService: AuthService) { }

  getUser(): Observable<Firebase.User> {
    return this.authService.user.take(1);
  }
}
