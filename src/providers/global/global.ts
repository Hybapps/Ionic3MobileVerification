import { Platform, MenuController, PopoverController } from 'ionic-angular';
import { Injectable } from '@angular/core';


@Injectable()
export class GlobalProvider {

  countries=[
    {"id":"1","code":"+1","name_en":"USA","flag":'assets/imgs/usa.png'},
    {"id":"2","code":"+2","name_en":"Egypt","flag":'assets/imgs/egypt.png'}
  ];
  
  
  order_details_tab='order_summary';
  constructor( public popoverCtrl: PopoverController,public platform: Platform,public menuCtrl:MenuController) {
 
  } 
    
 
  // search Popover
  callSearch(myEvent) {
    let popover = this.popoverCtrl.create('SearchPopPage',{},{cssClass:'search_Pop'});
    popover.present({
      ev: myEvent
    });     
  } 

}     