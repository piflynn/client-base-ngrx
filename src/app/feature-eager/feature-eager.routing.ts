import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './containers/list/list.component';

const routes: Routes = [
  {
    path: 'eager',
    component: ListComponent,
    data: { title: 'Eager'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureEagerRoutingModule { }

export const routingComponents = [ListComponent];
