import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConsultarCardapioPage } from './consultar-cardapio';

@NgModule({
  declarations: [
    ConsultarCardapioPage,
  ],
  imports: [
    IonicPageModule.forChild(ConsultarCardapioPage),
  ],
  exports: [
    ConsultarCardapioPage
  ]
})
export class ConsultarCardapioPageModule {}
