import { Component } from "@angular/core";
import { NavController, ViewController } from "ionic-angular";
import { Toaster } from "../../assets/utils/Toaster";

@Component({
  selector: "page-change-password",
  templateUrl: "change-password.html"
})
export class ChangePasswordPage {
  currentPassword: any;
  newPassword: any;
  confirmNewPassword: any;
  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    private toastCtrl: Toaster
  ) {}

  ionViewWillEnter() {
    this.viewCtrl.setBackButtonText("");
  }

  save() {
    if (!validateCurrentPassword(this.currentPassword)) {
      this.toastCtrl.presentSimpleToast(
        "A senha atual está incorreta",
        "bottom"
      );
    } else if (!validateNewPassword(this.newPassword)) {
      this.toastCtrl.presentSimpleToast(
        "A nova senha deve ter ao menos 6 dígitos",
        "bottom"
      );
    } else if (
      !validateConfirmNewPassword(this.newPassword, this.confirmNewPassword)
    ) {
      this.toastCtrl.presentSimpleToast(
        "A senha confirmada não é igual a nova senha",
        "bottom"
      );
    } else if (
      !checkCurrentAndNewPassword(this.currentPassword, this.newPassword)
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

function validateCurrentPassword(currentPassword) {
  // Aqui ficará a lógica de validação da senha atual
  return true;
}

function checkCurrentAndNewPassword(currentPassword, newPassword) {
  return (
    currentPassword != undefined &&
    newPassword != undefined &&
    currentPassword != newPassword
  );
}

function validateNewPassword(newPassword) {
  return newPassword != undefined && newPassword.length >= 6;
}

function validateConfirmNewPassword(newPassword, confirmNewPassword) {
  return (
    newPassword != undefined &&
    confirmNewPassword != undefined &&
    newPassword == confirmNewPassword
  );
}