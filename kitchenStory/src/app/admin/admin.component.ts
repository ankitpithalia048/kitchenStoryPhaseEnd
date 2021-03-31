import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem("AdminCredintail") == null){
      localStorage.setItem("AdminUserName","AnkitPithalia");
      localStorage.setItem("AdminPassword","ankit123");
    }
  }

}
