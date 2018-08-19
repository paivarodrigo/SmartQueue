import { SessionProvider } from './../../providers/session/session';
import { MenuPrincipalPage } from './../menu-principal/menu-principal';
import { ToasterProvider } from './../../providers/toaster/toaster';
import { UsuarioServiceProvider } from './../../providers/usuario-service/usuario-service';
import { Usuario } from './../../models/usuario';
import { Component } from "@angular/core";
import { NavController, IonicPage } from "ionic-angular";
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
    private _navCtrl: NavController,
    private _usuarioService: UsuarioServiceProvider,
    private _session: SessionProvider,
    private _toastCtrl: ToasterProvider) {
      this.usuario = {} as any;
    }


  cadastrarUsuario() {
    if (!validarNome(this.usuario.nome)) {
      this._toastCtrl.toastMessageBottom("O campo Nome é obrigatório.");

    } else if (!validarSobrenome(this.usuario.sobrenome)) {
      this._toastCtrl.toastMessageBottom("O campo Sobrenome é obrigatório.");

    } else if (!validarDataDeNascimento(this.usuario.dataDeNascimento)) {
      this._toastCtrl.toastMessageBottom("O campo Data de Nascimento é obrigatório.");

    } else if (!validarCpf(this.usuario.cpf)) {
      this._toastCtrl.toastMessageBottom("O CPF informado é inválido.");

    } else if (!validarEmail(this.usuario.email)) {
      this._toastCtrl.toastMessageBottom("O email informado é inválido.");

    } else if (!validarSenha(this.usuario.senha)) {
      this._toastCtrl.toastMessageBottom("A senha deve ter ao menos 6 dígitos.");

    } else if (!validarConfirmacaoSenha(this.usuario.senha, this.confirmacaoSenha)) {
      this._toastCtrl.toastMessageBottom("A senha confirmada não é igual a senha requerida.");

    } else {
      this.inserirUsuario();
    }
  }

  private inserirUsuario(){

    this._usuarioService.cadastrar(this.usuario).subscribe(        
      (response: Usuario) => {
        this._session.inserirUsuario(response);
        this._toastCtrl.toastMessageBottom("Cadastro efetuado com sucesso!");
        this._navCtrl.setRoot(MenuPrincipalPage.name);
      }, 
      (error: HttpErrorResponse) => {
        this._session.clear();
        this._toastCtrl.toastMessageBottom(error.error);
      }
    );
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
     