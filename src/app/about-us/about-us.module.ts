import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutUsPageRoutingModule } from './about-us-routing.module';

import { AboutUsPage } from './about-us.page';
import { SpicaMapIframeComponent } from '../spica-map-iframe/spica-map-iframe.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutUsPageRoutingModule,
  ],
  declarations: [AboutUsPage,SpicaMapIframeComponent]
})
export class AboutUsPageModule {}
