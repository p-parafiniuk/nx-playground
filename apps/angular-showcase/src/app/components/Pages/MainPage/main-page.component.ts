// actions
export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');

// reducer part
import { createAction, createReducer, on } from '@ngrx/store';
// import { increment, decrement, reset } from './counter.actions';

export const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(increment, decrement, (state) => state + 1),
  // on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
);

/**
 * Component part
 */
import { Component, Input, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductService } from '../../../services/Product/product.service';

@Component({
  selector: 'nx-playground-main-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent implements OnInit {
  @Input() title: string; 
  count$: Observable<number>;
  signalCount = signal(0);

  constructor(
    private productService: ProductService,
    private store: Store<{ count: number }>
  ) {
    this.title = 'title';

    this.count$ = store.select('count');
  }

  ngOnInit() {
    this.fetchProducts();

    // this.store.select('counter').subscribe((counter) => {
    //   console.log('counter', counter);
    // })
  }

  fetchProducts() {
    this.productService.getProducts().subscribe((products) => {
      console.log('products', products);
    });
  }

  signalIncrement() {
    this.signalCount.set(this.signalCount() + 1);
  }

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
