import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css'],
})
export class ResetpasswordComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  formSubmitted!: boolean;
  formControls: any;
  userForm!: FormGroup;

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      cnfpassword: ['', [Validators.required, Validators.minLength(6)]],
    });
    this.formControls = this.userForm.controls;
  }

  handleFormSubmit(event: any) {
    this.formSubmitted = true;
    const ps = event.password;
    const cnfps = event.cnfpassword;
    if (this.userForm.invalid) {
      return;
    } else if (ps != cnfps) {
      alert('Password not matched');
    } else {
      localStorage.setItem('AdminPassword', ps);
      alert('Password Updates Successfully!');
    }
  }
}
