import { EmployerDetailComponent } from './employer-listing/employer-detail/employer-detail.component';
import { EmployerPostingComponent } from './employer-posting/employer-posting.component';
import { EmployerListingComponent } from './employer-listing/employer-listing.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: EmployerListingComponent
  },
  {
    path: 'encargos/encargo/:id',
    pathMatch: 'full',
    component: EmployerDetailComponent
  },
  {
    path: 'encargos/nuevo',
    pathMatch: 'full',
    component: EmployerPostingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployersRoutingModule { }