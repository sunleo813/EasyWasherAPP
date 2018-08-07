import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient} from '@angular/common/http';
import { ConfigProvider } from '../../providers/config/config';

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
  public alipayURL;

  constructor(public navCtrl: NavController, public navParams: NavParams, public config: ConfigProvider, public http: HttpClient) {

     this.serverURL=config.getURL();
     this.shopID=config.getShopID();
     this.alipayURL=this.serverURL+"/Alipay?ShopID="+this.shopID;
  }

  ionViewDidLoad() {
    
    console.log('ionViewDidLoad AlipayPage');
    
    console.log(this.alipayURL);
    // this.http.get(alipayURL).subscribe(res=>{
    //   this.result=res;
    //   console.log(this.result);
    // })
        
  }

}
