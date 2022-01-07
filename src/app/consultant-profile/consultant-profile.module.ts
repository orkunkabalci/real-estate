import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultantProfilePageRoutingModule } from './consultant-profile-routing.module';

import { ConsultantProfilePage } from './consultant-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultantProfilePageRoutingModule
  ],
  declarations: [ConsultantProfilePage]
})
export class ConsultantProfilePageModule {}
