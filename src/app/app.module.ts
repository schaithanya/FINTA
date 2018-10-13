import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SavingsPage } from '../pages/savings/savings';
import { BillsPage } from '../pages/bills/bills';
import { MonthlyPlannerPage } from '../pages/monthlyPlanner/monthlyPlanner';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SQLite} from '@ionic-native/sqlite';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatToolbarModule,
  MatTableModule,
  MatIconModule
} from '@angular/material';
import { AddBillsPage } from '../pages/add-bills/add-bills';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SavingsPage,
    BillsPage,
    MonthlyPlannerPage,
    ListPage,
    AddBillsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTableModule,
    MatIconModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SavingsPage,
    BillsPage,
    MonthlyPlannerPage,
    ListPage,
    AddBillsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SQLite
  ]
})
export class AppModule {}
