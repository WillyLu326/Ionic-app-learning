import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Quotes } from './quotes';

@NgModule({
  declarations: [
    Quotes,
  ],
  imports: [
    IonicModule.forChild(Quotes),
  ],
  exports: [
    Quotes
  ]
})
export class QuotesModule {}
