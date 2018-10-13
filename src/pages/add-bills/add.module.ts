import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddBillsPage } from './add-bills';

@NgModule({
  declarations: [
    AddBillsPage,
  ],
  imports: [
    IonicPageModule.forChild(AddBillsPage),
  ],
})
export class AddPageModule {}
