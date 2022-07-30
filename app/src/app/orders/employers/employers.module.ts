import { EmployersRoutingModule } from './employers-routing.module';
import { EmployersService } from './employers.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployerListingComponent } from './employer-listing/employer-listing.component';
import { EmployerDetailComponent } from './employer-listing/employer-detail/employer-detail.component';
import { EmployerPostingComponent } from './employer-posting/employer-posting.component';

@NgModule({
  declarations: [
    EmployerListingComponent,
    EmployerDetailComponent,
    EmployerPostingComponent
  ],
  imports: [
    CommonModule,
    EmployersRoutingModule
  ],
  providers: [
    EmployersService
  ]
})
export class EmployersModule { }
