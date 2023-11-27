import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, Router, Scroll } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ViewportScroller } from '@angular/common';
import { filter } from 'rxjs';
import { LoginAdminModule } from './pages/login-admin/login-admin.module';
import { HomePageModule } from './pages/home/home.module';
import { SignupAdminModule } from './pages/signup-admin/signup-admin.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './components/shared/shared.module';
import { ProductosModule } from './pages/productos/productos.module';
import { ClienteModule } from './pages/cliente/cliente.module';
import { VentaModule } from './pages/venta/venta.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    LoginAdminModule,
    SignupAdminModule,
    HomePageModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule,
    ProductosModule,
    ClienteModule,
    VentaModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(router: Router, viewportScroller: ViewportScroller) {
    viewportScroller.setOffset([0, 60]);
    router.events
      .pipe(filter((e: any) => e instanceof Scroll))
      .subscribe((e: Scroll) => {
        if (e.anchor) {
          let anchor = e.anchor;
          setTimeout(() =>
            //anchor navigation
            viewportScroller.scrollToAnchor(anchor)
          );
        } else if (e.position) {
          viewportScroller.scrollToPosition(e.position);
        } else {
          //forward navigation
          viewportScroller.scrollToPosition([0, 0]);
        }
      });
  }
}
