import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'encargos',
    pathMatch: 'full',
    loadChildren: () => import('./employers/employers.module').then(m => m.EmployersModule)
  },
  {
    path: 'servicios',
    pathMatch: 'full',
    loadChildren: () => import('./workers/workers.module').then(m => m.WorkersModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }