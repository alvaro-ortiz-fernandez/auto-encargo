import { EmployersService } from './../services/employers.service';
import { Controller } from '@nestjs/common';

@Controller('encargos')
export class EmployersController {

    constructor(private employersService: EmployersService) {}

}
