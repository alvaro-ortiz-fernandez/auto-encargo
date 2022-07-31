import { EmployersService } from './../employers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employer-posting',
  templateUrl: './employer-posting.component.html',
  styleUrls: ['./employer-posting.component.scss']
})
export class EmployerPostingComponent implements OnInit {

  constructor(protected employersService: EmployersService) { }

  ngOnInit(): void {
  }

}
