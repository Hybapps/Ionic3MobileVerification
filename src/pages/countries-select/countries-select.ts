import { GlobalProvider } from './../../providers/global/global';
import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-countries-select',
  templateUrl: 'countries-select.html',
})
export class CountriesSelectPage {

  constructor(public navCtrl: NavController,public viewCtrl: ViewController,public global:GlobalProvider) {
  }


  close(item) {
    this.viewCtrl.dismiss(item);
  //  this.global.land_country=item;
  }

} 
   