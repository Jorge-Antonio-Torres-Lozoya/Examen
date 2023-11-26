import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { LoginAdminService } from './login-admin.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.scss'],
})
export class LoginAdminComponent {
  error?:string;
  constructor(private router:Router,private loginService:LoginAdminService) { }




  loginFun(form:NgForm) {
    if(!form.value){
      return
    }
    console.log(form.value);
    this.loginService.loginAdmin(form.value).subscribe((res)=>{
      console.log(res);
      this.router.navigateByUrl('/home');
    },(err)=>{
      console.log(err);
      this.error = err.error.message;
    })
  }
  navigateToPage() {
    this.router.navigateByUrl('/signup-admin');
  }


}


