import { MenuPrincipalPage } from './../menu-principal/menu-principal';
import { MenuReservaPage } from './../menu-reserva/menu-reserva';
import { Component } from "@angular/core";
import { NavController, AlertController, IonicPage } from "ionic-angular";
import { Toaster } from "../../assets/utils/Toaster";

@IonicPage()
@Component({
  selector: "page-solicitar-reserva",
  templateUrl: "solicitar-reserva.html"
})
export class SolicitarReservaPage {
  public numeroDeAssentos: any;
  public tempoEstimado: string;
  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public toastCtrl: Toaster
  ) {
    this.numeroDeAssentos = 0;
  }


  incrementarAssentos(incrementar) {
    incrementar ? this.numeroDeAssentos++ : this.numeroDeAssentos--;
    if (this.numeroDeAssentos < 0) {
      this.numeroDeAssentos = 0;
      this.toastCtrl.presentSimpleToast(
        "Não é possível diminuir a quantidade de assentos",
        "bottom"
      );
    }
  }

  solicitarReserva() {
    if (this.numeroDeAssentos > 0) {
      // Aqui ficará a chamada da API para gerar senha e etc.
      this.tempoEstimado = "28 minutos";

      let confirmacao = this.alertCtrl.create({
        title: "Confirmar Solicitação",
        message:
          "O tempo de espera estimado para " +
          this.numeroDeAssentos +
          (this.numeroDeAssentos > 1 ? " pessoas" : " pessoa") +
          " é de " +
          this.tempoEstimado +
          ". Você confirma a solicitação?",
        buttons: [
          {
            text: "Não aceito",
            handler: () => {
              this.navCtrl.push(MenuPrincipalPage.name);
            }
          },
          {
            text: "Aceito",
            handler: () => {
              this.navCtrl.push(MenuReservaPage.name, {
                tempoEstimado: this.tempoEstimado
              });
            }
          }
        ]
      });
      confirmacao.present();
    } else {
      this.toastCtrl.presentSimpleToast(
        "Quantidade de assentos tem que ser maior que 0",
        "bottom"
      );
    }
  }
}