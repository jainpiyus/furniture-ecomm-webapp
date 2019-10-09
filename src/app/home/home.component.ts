import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  categories = [];
  constructor(private router: Router, private categoryService: CategoryService) {
    this.categories = this.categoryService.getCategories();
  }

  ngOnInit() {
  }
  onProductClick(){
    this.router.navigate(['product']);
  }
}
