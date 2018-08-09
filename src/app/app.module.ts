import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AlipayPage } from '../pages/alipay/alipay';
import { WechatPage } from '../pages/wechat/wechat';
import { RunPage } from '../pages/run/run';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ConfigProvider } from '../providers/config/config';
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AlipayPage,
    WechatPage,
    RunPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AlipayPage,
    WechatPage,
    RunPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DatePipe,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConfigProvider
  ]
})
export class AppModule {}
