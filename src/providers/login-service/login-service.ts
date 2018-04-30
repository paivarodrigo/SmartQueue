import { Usuario } from './../../models/usuario';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginServiceProvider {

  constructor(private _http: HttpClient) {}

  logar(usuario: Usuario){

    var link = 'http://smartqserver.azurewebsites.net/api/usuarios/logar';
    var jsonLogin = JSON.stringify({
      Email: usuario.email,
      Senha: usuario.senha
    });

    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.post(link, jsonLogin, {headers: headers});

  }

}
