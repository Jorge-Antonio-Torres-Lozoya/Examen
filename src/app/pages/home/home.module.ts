import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page.component';

import { HomePageRoutingModule } from './home-routing.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/components/shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
   RouterModule.forChild([{path: '', component: HomePage}]),

  ],
  declarations: [HomePage]
})
export class HomePageModule {}
