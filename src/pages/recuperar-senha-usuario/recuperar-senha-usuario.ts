import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-recuperar-senha-usuario',
  templateUrl: 'recuperar-senha-usuario.html',
})
export class RecuperarSenhaUsuarioPage {

  public cpf: string;
  public email: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

      this.cpf = '';
      this.email = '';

  }
  
  salvar(){

  }
}
