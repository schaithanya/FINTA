import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { AddBillsPage } from '../add-bills/add-bills';
import { EditBillsPage } from '../edit-bills/edit-bills';

@Component({
  selector: 'page-bills',
  templateUrl: 'bills.html'
})
export class BillsPage {

  constructor(public navCtrl: NavController, private sqlite: SQLite) {
  }

  ionViewDidLoad() {
    this.getData();
  }
  
  ionViewWillEnter() {
    this.getData();
  }
  
  billData:Bills[] = [];
  
  getData() {
    console.log("Enter");
    this.sqlite.create({
      name: 'ionicdb.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.open();
      db.executeSql('CREATE TABLE IF NOT EXISTS Bills(rowid INTEGER PRIMARY KEY, type TEXT, amount INT, remainderDate TEXT, createdDate TEXT, description TEXT, docPath TEXT)')
      .then(res => console.log('DB created'))
      .catch(e => console.log(e));
      db.executeSql('SELECT * FROM Bills',)
      .then(res => {
        for(var i=0; i < res.rows.length; i++) {
          var item = res.rows.item(i);
          this.billData.push({rowId:item.rowId,type:item.type, amount:item.amount, remainderDate : item.remainderDate, createdDate : item.createdDate, description : item.description, docPath : item.docPath})
        }
      })
      .catch(e => console.log(e));
    }).catch(e => console.log(e));
  }
  
  addData() {
    this.navCtrl.push(AddBillsPage);
  }
  
  editData(rowid) {
    this.navCtrl.push(EditBillsPage, {
      rowid:rowid
    });
  }
  
  deleteData(rowid) {
    this.sqlite.create({
      name: 'ionicdb.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('DELETE FROM Bills WHERE rowid=?', [rowid])
      .then(res => {
        console.log(res);
        this.getData();
      })
      .catch(e => console.log(e));
    }).catch(e => console.log(e));
  }
}

export interface Bills {
  rowId:number;
  type: string;
  amount: number;
  remainderDate: string;
  createdDate: string;
  description: string;
  docPath: string;
}
