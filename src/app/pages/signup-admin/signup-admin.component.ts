import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignupAdminService } from './signup-admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-admin',
  templateUrl: './signup-admin.component.html',
  styleUrls: ['./signup-admin.component.scss'],
})
export class SignupAdminComponent   {

  constructor(private signupService:SignupAdminService,private router:Router) { }


  signUpFun(form:NgForm){
    if(!form.value){

    }
this.signupService.signup(form.value).subscribe((res)=>{
  console.log(res);
  this.router.navigateByUrl('/login-admin');

});

  }
}
