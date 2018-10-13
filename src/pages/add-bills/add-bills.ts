import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Bills } from '../bills/bills';

@Component({
  selector: 'page-add-bills',
  templateUrl: 'add-bills.html',
})
export class AddBillsPage {

  data:Bills = { rowId:0, type : "Test1", amount : 100000, remainderDate : '10/10/2018', createdDate : '10/10/2018', description: "Sample 1", docPath : "TEst doc" };

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private sqlite: SQLite) {}

  saveData() {
    console.log('enter save');
    this.sqlite.create({
      name: 'ionicdb.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      console.log('enter step1');
      db.open();
      console.log('enter step2');
      db.executeSql('INSERT INTO Bills VALUES(NULL,?,?,?,?,?,?)',[this.data.type,this.data.amount,this.data.remainderDate,this.data.createdDate, this.data.description, this.data.docPath])
        .then(res => {
          console.log(res);
        })
        .catch(e => {
          console.log(e);
        });
    }).catch(e => {
      console.log(e);
    });
  }

}