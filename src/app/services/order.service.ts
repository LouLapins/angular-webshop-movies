import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../models/Order';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private orders = new Subject <Order> ();
 orderDetails$ = this.orders.asObservable();
 customerOrder: Order = new Order ("customername", "visa", 150, []);

  createOrder() {
    return this.http.post<Order>('https://medieinstitutet-wie-products.azurewebsites.net/api/orders', this.customerOrder)
  }

  constructor(private http: HttpClient) { }
}
