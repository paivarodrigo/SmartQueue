import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario';


@Injectable()
export class SessionProvider {

    constructor(public http: HttpClient,
        public storage: Storage) {}

    create(usuario: Usuario) {
        this.storage.set('usuario', usuario);
    }

    get(): Promise<any> {
        return this.storage.get('usuario');
    }

    remove() {
        this.storage.remove('usuario');
    }

    exist() {
        this.get().then(res => {
            console.log('resultado >>> ', res);
            if(res) {
                console.log('resultado IF');
                return true;
            } else {
                console.log('resultado else');
                return false;
            }
        });
    }

}

