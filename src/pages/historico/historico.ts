import { SessionProvider } from './../../providers/session/session';
import { HttpErrorResponse } from '@angular/common/http';
import { Historico } from './../../models/historico';
import { HistoricoModalPage } from './../historico-modal/historico-modal';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, LoadingController } from 'ionic-angular';
import { ReservaServiceProvider } from '../../providers/reserva-service/reserva-service';


@IonicPage()
@Component({
  selector: 'page-historico',
  templateUrl: 'historico.html'
})
export class HistoricoPage {

  testeHistorico: Historico[];
  toastCtrl: any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private _loadingCtrl: LoadingController,
    private _reservaService: ReservaServiceProvider,
    private _session: SessionProvider,
    public modalCtrl: ModalController) {

      this._session.getUsuario();
      this._reservaService.conultarHistorico(_session.usuario.id).subscribe(
        (response: Historico[]) => {
          this.testeHistorico = response;
        },
        (error: HttpErrorResponse) => {
          this.toastCtrl.presentSimpleToast(
            error.error,
            "bottom"
          );
        }
      );
  }
 
  public openModal(){
    var data = {message: 'testando essa caralha'}
    var modalPage = this.modalCtrl.create(HistoricoModalPage.name, data); 
    modalPage.present();
  }

}

