import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AddressRoutingModule} from './address-routing.module';
import {AddressComponent} from "./address.component";
import {MatButtonModule, MatTableModule} from "@angular/material";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [AddressComponent],
  imports: [
    CommonModule,
    AddressRoutingModule,
    MatTableModule,
    MatButtonModule,
    FormsModule
  ]
})
export class AddressModule {
}
