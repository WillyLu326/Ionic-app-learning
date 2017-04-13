import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Library } from './library';

@NgModule({
  declarations: [
    Library,
  ],
  imports: [
    IonicModule.forChild(Library),
  ],
  exports: [
    Library
  ]
})
export class LibraryModule {}
