import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { AuthRoutingModule, routingComponents } from './auth.routing';
import * as fromAuth from './reducers/auth.reducer';
// import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './effects/auth.effects';
import { LoginComponent } from './containers/login/login.component';

@NgModule({
  imports: [
    SharedModule,
    AuthRoutingModule,
    StoreModule.forFeature('auth', fromAuth.reducer),
    // EffectsModule.forFeature([AuthEffects])
  ],
  declarations: [routingComponents],
  exports: [
    SharedModule
  ]
})
export class AuthModule { }
