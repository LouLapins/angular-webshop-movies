import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Subject } from 'rxjs';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products = new Subject<Product[]>();
  products$ = this.products.asObservable();

  constructor(private http: HttpClient) { }

  getProducts(): void {
    if(!localStorage.getItem('products')){
      // Hämta data från api och spara i localStorage

      this.http.get<Product[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/products')
      .subscribe((data) => {this.products.next(data);
        localStorage.setItem('products', JSON.stringify(data));
      });
    }
    else {
      // Hämta data från localStorage

      this.products.next(JSON.parse(localStorage.getItem('products') || '{}'));
    }
    
  }
}
