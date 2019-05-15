import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CountriesSelectPage } from './countries-select';

@NgModule({
  declarations: [
    CountriesSelectPage,
  ],
  imports: [
    IonicPageModule.forChild(CountriesSelectPage),
  ],
})
export class CountriesSelectPageModule {}
