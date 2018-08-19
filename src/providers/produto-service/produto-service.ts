import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ProdutoServiceProvider {

  private _link: any;
  constructor(private _http: HttpClient) {
    this._link = 'http://smartqueueapi.azurewebsites.net/api/produtos/'
  }

  consultarRanking(){
    return this._http.get((this._link + 'ConsultarRanking'));
  }

  consultarCardapio(){
    return this._http.get((this._link + 'ConsultarCardapio'));
  }

  listarProdutos(){
    return this._http.get((this._link + 'listarprodutos'))
  }

  listarCategorias(){
    return this._http.get((this._link + 'listarcategorias'))
  }

}
