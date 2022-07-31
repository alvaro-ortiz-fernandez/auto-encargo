import { WorkersService } from './../workers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-worker-posting',
  templateUrl: './worker-posting.component.html',
  styleUrls: ['./worker-posting.component.scss']
})
export class WorkerPostingComponent implements OnInit {

  constructor(protected workersService: WorkersService) { }

  ngOnInit(): void {
  }

}
