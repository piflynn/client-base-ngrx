import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { navLinks } from '../nav-links';
import * as fromRoot from 'app/core/store';
import { LayoutActionTypes } from 'app/core/store/layout/layout.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navLinks = navLinks;
  constructor(private $store: Store<fromRoot.IState>) { }

  ngOnInit() {
  }

 openSideNav() {
    this.$store.dispatch({ type: LayoutActionTypes.OpenSidenav });
  }

}
