import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ClienteComponent } from './cliente.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/components/shared/shared.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ClienteComponent],
  imports: [
    CommonModule,
    IonicModule,
    SharedModule,
    FormsModule,
    RouterModule.forChild([{path: '', component: ClienteComponent}]),
  ]
})
export class ClienteModule { }
