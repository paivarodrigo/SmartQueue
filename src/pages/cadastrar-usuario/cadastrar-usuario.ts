import { Component } from "@angular/core";
import { NavController, ViewController } from "ionic-angular";
import { Toaster } from "../../assets/utils/Toaster";
import moment from "moment";
import { CPF } from "../../assets/utils/CPF";

@Component({
  selector: "page-cadastrar-usuario",
  templateUrl: "cadastrar-usuario.html"
})
export class CadastrarUsuarioPage {
  nome: any;
  sobrenome: any;
  dataDeNascimento: any;
  cpf: any;
  email: any;
  cidadeNatal: any;
  senha: any;
  confirmacaoSenha: any;
  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    private toastCtrl: Toaster
  ) {}

  ionViewWillEnter() {
    this.viewCtrl.setBackButtonText("");
  }

  cadastrarUsuario() {
    if (!validarNome(this.nome)) {
      this.toastCtrl.presentSimpleToast("O campo Nome é obrigatório", "bottom");
    } else if (!validarSobrenome(this.sobrenome)) {
      this.toastCtrl.presentSimpleToast(
        "O campo Sobrenome é obrigatório",
        "bottom"
      );
    } else if (!validarDataDeNascimento(this.dataDeNascimento)) {
      this.toastCtrl.presentSimpleToast(
        "O campo Data de Nascimento é obrigatório",
        "bottom"
      );
    } else if (!validarCpf(this.cpf)) {
      this.toastCtrl.presentSimpleToast("O CPF informado é inválido", "bottom");
    } else if (!validarEmail(this.email)) {
      this.toastCtrl.presentSimpleToast(
        "O email informado é inválido",
        "bottom"
      );
    } else if (!validarSenha(this.senha)) {
      this.toastCtrl.presentSimpleToast(
        "A senha deve ter ao menos 6 dígitos",
        "bottom"
      );
    } else if (!validarConfirmacaoSenha(this.senha, this.confirmacaoSenha)) {
      this.toastCtrl.presentSimpleToast(
        "A senha confirmada não é igual a senha requerida",
        "bottom"
      );
    } else {
      // TODO: Aqui ficará toda a lógica para cadastrar o usuário, chamadas de API e etc...
      this.toastCtrl.presentSimpleToast(
        "Cadastro efetuado com sucesso",
        "bottom"
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
