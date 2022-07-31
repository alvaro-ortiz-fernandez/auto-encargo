import { Employer } from './../../employer.model';
import { ActivatedRoute } from '@angular/router';
import { EmployersService } from './../../employers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employer-detail',
  templateUrl: './employer-detail.component.html',
  styleUrls: ['./employer-detail.component.scss']
})
export class EmployerDetailComponent implements OnInit {

  protected employer?: Employer;

  constructor(private route: ActivatedRoute, protected employersService: EmployersService) { }

  ngOnInit(): void {
    this.employer = this.employersService.getEmployer(this.route.snapshot.params['id']);
  }

}
