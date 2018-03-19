import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    path: '',
    component: ListComponent,
    data: { title: 'Lazy'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureLazyRoutingModule { }

export const routingComponents = [ListComponent];
