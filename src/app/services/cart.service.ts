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

  getItems(): void {
    if(!localStorage.getItem('cartLS')) {
     localStorage.setItem('cartLS', JSON.stringify(this.cart));
    } else {
      this.cartSubject.next(JSON.parse(localStorage.getItem('cartLS')));
      this.cart = JSON.parse(localStorage.getItem('cartLS'));
    }
  }

  removeItem(id: number): void {
    let cart: Product[] = JSON.parse(localStorage.getItem('cartLS'));
    let index = this.cart.findIndex((e) => e.id == id)
        cart.splice(index, 1);
        localStorage.setItem('cartLS', JSON.stringify(cart));
        this.cartSubject.next(cart);
    
  }

  getTotalPrice(): number {
      let total: number = 0;
      this.cart.forEach((item) => (total += item.price));
      return total;
    }

}


