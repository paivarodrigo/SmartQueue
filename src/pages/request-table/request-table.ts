import { Component } from "@angular/core";
import { NavController, ViewController, AlertController } from "ionic-angular";
import { Toaster } from "../../assets/utils/Toaster";

@Component({
  selector: "page-request-table",
  templateUrl: "request-table.html"
})
export class RequestTablePage {
  public numberOfSeats: any;
  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public alertCtrl: AlertController,
    public toastCtrl: Toaster
  ) {
    this.numberOfSeats = 0;
  }

  ionViewWillEnter() {
    this.viewCtrl.setBackButtonText("");
  }

  increaseSeats(increase) {
    increase ? this.numberOfSeats++ : this.numberOfSeats--;
    if (this.numberOfSeats < 0) {
      this.numberOfSeats = 0;
      this.toastCtrl.presentSimpleToast(
        "Não é possível diminuir a quantidade de assentos",
        "bottom"
      );
    }
  }

  request() {
    if (this.numberOfSeats > 0) {
      // Aqui ficará a chamada da API para gerar senha e etc.
      let waitingTime = "28 minutos";

      let confirm = this.alertCtrl.create({
        title: "Confirmar Solicitação",
        message:
          "O tempo de espera estimado para " +
          this.numberOfSeats +
          (this.numberOfSeats > 1 ? " pessoas" : " pessoa") +
          " é de " +
          waitingTime +
          ". Você confirma a solicitação?",
        buttons: [
          {
            text: "Não aceito",
            handler: () => {
              console.log("Disagree clicked");
            }
          },
          {
            text: "Aceito",
            handler: () => {
              console.log("Agree clicked");
            }
          }
        ]
      });
      confirm.present();
    } else {
      this.toastCtrl.presentSimpleToast(
        "Quantidade de assentos tem que ser maior que 0",
        "bottom"
      );
    }
  }
}
