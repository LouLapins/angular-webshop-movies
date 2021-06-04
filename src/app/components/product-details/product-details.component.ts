import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  id: number = 0;
  product: Product;

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your movie has been added to the cart!');
  }

  constructor(private route: ActivatedRoute, 
    private productService: ProductService, 
    private cartService: CartService
    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {

      this.id = parseInt(params.get('id') || "0");
      this.product = this.productService.getProduct(this.id);

    });
  }
}
