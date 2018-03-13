import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FeatureEagerRoutingModule, routingComponents } from './feature-eager.routing';

@NgModule({
  imports: [
    SharedModule,
    FeatureEagerRoutingModule
  ],
  declarations: [routingComponents]
})
export class FeatureEagerModule { }
