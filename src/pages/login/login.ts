import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { Toaster } from "../../assets/utils/Toaster";
import { MenuPrincipalPage } from "../menu-principal/menu-principal";
import { CadastrarUsuarioPage } from "../cadastrar-usuario/cadastrar-usuario";
import { RecuperarSenhaUsuarioPage } from "../recuperar-senha-usuario/recuperar-senha-usuario";

@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  email: any;
  senha: any;
  constructor(public navCtrl: NavController, private toastCtrl: Toaster) {}

  entrar() {
    if (
      (this.email == undefined || this.email == "") &&
      (this.senha == undefined || this.senha == "")
    ) {
      // if (this.email != undefined && this.senha != undefined) {
      if (
        (this.email == undefined || this.email == "") &&
        (this.senha == undefined || this.senha == "")
      ) {
        // if (this.email == "smart" && this.senha == "123456") {
        this.navCtrl.push(MenuPrincipalPage);
      } else {
        this.toastCtrl.presentSimpleToast(
          "Email e/ou senha estão incorretos",
          "bottom"
        );
      }
    } else {
      this.toastCtrl.presentSimpleToast(
        "Email e/ou senha estão incorretos",
        "bottom"
      );
    }
  }

  recuperarSenhaUsuario() {
    this.navCtrl.push(RecuperarSenhaUsuarioPage);
  }

  cadastrarUsuario() {
    this.navCtrl.push(CadastrarUsuarioPage);
  }
}
