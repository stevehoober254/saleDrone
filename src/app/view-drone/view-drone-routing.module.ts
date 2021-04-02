import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewDronePage } from './view-drone.page';

const routes: Routes = [
  {
    path: '',
    component: ViewDronePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewDronePageRoutingModule {}
