import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DetailPage } from '../pages/detail/detail';
//----
import { AccountPage } from '../pages/account/account';
import { AboutusPage } from '../pages/aboutus/aboutus';
import { ListPage } from '../pages/list/list';
import { TabsPage } from '../pages/tabs/tabs';
import { RandomCardPage } from '../pages/random-card/random-card';
//----

// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import { UseCardPage } from '../pages/use-card/use-card';
 
 
// AF2 Settings
export const firebaseConfig = {
  apiKey: "AIzaSyDeOXj1j7WLf5RllG8v_zmMKxieT6-1MVo",
  authDomain: "hunsacards.firebaseapp.com",
  databaseURL: "https://hunsacards.firebaseio.com",
  projectId: "hunsacards",
  storageBucket: "hunsacards.appspot.com",
  messagingSenderId: "600888776822"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetailPage,
    AccountPage,
    AboutusPage,
    ListPage,
    TabsPage,
    RandomCardPage,
    UseCardPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetailPage,
    AccountPage,
    AboutusPage,
    ListPage,
    TabsPage,
    RandomCardPage,
    UseCardPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
