import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SavingsPage } from '../pages/savings/savings';
import { BillsPage } from '../pages/bills/bills';
import { MonthlyPlannerPage } from '../pages/monthlyPlanner/monthlyPlanner';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatToolbarModule,
  MatTableModule,
  MatIconModule
} from '@angular/material';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SavingsPage,
    BillsPage,
    MonthlyPlannerPage,
    ListPage
  ],
  imports: [
    BrowserModule,
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
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
