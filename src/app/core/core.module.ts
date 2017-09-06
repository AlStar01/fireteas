import {
  ModuleWithProviders, NgModule,
  Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

// Firebase
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

// Style
import { FlexLayoutModule } from '@angular/flex-layout';

// Material
import {
  MdToolbarModule, MdMenuModule,
  MdButtonModule, MdIconModule,
  MdListModule } from '@angular/material';

// Auth
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';

// Guards
import { CanDeactivateGuard } from './can-deactivate-guard.service';

// Layout
import { SidenavService } from './layout/sidenav/sidenav.service';
import { SidenavDirective } from './layout/sidenav/sidenav.directive';
import { HeaderComponent } from './layout/header/header.component';
import { NavigationComponent } from './layout/navigation/navigation.component';

const materialModukes = [
  MdToolbarModule,
  MdMenuModule,
  MdButtonModule,
  MdIconModule,
  MdListModule
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    ...materialModukes
  ],
  exports: [
    HttpClientModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    SidenavDirective,
    HeaderComponent,
    NavigationComponent
  ],
  providers: [
    AuthService,
    AuthGuard,
    CanDeactivateGuard,
    SidenavService
  ],
  declarations: [
    SidenavDirective,
    HeaderComponent,
    NavigationComponent
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
