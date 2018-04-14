import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";

import { MyApp } from "./app.component";
import { Toaster } from "../assets/utils/Toaster";
import { LoginPage } from "../pages/login/login";
import { DashboardPage } from "../pages/dashboard/dashboard";
import { ForgotPasswordPage } from "../pages/forgot-password/forgot-password";
import { SignInPage } from "../pages/sign-in/sign-in";
import { ChangePasswordPage } from "../pages/change-password/change-password";
import { SettingsPage } from "../pages/settings/settings";
import { AboutPage } from "../pages/about/about";
import { RequestTablePage } from "../pages/request-table/request-table";

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    DashboardPage,
    ForgotPasswordPage,
    SignInPage,
    ChangePasswordPage,
    SettingsPage,
    AboutPage,
    RequestTablePage
  ],
  imports: [BrowserModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    DashboardPage,
    ForgotPasswordPage,
    SignInPage,
    ChangePasswordPage,
    SettingsPage,
    AboutPage,
    RequestTablePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    Toaster
  ]
})
export class AppModule {}
