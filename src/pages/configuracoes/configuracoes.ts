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
    private _alertCtrl: AlertController,
    private _session: SessionProvider) {}

  alterarSenha() {
    this.navCtrl.push(AlterarSenhaUsuarioPage.name);
  }

  sobre() {
    this.navCtrl.push(SobrePage.name);
  }

  sair() {
    this._alertCtrl.create({
      title: "Confirmação de logout",
      message: "Tem certeza que deseja sair?",
      buttons:[
        {
          text: "Sim",
          handler: () => {
            this._session.clear();
            this._session.usuarioLogado = {} as any;
            this.navCtrl.setRoot(LoginPage.name);
          }
        },
        {
          text: "Não"
        }
      ]
    }).present();
  }
}