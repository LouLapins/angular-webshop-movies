import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { ErrorComponent } from './components/error/error.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { PrintProductComponent } from './components/print-product/print-product.component';
import { CheckoutFormComponent } from './components/checkout-form/checkout-form.component';
import { CartComponent } from './components/cart/cart.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AdminComponent } from './components/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ErrorComponent,
    ProductDetailsComponent,
    PrintProductComponent,
    CheckoutFormComponent,
    CartComponent,
    NavbarComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
