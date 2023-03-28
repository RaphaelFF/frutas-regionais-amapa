import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PragasPageRoutingModule } from './pragas-routing.module';

import { PragasPage } from './pragas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PragasPageRoutingModule
  ],
  declarations: [PragasPage]
})
export class PragasPageModule {}
