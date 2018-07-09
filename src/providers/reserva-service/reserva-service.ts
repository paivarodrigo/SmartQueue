import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ReservaServiceProvider {

  private _link: any;
  private _headers: any;

  constructor(private _http: HttpClient) {
    this._link = 'http://smartqueueapi.azurewebsites.net/api/reservas/ConsultarHistorico/';
  }

  conultarHistorico(idUsuario){
    
    return this._http.get((this._link + idUsuario));
  }

}
