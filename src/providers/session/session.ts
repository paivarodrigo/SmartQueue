import { Observable } from 'rxjs/Observable';
import { Usuario } from './../../models/usuario';
import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';


@Injectable()
export class SessionProvider {

    usuarioLogado: Usuario;

    constructor(private _storage: Storage) {
    }

    inserirUsuario(usuario: Usuario){
        this._storage.set('usuario', usuario);
    }

    private _getUsuario(){

        let promise = this._storage
        .get('usuario')
        .then((value: Usuario) => value)

        return Observable.fromPromise(promise);
    }

    verificaUsuarioLogado(){
        this._getUsuario().subscribe(
            (value: Usuario) => {
                this.usuarioLogado = value;
            }
        )
    }

    clear(){
        this._storage.clear();
    }
    
}

