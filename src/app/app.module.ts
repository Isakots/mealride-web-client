import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { UserComponent } from './domain/user/user.component';
import { RestaurantComponent } from './domain/restaurant/restaurant.component';
import { MealComponent } from './domain/meal/meal.component';
import { CardComponent } from './domain/card/card.component';
import { AddressComponent } from './domain/address/address.component';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule
    ],
    declarations: [AppComponent, UserComponent, RestaurantComponent, MealComponent, CardComponent, AddressComponent],
    providers: [AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule {}
