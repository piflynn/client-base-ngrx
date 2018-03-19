import { Action } from '@ngrx/store';

export enum AuthActionTypes {
  SetUserAction = '[Auth] Action'
}

export class SetUser implements Action {
  readonly type = AuthActionTypes.SetUserAction;
  constructor(public payload: string) { }
}

export type AuthActions = SetUser;
