import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PromocionesPageRoutingModule } from './promociones-routing.module';

import { PromocionesPage } from './promociones.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PromocionesPageRoutingModule,
    SharedModule
  ],
  declarations: [PromocionesPage]
})
export class PromocionesPageModule {}
