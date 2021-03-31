import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css'],
})
export class UserloginComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private router: Router) {
    let i: number;
  }

  formSubmitted!: boolean;
  formControls: any;
  userForm!: FormGroup;
  userFound!: boolean;

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
    this.formControls = this.userForm.controls;
  }

  handleFormSubmit(event: any) {
    this.formSubmitted = true;
    if (this.userForm.invalid) {
      return;
    } else {
      const un = event.userName;
      const ps = event.password;
      let count = parseInt(localStorage.getItem('index') || '{}');
      console.log('index count- ' + count);

      for (let i = 0; i < count; i++) {
        let userstore = localStorage.getItem('userName' + i);
        let pssstore = localStorage.getItem('Password' + i);
        console.log(userstore + ' ' + pssstore);

        if (un == userstore && ps == pssstore) {
          this.userFound = true;
          break;
        }
      }
      if (this.userFound == true) {
        sessionStorage.setItem("userLoggedIn", "True");
        this.router.navigate(['./List']);
      } else {
        alert('UserName or Password is Incorrect. Please try again');
      }

      //this.users = this.userForm.value;
      // console.log(this.users[0]);
    }
  }
}
