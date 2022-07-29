import { EmployersService } from './employers.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployerListingComponent } from './employer-listing/employer-listing.component';
import { EmployerDetailComponent } from './employer-listing/employer-detail/employer-detail.component';
import { EmployerPostingComponent } from './employer-posting/employer-posting.component';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    EmployersService
  ],
  declarations: [
    EmployerListingComponent,
    EmployerDetailComponent,
    EmployerPostingComponent
  ]
})
export class EmployersModule { }
