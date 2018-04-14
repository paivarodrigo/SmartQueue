import { Component } from "@angular/core";
import { NavController, ToastController } from "ionic-angular";
import { DashboardPage } from "../dashboard/dashboard";
import { SignInPage } from "../sign-in/sign-in";
import { ForgotPasswordPage } from "../forgot-password/forgot-password";

@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  email: any;
  password: any;
  constructor(
    public navCtrl: NavController,
    private toastCtrl: ToastController
  ) {}

  login() {
    //APAGAR
    this.navCtrl.push(DashboardPage);

    // if (this.email != undefined && this.password != undefined) {
    //   if (this.email == "smart" && this.password == "123456") {
    //     console.log("login successful");
    //     this.navCtrl.push(DashboardPage);
    //   } else {
    //     this.failedLoginToast();
    //   }
    // } else {
    //   this.failedLoginToast();
    // }
  }

  failedLoginToast() {
    let toast = this.toastCtrl.create({
      message: "Email e/ou senha estão incorretos",
      duration: 3000,
      position: "bottom",
      cssClass: "toastMessage"
    });

    toast.present();
  }

  forgotPassword() {
    this.navCtrl.push(ForgotPasswordPage);
  }

  signIn() {
    this.navCtrl.push(SignInPage);
  }
}
