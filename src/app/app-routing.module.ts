import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { SignupComponent } from './common/signup/signup.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { CheckoutComponent } from './profile/checkout/checkout.component';



const routes: Routes = [
  {
    path: "home", component: HomeComponent
  },
  {
    path: "product", component: ProductComponent
  },
  {
    path: "productdetails", component: ProductDetailsComponent
  },
  {
    path: "checkout", component: CheckoutComponent
  },
  {
    path: "*", redirectTo: "home", pathMatch: "full"
  },
  {
    path: "**", redirectTo: "home", pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
