import { WorkersService } from './workers.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkerListingComponent } from './worker-listing/worker-listing.component';
import { WorkerDetailComponent } from './worker-listing/worker-detail/worker-detail.component';
import { WorkerPostingComponent } from './worker-posting/worker-posting.component';

@NgModule({
  declarations: [
    WorkerListingComponent,
    WorkerDetailComponent,
    WorkerPostingComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    WorkersService
  ]
})
export class WorkersModule { }
