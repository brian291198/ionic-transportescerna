import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/* import { Header1Component } from './components/header1/header1.component';
import { Header2Component } from './components/header2/header2.component';
import { MenuComponent } from './components/menu/menu.component'; */
import { Header1Component } from 'src/app/shared/components/header1/header1.component';
import { Header2Component } from 'src/app/shared/components/header2/header2.component';

import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    Header1Component,
    Header2Component

  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    Header1Component,
    Header2Component

  ]
})
export class SharedModule { }
