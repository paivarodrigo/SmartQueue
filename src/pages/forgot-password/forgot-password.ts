import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { LoginPage } from "../login/login";

@Component({
  selector: "page-forgot-password",
  templateUrl: "forgot-password.html"
})
export class ForgotPasswordPage {
  constructor(public navCtrl: NavController) {}
}
