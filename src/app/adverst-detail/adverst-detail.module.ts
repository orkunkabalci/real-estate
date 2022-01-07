import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdverstDetailPageRoutingModule } from './adverst-detail-routing.module';

import { AdverstDetailPage } from './adverst-detail.page';
import { SpicaMapIframeComponent } from '../spica-map-iframe/spica-map-iframe.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdverstDetailPageRoutingModule
  ],
  declarations: [AdverstDetailPage,SpicaMapIframeComponent]
})
export class AdverstDetailPageModule {}
