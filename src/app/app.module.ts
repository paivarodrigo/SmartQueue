import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from "./app.component";
import { Toaster } from "../assets/utils/Toaster";
import { CadastrarUsuarioServiceProvider } from '../providers/cadastrar-usuario-service/cadastrar-usuario-service';
import { LoginServiceProvider } from '../providers/login-service/login-service';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [BrowserModule, IonicModule.forRoot(MyApp), HttpClientModule],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    Toaster,
    CadastrarUsuarioServiceProvider,
    LoginServiceProvider
  ]
})
export class AppModule {}
