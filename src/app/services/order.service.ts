import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order, OrderItems} from '../models/Order';
import { Observable, Subject } from 'rxjs';
import { Product } from '../models/Product';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  orders = new Subject <Order> ();
  orderDetails$ = this.orders.asObservable();
  cartItems: Product[] = [];

  createOrder(name:string, paymentMethod: string): Observable<Order> {
    //get cartItems from LS
    this.cartItems = JSON.parse(localStorage.getItem('cartLS'));

    //calculate the total price of cart items
    let totalPriceInCart = this.cartItems.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.price
      }, 0)

    //create an empty array for the orderRows that will later be posted
    let orderRows = [];

    //loop the cart

    for (let i = 0; i < this.cartItems.length; i++) {
      let orderInfo = new OrderItems(this.cartItems[i].id);
      orderRows.push(orderInfo);
      console.log(orderRows)
    }

    let date = new Date();

    let newOrder = new Order(date, name, paymentMethod, totalPriceInCart, [...orderRows]);
    
    // this.orders.next(newOrder);

    return this.sendOrder(newOrder)
  }

  sendOrder(newOrder: Order) {
    return this.http.post<Order>('https://medieinstitutet-wie-products.azurewebsites.net/api/orders', newOrder)
   
    }

  clearCart(): void {
    localStorage.removeItem('cartLS');
  }

  constructor(private http: HttpClient) { }
}
