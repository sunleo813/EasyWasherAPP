import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ConfigProvider } from '../../providers/config/config';
import { DatePipe } from '@angular/common';

/**
 * Generated class for the AlipayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alipay',
  templateUrl: 'alipay.html',
})
export class AlipayPage {

  public serverURL;
  public shopID;
  public dateTime: Date;
  public alipayURL;
  public transID;
  public amount;
  



  constructor(public navCtrl: NavController, public navParams: NavParams, public config: ConfigProvider, public http: HttpClient, private datePipe: DatePipe) {

    this.serverURL = config.getURL();
    this.shopID = config.getShopID();
    this.amount=config.getPrice();
    this.dateTime=new Date();
    this.transID=this.shopID+'-'+this.datePipe.transform(this.dateTime,'yyyyMMddHHmmss')
    this.alipayURL = this.serverURL + "/Alipay?TransID=" + this.transID+"&Amount="+this.amount;
  }

  ionViewDidLoad() {
    console.log('Alipay page loaded.')

  }

  ionViewDidEnter() {
    setTimeout(() => {

    }, 3000);
  }

}

