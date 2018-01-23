import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';


@IonicPage()
@Component({
  selector: 'page-buyout',
  templateUrl: 'buyout.html',
})
export class BuyoutPage implements OnInit {
  commodity:{name:string, quantity: number};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuyoutPage');
  }

  ngOnInit(){
    this.commodity = this.navParams.data;
  }

  goToHome(){
    this.navCtrl.popToRoot();
  }
}
