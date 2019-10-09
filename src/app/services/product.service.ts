import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products = [
    {
      id: 1,
      name: 'Modern Chair',
      price: 500,
      image: 'assets/bg-img/6.jpg',
      rating: 4
    },
    {
      id: 2,
      name: 'Modern Chair',
      price: 1500,
       image: 'assets/bg-img/7.jpg',
      rating: 5
    },
    {
      id: 3,
      name: 'Modern Chair',
      price: 500,
      image: 'assets/bg-img/8.jpg',
      rating: 4
    },
    {
      id: 4,
      name: 'Modern Chair',
      price: 500,
      image: 'assets/bg-img/1.jpg',
      rating: 5
    },

    {
      id: 5,
      name: 'Modern Chair',
      price: 500,
      image: 'assets/bg-img/2.jpg',
      rating: 3
    },
    {
      id: 6,
      name: 'Modern Chair',
      price: 500,
      image: 'assets/bg-img/3.jpg',
      rating: 4
    }
  ];

  constructor() { }
  getProducts = function () {
    return this.products;
  }
}
