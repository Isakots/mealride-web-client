import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import {FormsModule} from '@angular/forms';
import {MatButtonModule, MatStepperModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    MatStepperModule,
    MatButtonModule
  ],
    declarations: [LoginComponent]
})
export class LoginModule {}
