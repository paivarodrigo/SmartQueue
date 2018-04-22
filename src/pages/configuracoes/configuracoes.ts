import { Component } from "@angular/core";
import { NavController, IonicPage } from "ionic-angular";
import { LoginPage } from "../login/login";
import { SobrePage } from "../sobre/sobre";
import { AlterarSenhaUsuarioPage } from "../alterar-senha-usuario/alterar-senha-usuario";

@IonicPage()
@Component({
  selector: "page-configuracoes",
  templateUrl: "configuracoes.html"
})
export class ConfiguracoesPage {
  constructor(public navCtrl: NavController) {}

  alterarSenha() {
    this.navCtrl.push(AlterarSenhaUsuarioPage.name);
  }

  sobre() {
    this.navCtrl.push(SobrePage.name);
  }

  sair() {
    // Aqui ficará a lógica de logout, encerrar sessão etc.
    this.navCtrl.push(LoginPage.name);
  }
}