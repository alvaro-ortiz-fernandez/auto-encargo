import { Injectable } from '@angular/core';
import { Worker } from './worker.model';

@Injectable({
  providedIn: 'root'
})
export class WorkersService {

  constructor() { }

  getWorkers(): Worker[] {
    return [
      { id: 1, name: 'Servicio 1' },
      { id: 2, name: 'Servicio 2' },
      { id: 3, name: 'Servicio 3' },
      { id: 4, name: 'Servicio 4' },
      { id: 5, name: 'Servicio 5' }
    ];
  }

  getWorker(id: Number): Worker {
    return this.getWorkers()
      .find(worker => worker.id == id)!!;
  }
}
