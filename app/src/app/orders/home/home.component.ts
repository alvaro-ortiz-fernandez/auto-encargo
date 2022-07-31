import { WorkersService } from './../workers/workers.service';
import { EmployersService } from './../employers/employers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(protected employersService: EmployersService, protected workersService: WorkersService) { }

  ngOnInit(): void {
  }

}
