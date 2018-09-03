import { Action } from '@ngrx/store';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

export const userInitialState: User = {
  name: 'test',
  token: 'test'
};

export function authorizeReducer(state: User = userInitialState, action: any) {
  switch (action.type) {
    case LOGIN:
      return { ...state };

    case LOGOUT:
      return { ...state };

    case LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload
      };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
}
