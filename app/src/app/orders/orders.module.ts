import { OrdersRoutingModule } from './orders-routing.module';
import { HomeModule } from './home/home.module';
import { WorkersModule } from './workers/workers.module';
import { EmployersModule } from './employers/employers.module';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    OrdersRoutingModule,
    HomeModule,
    EmployersModule,
    WorkersModule
  ]
})
export class OrdersModule { }
