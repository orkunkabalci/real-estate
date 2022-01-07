import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdverstDetailPage } from './adverst-detail.page';

const routes: Routes = [
  {
    path: '',
    component: AdverstDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdverstDetailPageRoutingModule {}
