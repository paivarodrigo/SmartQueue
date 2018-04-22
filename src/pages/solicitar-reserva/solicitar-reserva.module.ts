import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SolicitarReservaPage } from './solicitar-reserva';

@NgModule({
  declarations: [
    SolicitarReservaPage,
  ],
  imports: [
    IonicPageModule.forChild(SolicitarReservaPage),
  ],
  exports: [
    SolicitarReservaPage
  ]
})
export class SolicitarReservaPageModule {}
