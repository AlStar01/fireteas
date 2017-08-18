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
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { SidenavService } from './layout/sidenav/sidenav.service';

@NgModule({
  imports: [CommonModule],
  exports: [
    HttpClientModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    SidenavComponent
  ],
  providers: [
    AuthService,
    AuthGuard,
    SidenavService
  ],
  declarations: [
    SidenavComponent
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
