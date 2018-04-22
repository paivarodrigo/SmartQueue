import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlterarSenhaUsuarioPage } from './alterar-senha-usuario';

@NgModule({
  declarations: [
    AlterarSenhaUsuarioPage,
  ],
  imports: [
    IonicPageModule.forChild(AlterarSenhaUsuarioPage),
  ],
  exports: [
    AlterarSenhaUsuarioPage
  ]
})
export class AlterarSenhaUsuarioPageModule {}
