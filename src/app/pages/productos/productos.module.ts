import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/components/shared/shared.module';
import { RouterModule } from '@angular/router';
import { ProductosComponent } from './productos.component';



@NgModule({
  declarations: [ProductosComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild([{path: '', component: ProductosComponent}]),
  ]
})
export class ProductosModule { }
