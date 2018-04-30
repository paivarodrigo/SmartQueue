import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SobreItemCardapioPage } from './sobre-item-cardapio';

@NgModule({
  declarations: [
    SobreItemCardapioPage,
  ],
  imports: [
    IonicPageModule.forChild(SobreItemCardapioPage),
  ],
  exports:[
    SobreItemCardapioPage
  ]
})
export class SobreItemCardapioPageModule {}
