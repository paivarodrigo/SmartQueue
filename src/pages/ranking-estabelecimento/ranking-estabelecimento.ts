import { HttpErrorResponse } from '@angular/common/http';
import { ProdutoServiceProvider } from './../../providers/produto-service/produto-service';
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
  toastCtrl: any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private _produtoService: ProdutoServiceProvider) {

    this._produtoService.consultarRanking().subscribe(
      (response: Produto[]) => {
        this.produtos = response;
      },(error: HttpErrorResponse) => {
        this.toastCtrl.presentSimpleToast(
          error.error,
          "bottom"
        );
      }
    );
  }

}
