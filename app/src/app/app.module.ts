import { OrdersModule } from './orders/orders.module';
import { AuthModule } from './auth/auth.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    OrdersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


/*
VENTANAS:
  - HOME

  - LISTADO DE TRABAJADORES
  - DETALLE DE TRABAJADOR

  - LISTADO DE ENCARGOS
  - DETALLE DE ENCARGO

  - LOGIN
  - REGISTRO

*/