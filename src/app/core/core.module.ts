import {
  ModuleWithProviders, NgModule,
  Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// Firebase
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

// Auth
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';

// Layout
import { SidenavService } from './layout/sidenav/sidenav.service';
import { SidenavDirective } from './layout/sidenav/sidenav.directive';

@NgModule({
  imports: [CommonModule],
  exports: [
    HttpClientModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    SidenavDirective
  ],
  providers: [
    AuthService,
    AuthGuard,
    SidenavService
  ],
  declarations: [
    SidenavDirective
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
