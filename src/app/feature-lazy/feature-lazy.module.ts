import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { FeatureLazyRoutingModule, routingComponents } from './feature-lazy.routing';

@NgModule({
  imports: [
    SharedModule,
    FeatureLazyRoutingModule
  ],
  declarations: [routingComponents]
})
export class FeatureLazyModule { }
