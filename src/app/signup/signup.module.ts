import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SignupRoutingModule} from './signup-routing.module';
import {SignupComponent} from './signup.component';
import {MatButtonModule, MatInputModule, MatListModule, MatSelectModule, MatStepperModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {MessagesComponent} from "../messages/messages.component";

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
  declarations: [SignupComponent, MessagesComponent]
})
export class SignupModule { }
