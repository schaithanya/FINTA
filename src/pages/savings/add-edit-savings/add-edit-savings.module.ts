import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddEditSavingsPage } from './add-edit-savings';

@NgModule({
  declarations: [
    AddEditSavingsPage,
  ],
  imports: [
    IonicPageModule.forChild(AddEditSavingsPage),
  ],
})
export class AddEditSavingsPageModule {}
