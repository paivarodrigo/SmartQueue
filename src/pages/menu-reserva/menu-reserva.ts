import { MenuPrincipalPage } from './../menu-principal/menu-principal';
import { RankingEstabelecimentoPage } from './../ranking-estabelecimento/ranking-estabelecimento';
import { Component } from "@angular/core";
import { NavController, IonicPage } from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-menu-reserva",
  templateUrl: "menu-reserva.html"
})
export class MenuReservaPage {
  constructor(public navCtrl: NavController) {}

  cancelarReserva() {
    this.navCtrl.push(MenuPrincipalPage.name);
  }
  rankingEstabelecimento(){
    this.navCtrl.push(RankingEstabelecimentoPage.name);
  }

}

