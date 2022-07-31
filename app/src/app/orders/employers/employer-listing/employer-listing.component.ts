import { EmployersService } from './../employers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employer-listing',
  templateUrl: './employer-listing.component.html',
  styleUrls: ['./employer-listing.component.scss']
})
export class EmployerListingComponent implements OnInit {

  constructor(protected employersService: EmployersService) { }

  ngOnInit(): void {
  }

}
