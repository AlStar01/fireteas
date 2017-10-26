import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// Style
import { FlexLayoutModule } from '@angular/flex-layout';

// Material Modules
import {
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatListModule,
  MatMenuModule,
  MatGridListModule,
  MatProgressSpinnerModule,
  MatCardModule,
  MatTabsModule,
  MatInputModule,
  MatSnackBarModule,
  MatDialogModule } from '@angular/material';

// Directives
import { BlinkDirective } from './directives/blink.directive';

const materialModules = [
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatListModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatCardModule,
  MatTabsModule,
  MatInputModule,
  MatSnackBarModule,
  MatDialogModule
];

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    ...materialModules
  ],
  exports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    ...materialModules,
    BlinkDirective
  ],
  declarations: [
    BlinkDirective
  ]
})
export class SharedModule { }
