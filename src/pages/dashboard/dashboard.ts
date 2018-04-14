import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { SettingsPage } from "../settings/settings";
import { RequestTablePage } from "../request-table/request-table";

@Component({
  selector: "page-dashboard",
  templateUrl: "dashboard.html"
})
export class DashboardPage {
  constructor(public navCtrl: NavController) {}

  requestTable() {
    this.navCtrl.push(RequestTablePage);
  }

  settings() {
    this.navCtrl.push(SettingsPage);
  }
}
