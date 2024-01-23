// actions
export const addProduct = createAction('[Product] Add');
export const editProduct = createAction('[Product] Edit');
export const removeProduct = createAction('[Product] Remove');

// reducer part
import { createAction, createReducer, on } from '@ngrx/store';
// import { increment, decrement, reset } from './counter.actions';

export const initialState = [];

export const counterReducer = createReducer(
  initialState,
  on(addProduct, (state, action) => {
    console.log('state', state);
    console.log('actiokn', action);

    return {
      ...state,
      products: [...state, action],
    };
  }),
  // on(editProduct, (state, action) => state + 1),
  // on(removeProduct, (state, action) => state + 1)
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

  waterProducts = [{ name: 'water' }, { name: 'water2' }, { name: 'water3' }];
  // count$: Observable<number>;
  // signalCount = signal(0);

  constructor(
    private productService: ProductService,
    private store: Store<{ count: number }>
  ) {
    this.title = 'title';

    // this.count$ = store.select('count');
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

  // signalIncrement() {
  //   this.signalCount.set(this.signalCount() + 1);
  // }

  addProduct() {
    this.store.dispatch(addProduct());
  }

  editProduct() {
    this.store.dispatch(editProduct());
  }

  removeProduct() {
    this.store.dispatch(editProduct());
  }
}
