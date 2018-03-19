import { Action } from '@ngrx/store';
import { AuthActions, AuthActionTypes } from '../actions/auth.actions';

export interface IState {
  isAuthenticated: boolean;
  currentUser: string;
}

export const initialState: IState = {
  isAuthenticated: false,
  currentUser: ''
};

export function reducer(state = initialState, action: AuthActions): IState {
  switch (action.type) {

    case AuthActionTypes.SetUserAction:
      return {
        ...state,
        isAuthenticated: true,
        currentUser: action.payload
      };


    default:
      return state;
  }
}
