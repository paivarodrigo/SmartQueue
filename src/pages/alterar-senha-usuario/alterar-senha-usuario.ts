import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Toaster } from '../../assets/utils/Toaster';

@IonicPage()
@Component({
  selector: "page-alterar-senha-usuario",
  templateUrl: "alterar-senha-usuario.html"
})
export class AlterarSenhaUsuarioPage {
  senhaAtual: any;
  novaSenha: any;
  confirmacaoNovaSenha: any;
  constructor(
    public navCtrl: NavController,
    private toastCtrl: Toaster
  ) {}

  salvar() {
    if (!validarSenhaAtual(this.senhaAtual)) {
      this.toastCtrl.presentSimpleToast(
        "A senha atual está incorreta",
        "bottom"
      );
    } else if (!validarNovaSenha(this.novaSenha)) {
      this.toastCtrl.presentSimpleToast(
        "A nova senha deve ter ao menos 6 dígitos",
        "bottom"
      );
    } else if (
      !validarConfirmacaoNovaSenha(this.novaSenha, this.confirmacaoNovaSenha)
    ) {
      this.toastCtrl.presentSimpleToast(
        "A senha confirmada não é igual a nova senha",
        "bottom"
      );
    } else if (
      !verificarSenhaAtualENovaSenha(this.senhaAtual, this.novaSenha)
    ) {
      this.toastCtrl.presentSimpleToast(
        "A nova senha não pode ser igual a anterior",
        "bottom"
      );
    } else {
      // TODO: Aqui ficará toda a lógica para alterar a senha, chamadas de API e etc...
      this.toastCtrl.presentSimpleToast(
        "Senha alterada com sucesso",
        "bottom"
      );
    }
  }
}

function validarSenhaAtual(senhaAtual) {
  // Aqui ficará a lógica de validação da senha atual
  return true;
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
