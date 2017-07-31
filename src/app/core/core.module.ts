import {
  ModuleWithProviders, NgModule,
  Optional, SkipSelf } from '@angular/core';

import { CommonModule } from '@angular/common';

import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';

@NgModule({
  imports: [CommonModule],
  providers: [
    AuthService,
    AuthGuard
  ]
})
export class CoreModule {
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule
    };
  }
}
