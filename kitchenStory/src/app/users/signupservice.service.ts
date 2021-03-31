import { Injectable } from '@angular/core';
import { SignUpModel } from './registeruser/register-module';

@Injectable({
  providedIn: 'root'
})
export class SignupserviceService {

  constructor() { }


  registerUser(event: any, i: number): SignUpModel[] {
    let userregister = new Array<SignUpModel>();
    let u = new SignUpModel(
      event.firstName,
      event.lastName,
      event.email,
      event.username,
      event.password
    );
    userregister.push(u);
    i = parseInt(localStorage.getItem("TotalUser")|| '{}');
    if (localStorage.getItem('TotalUser') == null) {
      localStorage.setItem('TotalUser', '0');

      i = 0;
    }
    
    localStorage.setItem('userName' + i, event.userName);
    localStorage.setItem('Password' + i, event.password);
    ++i;
    console.log("received i = "+i);
    localStorage.setItem('TotalUser', i.toString());

    

    return userregister;
  }
}
