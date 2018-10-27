import { Component, OnInit } from '@angular/core';
// using Angular Material Dialogue Component
// We use MatDialog and MatDialogRef
import { MatDialog, MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  // We use this object to bind data between form and elements
  // to this object. That means any change in the form elements
  // will make changes to this object.
  // And this object allow me to retrieve form information and use
  // it within my Angular application.
  user = {user: '', password: '', remember: false};


  // The MatDialogRef will return a reference to my dialog that contains
  // the LoginComponent here
  constructor(public dialogRef: MatDialogRef<LoginComponent>) { }

  ngOnInit() {
  }

  onSubmit() {
    // Since we don't have backend (server-side) to authenticate yet, just show that
    // we can capture the information here.
    console.log('User: ', this.user);
    this.dialogRef.close();
  }
}
