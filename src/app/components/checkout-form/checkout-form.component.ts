import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.scss']
})
export class CheckoutFormComponent implements OnInit {

  addressForm = new FormGroup({
    fname: new FormControl(''),
    lname: new FormControl(''),
    street: new FormControl(''),
    streetno: new FormControl(''),
    pcode: new FormControl(''),
    city: new FormControl(''),
  });
  

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.addressForm.value);
    //this.http.post ?
  }

}
