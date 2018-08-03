import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlipayPage } from '../../pages/alipay/alipay';
import { WechatPage } from '../wechat/wechat';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goAlipayPage(){
    this.navCtrl.push(AlipayPage);
  }

  goWechatPayPage(){
    this.navCtrl.push(WechatPage);
  }
}
