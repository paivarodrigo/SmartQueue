import { Usuario } from './../../models/usuario';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class SessionProvider {

    public usuario: Usuario;

    constructor(public http: HttpClient,
        private _storage: Storage) {
            this.usuario = new Usuario;
            this.getUsuario();
    }

    create(usuario: Usuario) {
        this._storage.set('usuario', usuario);
    }

    remove() {
        this._storage.remove('usuario');
    }

    get(): Promise<any>{
        return this._storage.get('usuario');
    }

    getUsuario() {
        
        this.get().then((res: Usuario) => {
            this.usuario = res;
          }); 
    }

    // exist(): boolean {

    //     let retorno: boolean;

    //     this.get().then((res:Usuario) => {
    //         if(res) {
    //             retorno = true;
    //         } else {
    //             retorno = false;
    //         }
    //     });

    //     return retorno;
    // }

}

