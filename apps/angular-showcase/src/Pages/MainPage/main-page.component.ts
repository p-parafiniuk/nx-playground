// actions
export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');

// reducer part
import { createReducer, on } from '@ngrx/store';
// import { increment, decrement, reset } from './counter.actions';

export const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
);


// component part
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store, createAction } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'nx-playground-main-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent {

  count$: Observable<number>
  

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
  }

  // ngOnInit() {
  //   this.store.select('counter').subscribe((counter) => {
  //     console.log('counter', counter);
  //   })
  // }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }


}
