import { Component } from "@angular/core";
import { NavController, ViewController } from "ionic-angular";
import { LoginPage } from "../login/login";
import { AboutPage } from "../about/about";
import { ChangePasswordPage } from "../change-password/change-password";

@Component({
  selector: "page-settings",
  templateUrl: "settings.html"
})
export class SettingsPage {
  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {}

  ionViewWillEnter() {
    this.viewCtrl.setBackButtonText("");
  }

  changePassword() {
    this.navCtrl.push(ChangePasswordPage);
  }

  about() {
    this.navCtrl.push(AboutPage);
  }

  logout() {
    // Aqui ficará a lógica de logout, encerrar sessão etc.
    this.navCtrl.push(LoginPage);
  }
}
