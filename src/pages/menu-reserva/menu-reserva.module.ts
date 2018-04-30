import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuReservaPage } from './menu-reserva';

@NgModule({
  declarations: [
    MenuReservaPage,
  ],
  imports: [
    IonicPageModule.forChild(MenuReservaPage),
  ],
  exports: [
    MenuReservaPage
  ]
})
export class MenuReservaPageModule {}
