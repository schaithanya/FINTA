import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddEditSavingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-edit-savings',
  templateUrl: 'add-edit-savings.html',
})
export class AddEditSavingsPage {

  constructor(public navParams: NavParams,private view: ViewController) {
  }

  ionViewWillLoad(){
    console.log(this.navParams.get('data'));

  }

  closeAddEditPage()
  {
    this.view.dismiss();    
  }

  saveSavingInformation()
  {
    const data={
      name:'John Doe',
      occupation:'Tester'
    }

    this.view.dismiss(data);    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddEditSavingsPage');
  }

}
