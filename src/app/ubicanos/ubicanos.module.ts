import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UbicanosPageRoutingModule } from './ubicanos-routing.module';

import { UbicanosPage } from './ubicanos.page';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UbicanosPageRoutingModule,
    SharedModule
  ],
  declarations: [UbicanosPage]
})
export class UbicanosPageModule {}
