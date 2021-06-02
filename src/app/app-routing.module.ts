import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutFormComponent } from './components/checkout-form/checkout-form.component';
import { ErrorComponent } from './components/error/error.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'product/:id', component: ProductDetailsComponent},
  { path: 'cart', component: CartComponent},
  { path: 'checkout', component: CheckoutFormComponent},
  { path: 'admin', component: AdminComponent},
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
