import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { CartModel, CartDetailsModel } from '../models/cart-model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  myCartCount = new BehaviorSubject(0);
  myCart: CartDetailsModel[] = [];
  constructor(private _http: HttpClient) { }
  addToCart(cardDetailsModel: CartDetailsModel) {
   
  }
  getMyCart() {
  }

  checkout() {
  }
  getCartCount() {
  }
  removeItem(id: number){
  }
  
}
