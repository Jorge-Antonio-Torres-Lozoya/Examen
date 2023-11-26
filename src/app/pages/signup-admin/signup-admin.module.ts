import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SignupAdminComponent } from './signup-admin.component';



@NgModule({
  declarations: [SignupAdminComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RouterModule.forChild([{path: '', component: SignupAdminComponent}]),
  ]
})
export class SignupAdminModule { }
