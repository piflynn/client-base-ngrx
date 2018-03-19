import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FeatureEagerRoutingModule, routingComponents } from './feature-eager.routing';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
// import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
    SharedModule,
    FeatureEagerRoutingModule,
    StoreModule.forFeature('featureEager', reducers),
    // EffectsModule.forFeature([FeatureEagerEffects])
  ],
  declarations: [routingComponents]
})
export class FeatureEagerModule { }
