import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-print-product',
  templateUrl: './print-product.component.html',
  styleUrls: ['./print-product.component.scss']
})
export class PrintProductComponent implements OnInit {
  @Input() product: Product = new Product("", 0, 0, "", "", 0, 0, new Date);

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  showDetails(): void {
    this.router.navigate(['product', this.product.id]);
  }

}
