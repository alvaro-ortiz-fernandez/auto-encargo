import { WorkerPostingComponent } from './worker-posting/worker-posting.component';
import { WorkerDetailComponent } from './worker-listing/worker-detail/worker-detail.component';
import { WorkerListingComponent } from './worker-listing/worker-listing.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: WorkerListingComponent
  },
  {
    path: 'servicio/:id',
    pathMatch: 'full',
    component: WorkerDetailComponent
  },
  {
    path: 'nuevo',
    pathMatch: 'full',
    component: WorkerPostingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkersRoutingModule { }