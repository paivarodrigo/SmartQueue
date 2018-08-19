import { MenuPrincipalPage } from './../menu-principal/menu-principal';
import { ConfiguracoesPage } from './../configuracoes/configuracoes';
import { HttpErrorResponse } from '@angular/common/http';
import { UsuarioServiceProvider } from './../../providers/usuario-service/usuario-service';
import { SessionProvider } from './../../providers/session/session';
import { ToasterProvider } from './../../providers/toaster/toaster';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Usuario } from '../../models/usuario';

@IonicPage()
@Component({
  selector: "page-alterar-senha-usuario",
  templateUrl: "alterar-senha-usuario.html"
})

export class AlterarSenhaUsuarioPage {
  public senhaAtual: any;
  public novaSenha: any;
  public confirmacaoNovaSenha: any;
  
  constructor(public navCtrl: NavController,
  private _toastCtrl: ToasterProvider,
  private _session: SessionProvider,
  private _usuarioService: UsuarioServiceProvider) {}

  salvar() {
    
    if (!validarNovaSenha(this.novaSenha)) {
      this.mensagem("A nova senha deve ter ao menos 6 dígitos");

    } else if (!validarConfirmacaoNovaSenha(this.novaSenha, this.confirmacaoNovaSenha)){
      this.mensagem("A senha confirmada não é igual a nova senha");

    } else if (!verificarSenhaAtualENovaSenha(this.senhaAtual, this.novaSenha)) {
      this.mensagem("A nova senha não pode ser igual a anterior");

    } else {
      this._session.getUsuario();
      this._usuarioService.alterarSenha(this._session.usuario, this.novaSenha).subscribe(
        (response: Usuario) => {
          this.mensagem("Senha alterada com sucesso");
          this._session.remove();
          this._session.create(response);
          this.navCtrl.push(MenuPrincipalPage.name);
        },(error: HttpErrorResponse) => {
          this.mensagem(error.error);
        }
      )

      
    }
  }

  mensagem(mensagem: String){
    this._toastCtrl.presentSimpleToast(
      mensagem,
      "bottom"
    );
  }
}

function verificarSenhaAtualENovaSenha(senhaAtual, novaSenha) {
  return (
    senhaAtual != undefined &&
    novaSenha != undefined &&
    senhaAtual != novaSenha
  );
}

function validarNovaSenha(newPassword) {
  return newPassword != undefined && newPassword.length >= 6;
}

function validarConfirmacaoNovaSenha(novaSenha, confirmacaoNovaSenha) {
  return (
    novaSenha != undefined &&
    confirmacaoNovaSenha != undefined &&
    novaSenha == confirmacaoNovaSenha
  );
}
