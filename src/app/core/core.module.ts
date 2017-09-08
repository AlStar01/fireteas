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
  MdListModule, MdSidenavModule } from '@angular/material';

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
import { ContainerComponent } from './layout/container/container.component';

// Meta
import { AnalyticsService } from './meta/analytics.service';

const materialModules = [
  MdToolbarModule,
  MdMenuModule,
  MdButtonModule,
  MdIconModule,
  MdListModule,
  MdSidenavModule
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    ...materialModules
  ],
  exports: [
    HttpClientModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    HeaderComponent,
    NavigationComponent,
    ContainerComponent
  ],
  providers: [
    AuthService,
    AuthGuard,
    CanDeactivateGuard,
    AnalyticsService,
    SidenavService
  ],
  declarations: [
    SidenavDirective,
    HeaderComponent,
    NavigationComponent,
    ContainerComponent
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
