import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';

import { environment } from '../environments/environment';

import { CoreModule }  from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebase),
    CoreModule.forRoot(),
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
