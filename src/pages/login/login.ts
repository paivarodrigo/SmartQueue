import { Session } from './../../models/session';
import { UsuarioServiceProvider } from './../../providers/usuario-service/usuario-service';
import { MenuPrincipalPage } from './../menu-principal/menu-principal';
import { HttpErrorResponse } from '@angular/common/http';
import { Usuario } from './../../models/usuario';
import { Component } from "@angular/core";
import { NavController, IonicPage } from "ionic-angular";
import { Toaster } from "../../assets/utils/Toaster";
import { CadastrarUsuarioPage } from "../cadastrar-usuario/cadastrar-usuario";
import { RecuperarSenhaUsuarioPage } from "../recuperar-senha-usuario/recuperar-senha-usuario";

@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {

  public usuario: Usuario;

  constructor(public navCtrl: NavController, 
    private toastCtrl: Toaster, 
    private _usuarioService: UsuarioServiceProvider,
    private _session: Session) {

    this.usuario = new Usuario;
  }
  
  entrar(){
    if(
        (this.usuario.email != undefined && this.usuario.email != "") &&
        (this.usuario.senha != undefined && this.usuario.senha != "")
    ){
      
      this._usuarioService.logar(this.usuario).subscribe(
        usuario => {
          this.usuario = usuario;
          this._session.create(this.usuario);
          this.navCtrl.push(MenuPrincipalPage.name);
        },
        (error: HttpErrorResponse) => {
          this.toastCtrl.presentSimpleToast(
            error.error,
            "bottom"
          );
        }
      );
    } else{
      this.toastCtrl.presentSimpleToast(
            "Email e/ou senha estão incorretos.",
            "bottom"
          );
    }
    this.navCtrl.push(MenuPrincipalPage.name);
    
  }

  recuperarSenhaUsuario() {
    this.navCtrl.push(RecuperarSenhaUsuarioPage.name);
  }

  cadastrarUsuario() {
    this.navCtrl.push(CadastrarUsuarioPage.name);
  }
}