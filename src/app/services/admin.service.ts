import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Order } from '../models/Order';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private orders = new Subject<Order[]>();
  orders$ = this.orders.asObservable();

  constructor(private http: HttpClient) { }

  getOrders(): void {
    
    this.http.get<Order[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/orders?companyId=666644')
    .subscribe((data) => {this.orders.next(data);
      });
  }

}