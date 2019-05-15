import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LandPage } from './land';

@NgModule({
  declarations: [
    LandPage,
  ],
  imports: [
    IonicPageModule.forChild(LandPage),TranslateModule.forChild()
  ],
})
export class LandPageModule {}
