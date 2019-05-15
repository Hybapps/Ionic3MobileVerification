import { Component ,ViewChild } from '@angular/core';
import { IonicPage, NavController ,NavParams,ToastController} from 'ionic-angular';
import { FirebaseAuthentication } from '@ionic-native/firebase-authentication';

@IonicPage()
@Component({
  selector: 'page-activation',
  templateUrl: 'activation.html',
})

export class ActivationPage {
  mobileNumber:any;
  verificationId;
  code =Array();
  started;
  
  @ViewChild('codesInpunt0') codesInpunt0;
  @ViewChild('codesInpunt1') codesInpunt1;
  @ViewChild('codesInpunt2') codesInpunt2;
  @ViewChild('codesInpunt3') codesInpunt3;
  @ViewChild('codesInpunt4') codesInpunt4;
  @ViewChild('codesInpunt5') codesInpunt5;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private firebaseAuthentication: FirebaseAuthentication,public toastCtrl: ToastController) {
    this.mobileNumber   = navParams.get('mobileNumber');
    this.verificationId = navParams.get('verificationId');
    this.started=0;

  }
  ngAfterViewChecked() 
  { 
    if(!this.started) this.codesInpunt0.setFocus();  
  }

  changeFocus(inputToFocus)
  {
    this.started=1;   
    switch (inputToFocus)
    {
      case 1:
      this.codesInpunt1.setFocus();   
      break;

      case 2:
      this.codesInpunt2.setFocus();   
      break;

      case 3:    
      this.codesInpunt3.setFocus();   
      break;

      case 4:
      this.codesInpunt4.setFocus();   
      break;

      case 5:
      this.codesInpunt5.setFocus();   
      break;
      
    }

  }
  activate(){
    let enteredCode=this.code[0]+this.code[1]+this.code[2]+this.code[3]+this.code[4]+this.code[5];
    if(enteredCode.length==6)
      {
        console.log(enteredCode);

        console.log("veificationCode is"+this.verificationId);
        this.firebaseAuthentication.signInWithVerificationId(this.verificationId, enteredCode).then((userInfo : any )=>{ 
          // user verified
        console.log('User Phone Veified');
        this.navCtrl.setRoot('ThanksPage');

        } ).catch((error: any) => 
            {
            console.error(error);
              let toast = this.toastCtrl.create({
                message: "Invalid verfication code",
                duration: 3000,
                position: 'bottom'
              });
          
              toast.onDidDismiss(() => {
                console.log('Dismissed toast');
              });
          
              toast.present();
            
            }
          );

      }
    else
      console.log("missing code");

  }
}
 