import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-historico-modal',
  templateUrl: 'historico-modal.html',
})
export class HistoricoModalPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController) {
  }

  public closeModal(){
    this.viewCtrl.dismiss();
  }

}
