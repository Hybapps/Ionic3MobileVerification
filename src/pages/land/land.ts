import { GlobalProvider } from './../../providers/global/global';
import { Component } from '@angular/core';
import { IonicPage, NavController, PopoverController } from 'ionic-angular';
import { FirebaseAuthentication } from '@ionic-native/firebase-authentication';

@IonicPage()
@Component({
  selector: 'page-land',
  templateUrl: 'land.html',
})
export class LandPage {
  mobileNumber; 
  selectedcountry;
  verifiId;
  constructor(public navCtrl: NavController, public global:GlobalProvider,public popoverCtrl: PopoverController,
    private firebaseAuthentication: FirebaseAuthentication) {
    this.selectedcountry=global.countries[0];
  }

  callCountries(myEvent) {
   let popover = this.popoverCtrl.create('CountriesSelectPage',{},{cssClass:'countries_select_land'});

    popover.present({
      ev: myEvent
    });

    popover.onDidDismiss(data=>{
      if(data)
        {
        console.log(data.code);
        this.selectedcountry=data;
        }
   });
  

  }
  
  sendVerification()
  {   
    let fullMobileNumber=this.selectedcountry.code+this.mobileNumber;
   
    if(this.mobileNumber)
    {
      this.firebaseAuthentication.verifyPhoneNumber(fullMobileNumber,30000).then(verificationId => {
        this.navCtrl.push('ActivationPage',
        {
        mobileNumber:this.selectedcountry.code+this.mobileNumber,
        verificationId:verificationId
        }); 
      });
 
    }  
  }
 //-------------
}
                 