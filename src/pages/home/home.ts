import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Tutorial2Page } from '../tutorial2/tutorial2';
import { FonteHomePage } from '../fonte-home/fonte-home';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  irParaDois(){
    this.navCtrl.push(Tutorial2Page);
  }
  closeTutorial(){
    this.navCtrl.push(FonteHomePage);
  }
}
