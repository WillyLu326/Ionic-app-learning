import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Quote } from './quote';

@NgModule({
  declarations: [
    Quote,
  ],
  imports: [
    IonicModule.forChild(Quote),
  ],
  exports: [
    Quote
  ]
})
export class QuoteModule {}
