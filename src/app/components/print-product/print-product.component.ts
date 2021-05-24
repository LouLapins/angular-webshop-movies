import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-print-product',
  templateUrl: './print-product.component.html',
  styleUrls: ['./print-product.component.scss']
})
export class PrintProductComponent implements OnInit {
  @Input()
  product!: Product;

  constructor() { }

  ngOnInit(): void {
  }

}
