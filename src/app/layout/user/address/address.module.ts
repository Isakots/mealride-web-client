import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AddressRoutingModule} from './address-routing.module';
import {AddressComponent} from "./address.component";
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatTableModule} from "@angular/material";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LayoutModule} from "../../layout.module";

@NgModule({
  declarations: [AddressComponent],
  imports: [
    CommonModule,
    AddressRoutingModule,
    MatTableModule,
    MatButtonModule,
    FormsModule,
    LayoutModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule
  ]
})
export class AddressModule {
}
