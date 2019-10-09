import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  menu = [
    {
      title: 'HOME',
      link: '/home'
    },
    {
     title: 'PRODUCTS',
     link: '/products'
   },
   {
     title: 'IMAGES',
     link: '/products'
   },
   {
     title: 'CONTACT-US',
     link: '/products'
   },
   {
    title: 'CART',
    link: '/products'
  }
  ];
  constructor() { }

  ngOnInit() {
  }

}
