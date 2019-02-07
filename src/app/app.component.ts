import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { INCREMENT, DECREMENT, RESET } from './store/redusers/counter';
import { LOGIN, LOGOUT } from './store/redusers/authorize';
import { AppState, User } from './store/models/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  count$: Observable<number>;
  user$: Observable<User>;

  constructor(private store: Store<AppState>) {
    this.count$ = store.pipe(select('count'));
    this.user$ = store.pipe(select('user'));
  }

  increment() {
    this.store.dispatch({ type: INCREMENT });
  }

  decrement() {
    this.store.dispatch({ type: DECREMENT });
  }

  reset() {
    this.store.dispatch({ type: RESET });
  }

  login() {
    this.store.dispatch({type: LOGIN});
  }

  logout() {
    this.store.dispatch({type: LOGOUT});
  }
}
