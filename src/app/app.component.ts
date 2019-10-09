import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  @ViewChild('drawer', {static: false}) drawer: MatSidenav;
  title = 'e-comm';
  
  toggelNavbar () {
    this.drawer.toggle();
  }
  total = 150;
  args = {
    speed: 'fast',
    size: 1.2
  }

   
}
