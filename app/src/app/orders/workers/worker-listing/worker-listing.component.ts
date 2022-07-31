import { WorkersService } from './../workers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-worker-listing',
  templateUrl: './worker-listing.component.html',
  styleUrls: ['./worker-listing.component.scss']
})
export class WorkerListingComponent implements OnInit {

  constructor(protected workersService: WorkersService) { }

  ngOnInit(): void {
  }

}
