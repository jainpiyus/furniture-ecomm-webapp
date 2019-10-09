import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });
  constructor(public dialogRef: MatDialogRef<LoginComponent>, private router: Router, public dialog: MatDialog) { }

  ngOnInit() {
  }
  onSignUpClick(){
    this.dialogRef.close();
    setTimeout(() => {
      const dialogRef = this.dialog.open(SignupComponent, {
        data: {}
      });
      dialogRef.afterClosed().subscribe(
        res => console.log(res)
      );
    }, 300);
  }
}
