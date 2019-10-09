import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output()
  sidenav = new EventEmitter();
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  toggelSidenav() {
    this.sidenav.emit();
  }
  openLoginDialog():void{
    const dialogRef = this.dialog.open(LoginComponent, {
      data: {}
    });
    dialogRef.afterClosed().subscribe(
      res => console.log(res)
    );
  }
}
