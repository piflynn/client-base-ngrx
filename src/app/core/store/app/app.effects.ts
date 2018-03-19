import { Title } from '@angular/platform-browser';
import { Actions, Effect } from '@ngrx/effects';
import { ROUTER_NAVIGATION, RouterNavigationAction } from '@ngrx/router-store';
import { tap } from 'rxjs/operators';
import { RouterStateUrl } from 'app/shared/utils';
import { Injectable } from '@angular/core';

@Injectable()
export class AppEffects {
  @Effect({ dispatch: false })
  updateTitle$ = this.actions.ofType(ROUTER_NAVIGATION).pipe(
    tap((action: RouterNavigationAction<RouterStateUrl>) => {
      this.titleService.setTitle(action.payload.routerState.title);
    })
  );
  constructor(private actions: Actions, private titleService: Title) {}
}
