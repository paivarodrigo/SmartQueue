import { Categoria } from './../../models/categoria';
import { Produto } from './../../models/produto';
import { HttpErrorResponse } from '@angular/common/http';
import { ProdutoServiceProvider } from './../../providers/produto-service/produto-service';
import { SobreItemCardapioPage } from './../sobre-item-cardapio/sobre-item-cardapio';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-consultar-cardapio',
  templateUrl: 'consultar-cardapio.html',
})
export class ConsultarCardapioPage {

  public categorias: Categoria[];
  public produtos: Produto[];
  // public categoriaSelecionada: Categoria;
  private _listaTodosProdutos: Produto[];
  private _toastCtrl: any;

  constructor(public navCtrl: NavController, 
  public navParams: NavParams,
  private _produtoService: ProdutoServiceProvider) {

    this._produtoService.listarCategorias().subscribe(
      (response: Categoria[]) => {
        this.categorias = response['categorias'];
      },(error: HttpErrorResponse) => {
        this._toastCtrl.presentSimpleToast(
          error.error,
          "bottom"
        );
      }
    );

    this._produtoService.listarProdutos().subscribe(
      (response: Produto[]) => {
        this._listaTodosProdutos = response['produtos'];
      },(error: HttpErrorResponse) => {
        this._toastCtrl.presentSimpleToast(
          error.error,
          "bottom"
        );
      }
    );
    // this.categoriaSelecionada.caracteristica = '';
  }
  

  carregaProdutos(categoria: Categoria){
    this.produtos = this._listaTodosProdutos.filter(produto => produto.categoriaId === categoria.id)
    // this.categoriaSelecionada = categoria;
  }  

  sobreProdutoCardapio(produto: Produto){
    this.navCtrl.push(SobreItemCardapioPage.name, {
      produtoSelecionado: produto
    });
  }
  
}
