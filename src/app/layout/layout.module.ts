import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
// components
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    HeaderComponent,
    SidenavComponent],
  exports: [
    HeaderComponent,
    SidenavComponent,
    SharedModule
  ]
})
export class LayoutModule { }
