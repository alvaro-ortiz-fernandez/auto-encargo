import { WorkersModule } from './workers/workers.module';
import { EmployersModule } from './employers/employers.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [
    EmployersModule,
    WorkersModule
  ]
})
export class OrdersModule { }
