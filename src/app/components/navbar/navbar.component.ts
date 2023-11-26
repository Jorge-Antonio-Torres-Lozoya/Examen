import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { HomePageService } from 'src/app/pages/home/home.page.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent  implements OnInit {
  admin?:any;
  adminUsb?:Subscription;
  admin_id?:string;
    constructor(private homeService:HomePageService,private navCtrl: NavController) {}
    ngOnInit(): void {
      this.admin_id=localStorage.getItem('admin_id')!;
      this.adminUsb=this.homeService.getById(this.admin_id).subscribe((res)=>{
        console.log(res);
        this.admin=res;
      });

}
goBack() {
  this.navCtrl.back();
}
}
