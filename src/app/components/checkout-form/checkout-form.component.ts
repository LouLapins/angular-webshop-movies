import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';


@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.scss']
})
export class CheckoutFormComponent implements OnInit {

  cartItems: Product[] = [];
  totalPrice: number;

  customerForm = this.fb.group({
    name: ['', Validators.required],
    phone: ['', Validators.required],
    email: ['', Validators.required],
    paymentmethod: ['', Validators.required],
  })
  
  constructor(private cartService: CartService, private orderService: OrderService, private fb: FormBuilder) { }

  ngOnInit(): void {

    this.cartService.items$.subscribe((data) => { 
      this.cartItems = data;
    })

    this.cartService.getItems();
    this.totalPrice = this.cartService.getTotalPrice();
    
    //let order = this.orderServive.orders.subscribe((data) => { console.log(data) })
  }

  onSubmit(): void {
    console.log(this.customerForm.value);
    //this.http.post ?
    let name = this.customerForm.value.name;
    let paymentMethod = this.customerForm.value.paymentmethod;
    this.orderService.createOrder(name, paymentMethod);
  }

}
