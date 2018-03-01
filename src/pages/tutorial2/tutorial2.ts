import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Tutorial3Page } from '../tutorial3/tutorial3';
import { FonteHomePage } from '../fonte-home/fonte-home';

/**
 * Generated class for the Tutorial2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tutorial2',
  templateUrl: 'tutorial2.html',
})
export class Tutorial2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tutorial2Page');
  }

  irParaTres(){
    this.navCtrl.push(Tutorial3Page);
  }
  closeTutorial(){
   this.navCtrl.push(FonteHomePage);
  }
}
