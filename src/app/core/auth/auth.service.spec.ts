import { TestBed, inject } from '@angular/core/testing';

import { AngularFireAuth } from 'angularfire2/auth';

import 'rxjs/add/operator/take';
import 'rxjs/add/operator/do';

import { AuthService } from './auth.service';

const angularFireAuthStub = {};

xdescribe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthService,
       { provide: AngularFireAuth, useValue: angularFireAuthStub }
      ]
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
