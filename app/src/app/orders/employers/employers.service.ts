import { Employer } from './employer.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployersService {

  constructor() { }

  getEmployers(): Employer[] {
    return [
      { id: 1, name: 'Encargo 1' },
      { id: 2, name: 'Encargo 2' },
      { id: 3, name: 'Encargo 3' },
      { id: 4, name: 'Encargo 4' },
      { id: 5, name: 'Encargo 5' }
    ];
  }

  getEmployer(id: Number): Employer {
    return this.getEmployers()
      .find(employer => employer.id == id)!!;
  }
}
