import { UsuarioServiceProvider } from './../../providers/usuario-service/usuario-service';
import { Usuario } from './../../models/usuario';
import { Component } from "@angular/core";
import { NavController, IonicPage } from "ionic-angular";
import { Toaster } from "../../assets/utils/Toaster";
import moment from "moment";
import { CPF } from "../../assets/utils/CPF";
import { HttpErrorResponse } from '@angular/common/http';

@IonicPage()
@Component({
  selector: "page-cadastrar-usuario",
  templateUrl: "cadastrar-usuario.html"
})
export class CadastrarUsuarioPage {

  public usuario: Usuario;
  public confirmacaoSenha: any;

  constructor(
    public navCtrl: NavController,
    private _toastCtrl: Toaster,
    private _usuarioService: UsuarioServiceProvider) {
      this.usuario = new Usuario;
    }


  cadastrarUsuario() {
    if (!validarNome(this.usuario.nome)) {
      this._toastCtrl.presentSimpleToast("O campo Nome é obrigatório.", "bottom");
    } else if (!validarSobrenome(this.usuario.sobrenome)) {
      this._toastCtrl.presentSimpleToast(
        "O campo Sobrenome é obrigatório.",
        "bottom"
      );
    } else if (!validarDataDeNascimento(this.usuario.dataDeNascimento)) {
      this._toastCtrl.presentSimpleToast(
        "O campo Data de Nascimento é obrigatório.",
        "bottom"
      );
    } else if (!validarCpf(this.usuario.cpf)) {
      this._toastCtrl.presentSimpleToast("O CPF informado é inválido.", "bottom");
    } else if (!validarEmail(this.usuario.email)) {
      this._toastCtrl.presentSimpleToast(
        "O email informado é inválido.",
        "bottom"
      );
    } else if (!validarSenha(this.usuario.senha)) {
      this._toastCtrl.presentSimpleToast(
        "A senha deve ter ao menos 6 dígitos.",
        "bottom"
      );
    } else if (!validarConfirmacaoSenha(this.usuario.senha, this.confirmacaoSenha)) {
      this._toastCtrl.presentSimpleToast(
        "A senha confirmada não é igual a senha requerida.",
        "bottom"
      );
    } else {
      
      this._usuarioService.cadastrar(this.usuario).subscribe(        
        success => {

          this._toastCtrl.presentSimpleToast(
            "Cadastro efetuado com sucesso!",
            "bottom"
          );
    
        }, (error: HttpErrorResponse) => {
          this._toastCtrl.presentSimpleToast(
            error.error, 
            "bottom"
          );
        }
      );    
    }
  }
}

function validarNome(nome) {
  return nome != undefined && nome.length > 1;
}

function validarSobrenome(sobrenome) {
  return sobrenome != undefined && sobrenome.length > 1;
}

function validarDataDeNascimento(dataDeNascimento) {
  return moment(dataDeNascimento, "YYYY-MM-DD").isValid();
}

function validarCpf(cpf) {
  return CPF.isValid(cpf);
}

function validarEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validarSenha(senha) {
  return senha != undefined && senha.length >= 6;
}

function validarConfirmacaoSenha(senha, confirmacaoSenha) {
  return (
    senha != undefined &&
    confirmacaoSenha != undefined &&
    senha == confirmacaoSenha
  );
}
     