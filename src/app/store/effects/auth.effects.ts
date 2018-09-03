import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, delay } from 'rxjs/operators';
import { LOGIN, LOGIN_SUCCESS, LOGOUT, userInitialState } from '../redusers/authorize';

@Injectable()
export class AuthEffects {
  // Listen for the 'LOGIN' action
  @Effect()
  login$: Observable<Action> = this.actions$.pipe(
    ofType(LOGIN),
    mergeMap(action =>
      of({ name: 'John', token: '111' }).pipe(
        delay(1000),
        // If successful, dispatch success action with result
        map(data => ({ type: LOGIN_SUCCESS, payload: data })),
        // If request fails, dispatch failed action
        // catchError(() => of({ type: 'LOGIN_FAILED' }))
      )
    )
  );

  @Effect()
  logout$: Observable<Action> = this.actions$.pipe(
    ofType(LOGOUT),
    mergeMap(action =>
      of(userInitialState).pipe(
        delay(1000),
        // If successful, dispatch success action with result
        map(data => ({ type: LOGIN_SUCCESS, payload: data })),
        // If request fails, dispatch failed action
        // catchError(() => of({ type: 'LOGIN_FAILED' }))
      )
    )
  );

  constructor(private actions$: Actions) { }
}
