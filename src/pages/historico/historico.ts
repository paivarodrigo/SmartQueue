import { ToasterProvider } from './../../providers/toaster/toaster';
import { SessionProvider } from './../../providers/session/session';
import { HttpErrorResponse } from '@angular/common/http';
import { Historico } from './../../models/historico';
import { HistoricoModalPage } from './../historico-modal/historico-modal';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ReservaServiceProvider } from '../../providers/reserva-service/reserva-service';
import { Usuario } from '../../models/usuario';


@IonicPage()
@Component({
  selector: 'page-historico',
  templateUrl: 'historico.html'
})
export class HistoricoPage {

  historicos: Historico[];

  constructor(public navCtrl: NavController, 
    private _reservaService: ReservaServiceProvider,
    private _session: SessionProvider,
    private _toastCtrl: ToasterProvider,
    private _modalCtrl: ModalController) {

      this._session.verificaUsuarioLogado();

      this._reservaService.conultarHistorico(this._session.usuarioLogado.id).subscribe(
        (response: Historico[]) => {
          this.historicos = response;
        },
        (error: HttpErrorResponse) => {
          this._toastCtrl.toastMessageBottom(error.error);
        }
      );
  }
 
  public openModal(){
    var data = {message: 'teste'}
    var modalPage = this._modalCtrl.create(HistoricoModalPage.name, data); 
    modalPage.present();
  }

}

