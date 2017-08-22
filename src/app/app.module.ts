import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import 'hammerjs';

import { environment } from '../environments/environment';

import './rxjs-extensions';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { PageNotFoundComponent } from './page-not-found.component';
import { AboutComponent } from './about/about.component';
import { CodeOfConductComponent } from './code-of-conduct/code-of-conduct.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    PageNotFoundComponent,
    CodeOfConductComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    CoreModule.forRoot(),
    SharedModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
