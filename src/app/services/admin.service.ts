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
    if(!localStorage.getItem('orders')) {
      this.http.get<Order[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/orders?companyId=666644')
      .subscribe((data) => {this.orders.next(data);
        localStorage.setItem('orders', JSON.stringify(data));
        
      });
    } else {
      this.orders.next(JSON.parse(localStorage.getItem('orders')));
    }
  }

}

// export class ProductService {
//   private products = new Subject<Product[]>();
//   products$ = this.products.asObservable();

//   constructor(private http: HttpClient) { }

//   getProducts(): void {
//     if(!localStorage.getItem('products')){
//       // Hämta data från api och spara i localStorage

//       this.http.get<Product[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/products')
//       .subscribe((data) => {this.products.next(data);
//         localStorage.setItem('products', JSON.stringify(data));
//       });
//     }
//     else {
//       // Hämta data från localStorage

//       this.products.next(JSON.parse(localStorage.getItem('products') || '{}'));
//     }
    
//   }

//   //Hämta produkt ID för den produkt du klickat på
//   getProduct(productId: number): Product {
//     let products: Product[] = JSON.parse(localStorage.getItem('products') || "0");

//     return products.filter((p) => p.id == productId)[0];
//   }
// }