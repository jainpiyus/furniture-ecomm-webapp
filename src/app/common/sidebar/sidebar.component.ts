import { Component,Output, EventEmitter } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
 
 

  
  sideNavMenu = [
    {
      title: 'HOME',
      link: 'home'
    },
    {
     title: 'PRODUCTS',
     link: 'product'
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
  constructor() {

  }

  ngOnInit() {
    
  }
  
 

}
