import { Component } from "@angular/core";
import { NavController, ViewController } from "ionic-angular";

@Component({
  selector: "page-sobre",
  templateUrl: "sobre.html"
})
export class SobrePage {
  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController
  ) {}

  ionViewWillEnter() {
    this.viewCtrl.setBackButtonText("");
  }
}