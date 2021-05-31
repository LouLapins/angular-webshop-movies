import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.scss']
})
export class CheckoutFormComponent implements OnInit {

  addressForm = this.fb.group({
    fname: ['', Validators.required],
    lname: ['', Validators.required],
    street: ['', Validators.required],
    pcode: ['', Validators.required],
    city: ['', Validators.required],
  })
  

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.addressForm.value);
    //this.http.post ?
  }

}
