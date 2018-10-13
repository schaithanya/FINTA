
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditBillsPage } from './edit-bills';

@NgModule({
  declarations: [
    EditBillsPage,
  ],
  imports: [
    IonicPageModule.forChild(EditBillsPage),
  ],
})
export class AddPageModule {}
