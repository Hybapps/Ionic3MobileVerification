import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component'; 

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GlobalProvider } from '../providers/global/global'; 
import { FirebaseAuthentication } from '@ionic-native/firebase-authentication';


var config = {
  backButtonText: '',  
  backButtonIcon: 'md-arrow-back',
  iconMode: 'ios',
  mode:'ios',
  modalEnter: 'modal-ios-slide-in',
  modalLeave: 'modal-ios-slide-out',
  pageTransition: 'ios',
  scrollPadding: false,  
  scrollAssist: true, 
  autoFocusAssist: false,    
};
@NgModule({
  declarations: [  
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,config), 
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GlobalProvider, 
    FirebaseAuthentication

  ] 
})
export class AppModule {}
