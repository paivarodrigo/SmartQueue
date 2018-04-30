import { Usuario } from './../../models/usuario';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CadastrarUsuarioServiceProvider {

  constructor(private _http: HttpClient) {}

  cadastrar(usuario: Usuario){
    var link = 'http://smartqserver.azurewebsites.net/api/usuarios/Criar';
    var jsonUsuario = JSON.stringify({Nome: usuario.nome,
                                      Sobrenome: usuario.sobrenome,
                                      DataNascimento: usuario.dataDeNascimento,
                                      Cpf: usuario.cpf,
                                      Email: usuario.email,
                                      CidadeNatal: usuario.cidadeNatal,
                                      Senha: usuario.senha});

    let headers = new HttpHeaders().set('Content-Type', 'application/json');
  
    return this._http.post(link, jsonUsuario, {headers: headers});
  }

}
