import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecuperarSenhaUsuarioPage } from './recuperar-senha-usuario';

@NgModule({
  declarations: [
    RecuperarSenhaUsuarioPage,
  ],
  imports: [
    IonicPageModule.forChild(RecuperarSenhaUsuarioPage),
  ],
  exports: [
    RecuperarSenhaUsuarioPage
  ]
})
export class RecuperarSenhaUsuarioPageModule {}
