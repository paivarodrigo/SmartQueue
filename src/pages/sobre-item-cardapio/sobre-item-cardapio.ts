import { Produto } from './../../models/produto';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-sobre-item-cardapio',
  templateUrl: 'sobre-item-cardapio.html',
})
export class SobreItemCardapioPage {

  public produto: Produto;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.produto = navParams.get('produtoSelecionado');
  }


}
