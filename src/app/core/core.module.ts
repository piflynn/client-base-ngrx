import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppEffects } from 'app/core/store/app/app.effects';
import { environment } from 'environments/environment';
import { reducers, metaReducers } from './store';
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { CustomRouterStateSerializer } from '../shared/utils';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    /**
     * @ngrx/router-store keeps router state up-to-date in the store.
     */
    StoreRouterConnectingModule.forRoot({
      /*
        They stateKey defines the name of the state used by the router-store reducer.
        This matches the key defined in the map of reducers
      */
      stateKey: 'router'
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([AppEffects])
  ],
  declarations: [],
  exports: [],
  providers: [
    /**
     * The `RouterStateSnapshot` provided by the `Router` is a large complex structure.
     * A custom RouterStateSerializer is used to parse the `RouterStateSnapshot` provided
     * by `@ngrx/router-store` to include only the desired pieces of the snapshot.
     */
    { provide: RouterStateSerializer, useClass: CustomRouterStateSerializer }
  ]
})
export class CoreModule {}
