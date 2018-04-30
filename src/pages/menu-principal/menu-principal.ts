import { ConsultarCardapioPage } from './../consultar-cardapio/consultar-cardapio';
import { RankingEstabelecimentoPage } from './../ranking-estabelecimento/ranking-estabelecimento';
import { Component } from "@angular/core";
import { NavController, IonicPage } from "ionic-angular";
import { ConfiguracoesPage } from "../configuracoes/configuracoes";
import { SolicitarReservaPage } from "../solicitar-reserva/solicitar-reserva";

@IonicPage()
@Component({
  selector: "page-menu-principal",
  templateUrl: "menu-principal.html"
})
export class MenuPrincipalPage {
  constructor(public navCtrl: NavController) {}

  solicitarReserva() {
    this.navCtrl.push(SolicitarReservaPage.name);
  }

  configuracoes() {
    this.navCtrl.push(ConfiguracoesPage.name);
  }

  rankingEstabelecimento(){
    this.navCtrl.push(RankingEstabelecimentoPage.name);
  }

  consultarCardapio(){
    this.navCtrl.push(ConsultarCardapioPage.name);
  }
}

