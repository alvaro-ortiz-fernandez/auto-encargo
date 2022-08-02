import { WorkersController } from './controllers/workers.controller';
import { EmployersController } from './controllers/employers.controller';
import { Module } from '@nestjs/common';
import { WorkersService } from './services/workers.service';
import { EmployersService } from './services/employers.service';

@Module({
  controllers: [WorkersController, EmployersController],
  providers: [WorkersService, EmployersService]
})
export class OrdersModule {}
