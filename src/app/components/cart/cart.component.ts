import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems: Product[] = [];
  // private items = new Subject<Product[]>();
  // items$ = this.items.asObservable();

  constructor(private cartService: CartService) { }

  ngOnInit(): void {

    this.cartService.items$.subscribe((data) => {
      this.cartItems = data;
      console.log(data);
    });
    this.cartService.getItems();

    //this.totalSum = this.cartService.handleCartItems();
  }

  // removeCartItem(i: number) {
  //   this.cartService.removeCartItem(i);
  // }
}
