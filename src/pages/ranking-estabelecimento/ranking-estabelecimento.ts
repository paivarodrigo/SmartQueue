import { Produto } from './../../models/produto';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-ranking-estabelecimento',
  templateUrl: 'ranking-estabelecimento.html',
})
export class RankingEstabelecimentoPage {

  public produtos: Produto[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.produtos = [
      
      { id: 1, descricao: "Bolinho de Bacalhau", receita: "Bacalhau kkkk", valor: 6, foto: "assets/imgs/smartQueue_logo.png"},
      { id: 2, descricao: "Parmegiana", receita: "Sepa tem queijo, molho e um tipo de carne", valor: 23, foto: "assets/imgs/smartQueue_logo.png"},
      { id: 3, descricao: "Salada Caesar", receita: "Alface fresco diretamente da terra", valor: 16, foto: "assets/imgs/smartQueue_logo.png"},
      { id: 4, descricao: "Risoto", receita: "Frango birl", valor: 32, foto: "assets/imgs/smartQueue_logo.png"},
      { id: 5, descricao: "Lanche", receita: "No céu tem pão", valor: 8, foto: "assets/imgs/smartQueue_logo.png"}
    ];
  }

}
