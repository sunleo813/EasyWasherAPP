//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ConfigProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConfigProvider {

  public serviceURL="http://localhost:3000";
  public shopID="ZUH-001";

  constructor() {
    console.log('Hello ConfigProvider Provider');
  }

  getURL(){
    return this.serviceURL;
  }

  getShopID(){
    return this.shopID;
  }
}
