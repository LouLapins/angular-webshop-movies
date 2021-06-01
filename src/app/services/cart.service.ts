import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Product[] = [];
  private cartSubject = new Subject<Product[]>();
  items$ = this.cartSubject.asObservable();

  constructor() { }

  addToCart(product: Product): void {
    if (JSON.parse(localStorage.getItem('cartLS'))) {
      let getCart: [] = JSON.parse(localStorage.getItem('cartLS'));
      let updatedCart = [...getCart, product];
      localStorage.setItem('cartLS', JSON.stringify(updatedCart));
    } else {
      this.cart.push(product);
      localStorage.setItem('cartLS', JSON.stringify(this.cart))
    }
  }

  // addToCart(product: Product) {
  //   this.items.push(product);
  //   this.items$ = of(this.items);
  //   localStorage.setItem('items', JSON.stringify(this.items));
  // }

  getItems(): void {
    if(!localStorage.getItem('cartLS')) {
     localStorage.setItem('cartLS', JSON.stringify(this.cart));
    } else {
      this.cartSubject.next(JSON.parse(localStorage.getItem('cartLS')));
      this.cart = JSON.parse(localStorage.getItem('cartLS'));
    }
  }
  // getItems(): Observable<Product[]>{
  //   JSON.parse(localStorage.getItem('items'));
  //   return of(this.items);
  // }

  // clearCart() {
  //   this.items = [];
  //   return this.items;
  // }
}
