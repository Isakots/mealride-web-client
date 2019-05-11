import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';

import {LayoutRoutingModule} from './layout-routing.module';
import {LayoutComponent} from './layout.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {HeaderComponent} from './components/header/header.component';
import {RestaurantComponent} from './restaurant/restaurant/restaurant.component';
import {MealComponent} from './restaurant/meal/meal.component';
import {CardComponent} from './user/card/card.component';
import {AddressFormComponent} from "./user/address-form/address-form.component";
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule} from "@angular/material";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    NgbDropdownModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    AddressFormComponent
  ],
  declarations: [
    LayoutComponent,
    SidebarComponent,
    HeaderComponent,
    RestaurantComponent,
    MealComponent,
    CardComponent,
    AddressFormComponent,
  ]
})
export class LayoutModule {
}
