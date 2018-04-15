import { Component } from "@angular/core";
import { NavController, ViewController } from "ionic-angular";

@Component({
  selector: "page-recuperar-senha-usuario",
  templateUrl: "recuperar-senha-usuario.html"
})
export class RecuperarSenhaUsuarioPage {
  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {}

  ionViewWillEnter() {
    this.viewCtrl.setBackButtonText("");
  }
}
