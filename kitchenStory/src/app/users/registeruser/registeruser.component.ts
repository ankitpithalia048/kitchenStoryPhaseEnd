import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignUpModel } from './register-module';
import { SignupserviceService } from '../signupservice.service';

@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.css'],
})
export class RegisteruserComponent implements OnInit {

  users!: SignUpModel[];
  i: number = 0;

  constructor(
    private formBuilder: FormBuilder,
    private signup: SignupserviceService
  ) {
    this.users = [];
    let i: number;
  }


  formSubmitted!: boolean;
  formControls: any;
  userForm!: FormGroup;
  FirstName!: string;
  LastName!: string;

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
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
      this.users = this.signup.registerUser(event, this.i);
      alert(
        'You have successfully register. Please click on sign In to login!'
      );
      window.location.reload();
      //this.users = this.userForm.value;
      // console.log(this.users[0]);
    }
  }
}
