import { MenuPrincipalPage } from './../menu-principal/menu-principal';
import { HttpErrorResponse } from '@angular/common/http';
import { LoginServiceProvider } from './../../providers/login-service/login-service';
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

  constructor(public navCtrl: NavController, private toastCtrl: Toaster, private _usuarioService: LoginServiceProvider) {
    this.usuario = new Usuario;
  }
  
  entrar(){
    if(
        (this.usuario.email != undefined && this.usuario.email != "") &&
        (this.usuario.senha != undefined && this.usuario.senha != "")
    ){
      
      this._usuarioService.logar(this.usuario).subscribe(
        success => {
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
    
  }

  recuperarSenhaUsuario() {
    this.navCtrl.push(RecuperarSenhaUsuarioPage.name);
  }

  cadastrarUsuario() {
    this.navCtrl.push(CadastrarUsuarioPage.name);
  }
}