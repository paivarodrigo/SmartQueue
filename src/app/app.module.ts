import { RankingEstabelecimentoPage } from './../pages/ranking-estabelecimento/ranking-estabelecimento';
import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";

import { MyApp } from "./app.component";
import { Toaster } from "../assets/utils/Toaster";
import { LoginPage } from "../pages/login/login";
import { MenuPrincipalPage } from "../pages/menu-principal/menu-principal";
import { RecuperarSenhaUsuarioPage } from "../pages/recuperar-senha-usuario/recuperar-senha-usuario";
import { CadastrarUsuarioPage } from "../pages/cadastrar-usuario/cadastrar-usuario";
import { AlterarSenhaUsuarioPage } from "../pages/alterar-senha-usuario/alterar-senha-usuario";
import { ConfiguracoesPage } from "../pages/configuracoes/configuracoes";
import { SobrePage } from "../pages/sobre/sobre";
import { SolicitarReservaPage } from "../pages/solicitar-reserva/solicitar-reserva";

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    MenuPrincipalPage,
    RecuperarSenhaUsuarioPage,
    CadastrarUsuarioPage,
    AlterarSenhaUsuarioPage,
    ConfiguracoesPage,
    SobrePage,
    SolicitarReservaPage
  ],
  imports: [BrowserModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    MenuPrincipalPage,
    RecuperarSenhaUsuarioPage,
    CadastrarUsuarioPage,
    AlterarSenhaUsuarioPage,
    ConfiguracoesPage,
    SobrePage,
    SolicitarReservaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    Toaster
  ]
})
export class AppModule {}
