import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products = [];
  constructor(private router: Router, private productService: ProductService) {
    this.products = this.productService.getProducts();
  }
  counter(i: number) {
    return new Array(i);
  }

  ngOnInit() {
  }
  onProductClick() {
    this.router.navigate(['productdetails']);
  }
}
