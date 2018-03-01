import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Tutorial4Page } from '../tutorial4/tutorial4';
import { FonteHomePage } from '../fonte-home/fonte-home';

/**
 * Generated class for the Tutorial3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tutorial3',
  templateUrl: 'tutorial3.html',
})
export class Tutorial3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tutorial3Page');
  }

  irParaQuatro(){
    this.navCtrl.push(Tutorial4Page);
  }
  closeTutorial(){
    this.navCtrl.push(FonteHomePage);
  }
}
