import { Usuario } from './../../models/usuario';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UsuarioServiceProvider {

  private _link: any;
  private _headers: any;

  constructor(private _http: HttpClient) {
    this._link = 'http://smartqueueapi.azurewebsites.net/api/usuarios/';
    this._headers = new HttpHeaders().set('Content-Type', 'application/json');
  }

  jsonUsuario(usuario: Usuario){

    var json = JSON.stringify({Nome: usuario.nome,
      Sobrenome: usuario.sobrenome,
      DataNascimento: usuario.dataDeNascimento,
      Cpf: usuario.cpf,
      Email: usuario.email,
      CidadeNatal: usuario.cidadeNatal,
      Senha: usuario.senha});
    
    return json;
  }

  cadastrar(usuario: Usuario){
    return this._http.post((this._link + 'CadastrarCliente'), this.jsonUsuario(usuario), {headers: this._headers});
  }

  logar(usuario: Usuario){
    return this._http.post<Usuario>((this._link + 'Logar'), this.jsonUsuario(usuario), {headers: this._headers});
  }

  alterarSenha(usuario: Usuario, novaSenha){

    var json = JSON.stringify({
      UsuarioAtual: {
        Id: usuario.id,
        Nome: usuario.nome,
        Sobrenome: usuario.sobrenome,
        DataNascimento: usuario.dataDeNascimento,
        Cpf: usuario.cpf,
        Email: usuario.email,
        CidadeNatal: usuario.cidadeNatal,
        Senha: usuario.senha},
      NovaSenha: novaSenha
    });
    
    return this._http.post<Usuario>((this._link + 'AlterarSenha'), json, {headers: this._headers})
  }

  sair(usuario: Usuario){
    return this._http.post<Usuario>((this._link + 'Sair'), this.jsonUsuario(usuario), {headers: this._headers});
  }

}
