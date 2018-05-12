import { SessionProvider } from './../../providers/session/session';
import { Usuario } from './../../models/usuario';
import { HistoricoPage } from './../historico/historico';
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
export class MenuPrincipalPage{

  usuarioLogado: Usuario;
  constructor(public navCtrl: NavController,
    private _session: SessionProvider) {}
  
  ionViewDidLoad(){
    this._session.get().then(
      usuario => {
          this.usuarioLogado = new Usuario(usuario);
          console.log('GET USUARIO >>> ',usuario);
      });

      // console.log("EXIST USUARIO >>>", this._session.exist());

      // this._session.remove();

      // this._session.get().then(
      //   usuario => {
      //     this.usuarioLogado = new Usuario(usuario);
      //     console.log('GET USUARIO DEPOIS DE REMOVER  >>> ',usuario);
      // });

      // console.log("EXIST DEPOIS DE REMOVER >>>",this._session.exist());
  }

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

  historico(){
    this.navCtrl.push(HistoricoPage.name);
  }
}

