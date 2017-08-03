import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule} from '@angular/http';

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
import { SignUpComponent } from './auth/sign-up/sign-up.component';

// Directives
import { BlinkDirective } from './directives/blink.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SharedMaterialModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    HttpModule,
    FlexLayoutModule,
    SharedMaterialModule,
    NavigationComponent,
    CountdownTimerComponent,
    LoginComponent,
    SignUpComponent,
    BlinkDirective
  ],
  declarations: [
    NavigationComponent,
    CountdownTimerComponent,
    LoginComponent,
    SignUpComponent,
    BlinkDirective
  ]
})
export class SharedModule { }
