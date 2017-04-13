import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { FavoriatesPage } from './favoriates-page';

@NgModule({
  declarations: [
    FavoriatesPage,
  ],
  imports: [
    IonicModule.forChild(FavoriatesPage),
  ],
  exports: [
    FavoriatesPage
  ]
})
export class FavoriatesPageModule {}
