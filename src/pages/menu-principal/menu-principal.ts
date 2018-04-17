import { RankingEstabelecimentoPage } from './../ranking-estabelecimento/ranking-estabelecimento';
import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { ConfiguracoesPage } from "../configuracoes/configuracoes";
import { SolicitarReservaPage } from "../solicitar-reserva/solicitar-reserva";

@Component({
  selector: "page-menu-principal",
  templateUrl: "menu-principal.html"
})
export class MenuPrincipalPage {
  constructor(public navCtrl: NavController) {}

  solicitarReserva() {
    this.navCtrl.push(SolicitarReservaPage);
  }

  configuracoes() {
    this.navCtrl.push(ConfiguracoesPage);
  }

  rankingEstabelecimento(){
    this.navCtrl.push(RankingEstabelecimentoPage.name);
  }
}
