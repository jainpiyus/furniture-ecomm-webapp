import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CartDetailsModel } from 'src/app/models/cart-model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  
  addressForm:FormGroup;
  cart: CartDetailsModel[];
  constructor(private router: Router, private fb: FormBuilder, private cartService: CartService) { 
    this.getMyCart();
  
  }

  ngOnInit() {
    this.addressForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      pincode:[],
      locality: [],
      address: []
    })
  }

  getMyCart() {
    this.cart = [
      {
        id: 101,
        img: 'assets/bg-img/8.jpg',
        productId: 1,
        quantity: 1,
        title: 'Modern Rocking Chair',
        price: 540,
        active: true
      },
      {
        id: 101,
        img: 'assets/bg-img/7.jpg',
        productId: 1,
        quantity: 1,
        title: 'Modern Rocking Chair',
        price: 540,
        active: true
      },
      {
        id: 101,
        img: 'assets/bg-img/6.jpg',
        productId: 1,
        quantity: 1,
        title: 'Modern Rocking Chair',
        price: 540,
        active: true
      }
    ];
  }

  payButton() {
    
  }

  removeItem(id:number){
  }

}
