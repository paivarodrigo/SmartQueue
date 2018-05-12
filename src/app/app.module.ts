import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from "./app.component";
import { ToasterProvider } from '../providers/toaster/toaster';
import { SessionProvider } from '../providers/session/session';
import { UsuarioServiceProvider } from '../providers/usuario-service/usuario-service';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(MyApp), 
    IonicStorageModule.forRoot(),
    HttpClientModule  
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ToasterProvider,
    SessionProvider,
    UsuarioServiceProvider
  ]
})
export class AppModule {}
