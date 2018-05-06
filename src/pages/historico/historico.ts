import { UsuarioServiceProvider } from './../../providers/usuario-service/usuario-service';
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
    private _usuarioService: UsuarioServiceProvider,
    private _loadingCtrl: LoadingController, 
    public modalCtrl: ModalController) {}

  
  ionViewDidLoad(){
    let loading = this._loadingCtrl.create
    ({
      content: 'Aguarde o carregamento do histórico...'
    });

    loading.present();

    // this._usuarioService.historico().subscribe
    // (
    //   (carros) => {
    //     this.carros = carros;

    //     loading.dismiss();
    //   },

    //   (erro: HttpErrorResponse) => {
    //     console.log(erro);

    //     loading.dismiss();

    //     this._alertCtrl.create
    //     ({
    //         title: 'Falha na conexão.',
    //         subTitle: 'Não foi possível carregar a lista de carros. Tente novamente mais tarde.',
    //         buttons: 
    //         [
    //           {text: 'Ok'}
    //         ]
    //     }).present();
    //   }
    // );
  }
 
  public openModal(){
    var data = {message: 'testando essa caralha'}
    var modalPage = this.modalCtrl.create(HistoricoModalPage.name, data); 
    modalPage.present();
  }

}

