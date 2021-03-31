import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router, ɵROUTER_PROVIDERS} from '@angular/router'

@Component({
  selector: 'admin-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private formBuilder: FormBuilder,private router: Router) { }
  
  formSubmitted!: boolean;
  formControls: any;
  userForm!: FormGroup;
  userFound!:boolean;
  AdminLoggedIn!: boolean;


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
      // let count = parseInt(localStorage.getItem("index") || '{}');
      // console.log("index count- "+count);
      
 
          let userstore = localStorage.getItem("AdminUserName");
          let pssstore = localStorage.getItem("AdminPassword");
          // console.log(userstore+" "+pssstore);
          
          if(un==userstore && ps==pssstore){
            this.userFound = true;
            
          }

       
       if(this.userFound==true){
     
        this.AdminLoggedIn= true;
        this.router.navigate(['./Main']);
       }
       else {
        alert(
          'UserName or Password is Incorrect. Please try again'
        );
        
        
        
       }
      
      
      
      
      
      //this.users = this.userForm.value;
      // console.log(this.users[0]);
    }
  }
}
