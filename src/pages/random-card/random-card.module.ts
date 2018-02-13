import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RandomCardPage } from './random-card';

@NgModule({
  declarations: [
    RandomCardPage,
  ],
  imports: [
    IonicPageModule.forChild(RandomCardPage),
  ],
})
export class RandomCardPageModule {}
