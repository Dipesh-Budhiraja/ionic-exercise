import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BuyoutPage } from '../buyout/buyout';

@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html',
})
export class ShopPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToBuyout(commodity: {name:string, quantity:number}){
    this.navCtrl.push(BuyoutPage, commodity);
  }
}
