import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

@Injectable()
export class ToasterProvider {

  constructor (private _toastCtrl: ToastController) {}

  presentToast(message, position, cssclass) {
    let toast = this._toastCtrl.create({
      message: message,
      closeButtonText: "OK",
      showCloseButton: true,
      cssClass: cssclass,
      position: position
    });
    toast.present();
  }
  presentSimpleToast(message, position) {
    let toast = this._toastCtrl.create({
      message: message,
      duration: 3000,
      position: position
    });
    toast.present();
  }

}
