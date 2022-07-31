import { WorkersService } from './../../workers.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Worker } from '../../worker.model';

@Component({
  selector: 'app-worker-detail',
  templateUrl: './worker-detail.component.html',
  styleUrls: ['./worker-detail.component.scss']
})
export class WorkerDetailComponent implements OnInit {

  protected worker?: Worker;

  constructor(private route: ActivatedRoute, protected workersService: WorkersService) { }

  ngOnInit(): void {
    this.worker = this.workersService.getWorker(this.route.snapshot.params['id']);
  }

}
