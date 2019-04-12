import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import {UserComponent} from './user/user/user.component';
import {RestaurantComponent} from './restaurant/restaurant/restaurant.component';
import {MealComponent} from './restaurant/meal/meal.component';
import {CardComponent} from './user/card/card.component';
import {AddressComponent} from './user/address/address.component';

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        NgbDropdownModule
    ],
    declarations: [
      LayoutComponent,
      SidebarComponent,
      HeaderComponent,
      UserComponent,
      RestaurantComponent,
      MealComponent,
      CardComponent,
      AddressComponent
    ]
})
export class LayoutModule {}
