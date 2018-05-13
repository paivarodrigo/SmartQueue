import { HistoricoModalPage } from './../historico-modal/historico-modal';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, LoadingController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-historico',
  templateUrl: 'historico.html'
})
export class HistoricoPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private _loadingCtrl: LoadingController, 
    public modalCtrl: ModalController) {}

  
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

