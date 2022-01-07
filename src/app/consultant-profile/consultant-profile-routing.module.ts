import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultantProfilePage } from './consultant-profile.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultantProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultantProfilePageRoutingModule {}
