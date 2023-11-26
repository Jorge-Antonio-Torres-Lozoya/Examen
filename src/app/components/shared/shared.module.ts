import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NavbarComponent } from "../navbar/navbar.component";
import { IonicModule } from "@ionic/angular";

@NgModule({
  declarations: [NavbarComponent],
  exports: [NavbarComponent],
  imports: [CommonModule, RouterModule,IonicModule],
})
  export class SharedModule {}
