import { NgModule } from '@angular/core';
// core module
import { CoreModule } from './core/core.module';
// layout module
import { LayoutModule } from './layout/layout.module';
// eager feature module
import { FeatureEagerModule } from './feature-eager/feature-eager.module';
// app routing
import { AppRoutingModule, routingComponents } from './app.routing';
// app component
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    CoreModule,
    LayoutModule,
    FeatureEagerModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
