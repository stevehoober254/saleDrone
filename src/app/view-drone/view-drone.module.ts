import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewDronePageRoutingModule } from './view-drone-routing.module';

import { ViewDronePage } from './view-drone.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewDronePageRoutingModule
  ],
  declarations: [ViewDronePage]
})
export class ViewDronePageModule {}
