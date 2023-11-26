import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HomePageService } from './home.page.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  constructor(private homeService:HomePageService,private navCtrl:NavController) {}

  toCliente(){
  this.navCtrl.navigateForward('/cliente');
  }
  toVender(){
    this.navCtrl.navigateForward('/vender');
  }

}
