import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Style
import { FlexLayoutModule } from '@angular/flex-layout';

// Material Modules
import { SharedMaterialModule } from './material.module';

// Layout
import { NavigationComponent } from './layout/navigation/navigation.component';

// Components
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';

// Auth
import { LoginComponent } from './auth/login/login.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SharedMaterialModule
  ],
  exports: [
    CommonModule,
    FlexLayoutModule,
    SharedMaterialModule,
    NavigationComponent,
    CountdownTimerComponent,
    LoginComponent
  ],
  declarations: [
    NavigationComponent,
    CountdownTimerComponent,
    LoginComponent
  ]
})
export class SharedModule { }
