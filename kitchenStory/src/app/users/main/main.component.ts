import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class UserMainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  menu(){
    alert("Please Login To view the menu!");
  }

}
