import { MenuPrincipalPage } from './../menu-principal/menu-principal';
import { RankingEstabelecimentoPage } from './../ranking-estabelecimento/ranking-estabelecimento';
import { Component } from "@angular/core";
import { NavController, IonicPage, NavParams } from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-menu-reserva",
  templateUrl: "menu-reserva.html"
})
export class MenuReservaPage {

  public tempoEstimado: string;
  public senhaMesa: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tempoEstimado = navParams.get('tempoEstimado');
    this.senhaMesa = "EEW89FW9";
  }

  cancelarReserva() {
    this.navCtrl.push(MenuPrincipalPage.name);
  }
  rankingEstabelecimento(){
    this.navCtrl.push(RankingEstabelecimentoPage.name);
  }

}

