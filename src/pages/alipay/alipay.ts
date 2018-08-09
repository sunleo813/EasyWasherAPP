import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { ConfigProvider } from '../../providers/config/config';
import { DatePipe } from '@angular/common';
import { HomePage } from '../home/home';
import { RunPage } from '../run/run';

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

  private serverURL;
  private shopID;
  private dateTime: Date;
  private alipayURL;
  private transID;
  private amount;
  private counter = 0;




  constructor(public navCtrl: NavController, public navParams: NavParams, public config: ConfigProvider, private http: Http, private datePipe: DatePipe) {

    this.serverURL = config.getURL();
    this.shopID = config.getShopID();
    this.amount = config.getPrice();
    this.dateTime = new Date();
    this.transID = this.shopID + '-' + this.datePipe.transform(this.dateTime, 'yyyyMMddHHmmss')
    this.alipayURL = this.serverURL + "/Alipay?TransID=" + this.transID + "&Amount=" + this.amount;
  }

  ionViewDidLoad() {
    console.log('Alipay page loaded.')

  }

  ionViewDidEnter() {

     this.counter++;
    // let url = this.serverURL + "/payment_status?TransID=" + this.transID;
    // console.log("ionViewDidEnter-payment_status url: " + url);
    // this.http.get(url).subscribe((value) => {
    //   console.log("ionViewDidEnter-payment_status result: ", value);

      let interval = setInterval(() => {
        this.counter++;
        let url = this.serverURL + "/payment_status?TransID=" + this.transID;
//        console.log("serverURL: " + this.serverURL);
//        console.log("ionViewDidEnter-payment_status url: " + url);
        this.http.get(url).subscribe((data)=>{
          console.log("alipay.ts-ionViewDidEnter data: "+data['_body']);
          if(data['_body']==="success"){
            clearInterval(interval);
            console.log('Start Washer Maching.....')
            this.navCtrl.push(RunPage);
          }
          else{
            this.counter++;
            if(this.counter>5){
              clearInterval(interval);
              this.counter=0;
              this.navCtrl.push(HomePage);
            }

          }

      })}, 15000);
  //   })
  }
}

