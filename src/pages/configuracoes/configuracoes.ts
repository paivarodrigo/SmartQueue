import { Component } from "@angular/core";
import { NavController, ViewController } from "ionic-angular";
import { LoginPage } from "../login/login";
import { SobrePage } from "../sobre/sobre";
import { AlterarSenhaUsuarioPage } from "../alterar-senha-usuario/alterar-senha-usuario";

@Component({
  selector: "page-configuracoes",
  templateUrl: "configuracoes.html"
})
export class ConfiguracoesPage {
  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {}

  ionViewWillEnter() {
    this.viewCtrl.setBackButtonText("");
  }

  alterarSenha() {
    this.navCtrl.push(AlterarSenhaUsuarioPage);
  }

  sobre() {
    this.navCtrl.push(SobrePage);
  }

  sair() {
    // Aqui ficará a lógica de logout, encerrar sessão etc.
    this.navCtrl.push(LoginPage);
  }
}
