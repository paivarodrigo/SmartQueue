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
    public modalCtrl: ModalController) {
      this._reservaService.conultarHistorico(13).subscribe(
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
    //   this.testeHistorico = [{
    //     dataReserva: '02/07/2018',
    //     quantidadePessoas: 2,
    //     mesa: 'Mesa redonda',
    //     valor: 230.90,
    //     pedidos: 'Hamburgueres, bebidas, drogas'
    //   },
    //   {
    //     dataReserva: '05/07/2018',
    //     quantidadePessoas: 2,
    //     mesa: 'Mesa com sofá',
    //     valor: 170.90,
    //     pedidos: 'Drogas, bebidas, hamburguis'
    //   }
    // ];
    }

  
  // ionViewDidLoad(){
  //   let loading = this._loadingCtrl.create
  //   ({
  //     content: 'Aguarde o carregamento do histórico...'
  //   });

  //   loading.present();

  //   this._usuarioService.historico().subscribe
  //   (
  //     (response) => {
  //       this.historico = response;

  //       loading.dismiss();
  //     },

  //     (erro: HttpErrorResponse) => {
  //       console.log(erro);

  //       loading.dismiss();

  //       this._alertCtrl.create
  //       ({
  //           title: 'Falha na conexão.',
  //           subTitle: 'Não foi possível carregar o histórico. Tente novamente mais tarde.',
  //           buttons: 
  //           [
  //             {text: 'Ok'}
  //           ]
  //       }).present();
  //     }
  //   );
  // }
 
  public openModal(){
    var data = {message: 'testando essa caralha'}
    var modalPage = this.modalCtrl.create(HistoricoModalPage.name, data); 
    modalPage.present();
  }

}

