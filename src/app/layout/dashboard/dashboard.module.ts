import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbAlertModule, NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './dashboard.component';
import {NotificationComponent, TimelineComponent} from './components';
import {StatModule} from '../../shared';
import {MatTableModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    NgbCarouselModule,
    NgbAlertModule,
    DashboardRoutingModule,
    StatModule,
    MatTableModule
  ],
    declarations: [
        DashboardComponent,
        TimelineComponent,
        NotificationComponent
    ]
})
export class DashboardModule {}
