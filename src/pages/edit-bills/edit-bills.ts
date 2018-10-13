import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Bills } from '../bills/bills';

@Component({
  selector: 'page-edit-bills',
  templateUrl: 'edit-bills.html',
})
export class EditBillsPage {

  data:Bills = { rowId: 0, type : "Test1", amount : 100000, remainderDate : "Date1", createdDate : "Date2", description: "Sample 1", docPath : "TEst doc" };

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private sqlite: SQLite) {
      this.getCurrentData(navParams.get("rowid"));
  }

  getCurrentData(rowid) {
    this.sqlite.create({
      name: 'ionicdb.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('SELECT * FROM Bills WHERE rowid=?', [rowid])
        .then(res => {
          if(res.rows.length > 0) {
            var item = res.rows.item(0)
            this.data.rowId = item.rowid;
            this.data.type = item.type;
            this.data.createdDate = item.createdDate;
            this.data.remainderDate = item.remainderDate;
            this.data.amount = item.amount;
            this.data.description = item.description;
            this.data.docPath = item.docPath;
          }
        })
        .catch(e => {
          console.log(e);
        });
    }).catch(e => {
      console.log(e);
    });
  }

  updateData() {
    this.sqlite.create({
      name: 'ionicdb.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('UPDATE Bills SET rowId = ?, type=?,amount=?,remainderDate=?,createdDate=?,description=?,docPath=? WHERE rowid=?',[this.data.rowId,this.data.type,this.data.amount,this.data.remainderDate,this.data.createdDate,this.data.description,this.data.docPath])
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