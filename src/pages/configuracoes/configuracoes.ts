import { LoginPage } from './../login/login';
import { SessionProvider } from './../../providers/session/session';
import { Component } from "@angular/core";
import { NavController, IonicPage, AlertController } from "ionic-angular";
import { SobrePage } from "../sobre/sobre";
import { AlterarSenhaUsuarioPage } from "../alterar-senha-usuario/alterar-senha-usuario";

@IonicPage()
@Component({
  selector: "page-configuracoes",
  templateUrl: "configuracoes.html"
})
export class ConfiguracoesPage {
  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController,
    public session: SessionProvider) {}

  alterarSenha() {
    this.navCtrl.push(AlterarSenhaUsuarioPage.name);
  }

  sobre() {
    this.navCtrl.push(SobrePage.name);
  }

  sair() {
    let sair = false;
    this.alertCtrl.create({
      title: "Confirmação de logout",
      message: "Tem certeza que deseja sair?",
      buttons:[
        {
          text: "Sim",
          handler: () => {
            this.navCtrl.remove(0, this.navCtrl.length()-1);
            this.session.remove();
            this.navCtrl.push(LoginPage.name);
          }
        },
        {
          text: "Não"
        }
      ]
    }).present();
  }
}