import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { map, scan, filter, takeUntil } from 'rxjs/operators';
import * as fromRoot from './core/store';
import { LayoutActionTypes } from './core/store/layout/layout.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  showSidenav$: Observable<boolean>;
  constructor(private $store: Store<fromRoot.IState>) {}
  ngOnInit() {
    this.showSidenav$ = this.$store.select(fromRoot.getShowSidenav);
  }
  closeSidenav() {
    this.$store.dispatch({ type: LayoutActionTypes.CloseSidenav });
  }
}
