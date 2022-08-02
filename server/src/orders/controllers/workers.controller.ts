import { WorkersService } from './../services/workers.service';
import { Controller } from '@nestjs/common';

@Controller('servicios')
export class WorkersController {
    
    constructor(private workersService: WorkersService) {}

}
