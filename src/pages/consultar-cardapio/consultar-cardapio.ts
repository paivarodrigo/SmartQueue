import { Produto } from './../../models/produto';
import { SobreItemCardapioPage } from './../sobre-item-cardapio/sobre-item-cardapio';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Categoria } from '../../models/categoria';

@IonicPage()
@Component({
  selector: 'page-consultar-cardapio',
  templateUrl: 'consultar-cardapio.html',
})
export class ConsultarCardapioPage {

  public categorias: Categoria[];
  public produtos: Produto[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.categorias = [
      {caracteristica: 'ENTRADAS', icone: 'nutrition'},
      {caracteristica: 'PRATO PRINCIPAL', icone: 'restaurant'},
      {caracteristica: 'BEBIDAS', icone: 'pint'},
      {caracteristica: 'SOBREMESA', icone: 'ice-cream'},
    ];

    this.produtos = [
      
      { id: 1, descricao: "Item A", receita: "Bacalhau kkkk", valor: 6, foto: "assets/imgs/smartQueue_logo.png"},
      { id: 2, descricao: "Item B", receita: "Sepa tem queijo, molho e um tipo de carne", valor: 23, foto: "assets/imgs/smartQueue_logo.png"},
      { id: 3, descricao: "Item C", receita: "Alface fresco diretamente da terra", valor: 16, foto: "assets/imgs/smartQueue_logo.png"},
      { id: 4, descricao: "Item D", receita: "Frango birl", valor: 32, foto: "assets/imgs/smartQueue_logo.png"},
      { id: 5, descricao: "Item E", receita: "No céu tem pão", valor: 8, foto: "assets/imgs/smartQueue_logo.png"}
    ];

  }

  sobreProdutoCardapio(produto: Produto){
    this.navCtrl.push(SobreItemCardapioPage.name, {
      produtoSelecionado: produto
    });
  }
  
}
