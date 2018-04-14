import { Component } from "@angular/core";
import { NavController, ViewController } from "ionic-angular";
import { Toaster } from "../../assets/utils/Toaster";
import moment from "moment";
import { CPF } from "../../assets/utils/CPF";

@Component({
  selector: "page-sign-in",
  templateUrl: "sign-in.html"
})
export class SignInPage {
  firstName: any;
  lastName: any;
  birthDate: any;
  cpf: any;
  email: any;
  homeTown: any;
  password: any;
  confirmPassword: any;
  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    private toastCtrl: Toaster
  ) {}

  ionViewWillEnter() {
    this.viewCtrl.setBackButtonText("");
  }

  register() {
    if (!validateFirstName(this.firstName)) {
      this.toastCtrl.presentSimpleToast("O campo Nome é obrigatório", "bottom");
    } else if (!validateLastName(this.lastName)) {
      this.toastCtrl.presentSimpleToast(
        "O campo Sobrenome é obrigatório",
        "bottom"
      );
    } else if (!validateBirthDate(this.birthDate)) {
      this.toastCtrl.presentSimpleToast(
        "O campo Data de Nascimento é obrigatório",
        "bottom"
      );
    } else if (!validateCpf(this.cpf)) {
      this.toastCtrl.presentSimpleToast("O CPF informado é inválido", "bottom");
    } else if (!validateEmail(this.email)) {
      this.toastCtrl.presentSimpleToast(
        "O email informado é inválido",
        "bottom"
      );
    } else if (!validatePassword(this.password)) {
      this.toastCtrl.presentSimpleToast(
        "A senha deve ter ao menos 6 dígitos",
        "bottom"
      );
    } else if (!validateConfirmPassword(this.password, this.confirmPassword)) {
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

function validateFirstName(firstName) {
  return firstName != undefined && firstName.length > 1;
}

function validateLastName(lastName) {
  return lastName != undefined && lastName.length > 1;
}

function validateBirthDate(birthDate) {
  return moment(birthDate, "YYYY-MM-DD").isValid();
}

function validateCpf(cpf) {
  return CPF.isValid(cpf);
}

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validatePassword(password) {
  return password != undefined && password.length >= 6;
}

function validateConfirmPassword(password, confirmPassword) {
  return (
    password != undefined &&
    confirmPassword != undefined &&
    password == confirmPassword
  );
}
