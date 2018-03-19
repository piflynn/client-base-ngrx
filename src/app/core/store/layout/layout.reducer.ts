import { LayoutActionTypes, LayoutActions } from './layout.actions';

export interface IState {
  showSidenav: boolean;
}

const initialState: IState = {
  showSidenav: false
};

export function reducer(
  state: IState = initialState,
  action: LayoutActions
): IState {
  switch (action.type) {
    case LayoutActionTypes.CloseSidenav:
      return {
        showSidenav: false
      };

    case LayoutActionTypes.OpenSidenav:
      return {
        showSidenav: true
      };

    default:
      return state;
  }
}

export const getShowSidenav = (state: IState) => state.showSidenav;
