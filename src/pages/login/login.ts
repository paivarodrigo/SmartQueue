import { ToasterProvider } from './../../providers/toaster/toaster';
import { SessionProvider } from './../../providers/session/session';
import { UsuarioServiceProvider } from './../../providers/usuario-service/usuario-service';
import { MenuPrincipalPage } from './../menu-principal/menu-principal';
import { HttpErrorResponse } from '@angular/common/http';
import { Usuario } from './../../models/usuario';
import { Component } from "@angular/core";
import { NavController, IonicPage } from "ionic-angular";
import { CadastrarUsuarioPage } from "../cadastrar-usuario/cadastrar-usuario";
import { RecuperarSenhaUsuarioPage } from "../recuperar-senha-usuario/recuperar-senha-usuario";

@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {

  public usuario: Usuario;

  constructor(private _navCtrl: NavController,
  private _usuarioService: UsuarioServiceProvider,
  private _session: SessionProvider,
  private _toastCtrl: ToasterProvider){
    this.usuario = {} as any;
  }

  ionViewDidLoad(){
    this._session.verificaUsuarioLogado();
    if(this._session.usuarioLogado != undefined){
      if(this._session.usuarioLogado.id != undefined && this._session.usuarioLogado.id != 0){
        this._navCtrl.setRoot(MenuPrincipalPage.name);
      }
    } 
  }
  
  entrar(){

    if((this.usuario.email != undefined && this.usuario.email != "") &&
      (this.usuario.senha != undefined && this.usuario.senha != "")){

        this._usuarioService.logar(this.usuario).subscribe(
          (response: Usuario) => {
            this._session.inserirUsuario(response);
            this._navCtrl.setRoot(MenuPrincipalPage.name);
          },
          (error: HttpErrorResponse) => {
            this._toastCtrl.toastMessageBottom(error.error);
          }
        );
    } 
    else{
      this._session.clear();
      this._toastCtrl.toastMessageBottom("Email e/ou senha estão incorretos."); 
    }  
  }

  recuperarSenhaUsuario() {
    this._navCtrl.push(RecuperarSenhaUsuarioPage.name);
  }

  cadastrarUsuario() {
    this._navCtrl.push(CadastrarUsuarioPage.name);
  }
}