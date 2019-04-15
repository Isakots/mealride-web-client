import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import {MatInputModule, MatListModule, MatStepperModule, MatButtonModule, MatSelectModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SignupRoutingModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatInputModule,
    MatListModule,
    MatButtonModule,
    MatSelectModule
  ],
  declarations: [SignupComponent]
})
export class SignupModule { }
