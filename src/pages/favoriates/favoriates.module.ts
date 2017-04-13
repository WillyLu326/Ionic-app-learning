import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Favoriates } from './favoriates';

@NgModule({
  declarations: [
    Favoriates,
  ],
  imports: [
    IonicModule.forChild(Favoriates),
  ],
  exports: [
    Favoriates
  ]
})
export class FavoriatesModule {}
