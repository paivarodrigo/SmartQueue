import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RealizarPedidoPage } from './realizar-pedido';

@NgModule({
  declarations: [
    RealizarPedidoPage,
  ],
  imports: [
    IonicPageModule.forChild(RealizarPedidoPage),
  ],
  exports: [
    RealizarPedidoPage
  ]
})
export class RealizarPedidoPageModule {}
