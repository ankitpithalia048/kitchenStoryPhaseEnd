import { Component, OnInit } from '@angular/core';
import { Router, ɵROUTER_PROVIDERS } from '@angular/router';
import { ItemModule } from './itemModule';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css'],
})
export class ListUserComponent implements OnInit {
  constructor(private router: Router) {}

  i: number = 0;
  info!: ItemModule[];
  searchItem!:string;
  rinfo:any;

  ngOnInit(): void {
    this.itemsPresent();
    this.searchItem = sessionStorage.getItem("searchInfo") ||'{}';
    if(this.searchItem!=null){
     this.rinfo = sessionStorage.getItem("searchInfo");
    // this.rinfo= JSON.parse((this.rinfo));
    }
  }

  //items present
  itemsPresent() {
    // console.log("search item- "+ this.searchItem);
    
    const items = new Array<ItemModule>();
    this.i = parseInt(localStorage.getItem('index') || '{}');
    console.log('length loal storage- ' + localStorage.length);
    console.log('length index storage- ' + this.i);
    for (let j = 0; j < this.i; j++) {
      const ite = localStorage.getItem('item' + j);
      const sitem = ite!.split('+');

      const item1 = new ItemModule(sitem[0], parseInt(sitem[1]), sitem[2]);
      items.push(item1);
      this.info = items;
      // console.log(this.info);
      
      // console.log("item"+j+"- "+sitem[0]);
    }
    console.log(this.info);
    
  }

  addtocart(event: any) {
    sessionStorage.removeItem("searchInfo");
    var i: number;
    if (sessionStorage.getItem('Useritem') == null) {
      sessionStorage.setItem('Useritem', '0');

      i = 0;
    } else {
      i = parseInt(sessionStorage.getItem('Useritem') || '{}');
    }
    const index = parseInt(localStorage.getItem('index') || '{}');
    for (let j = 0; j < index; j++) {
      const ite = localStorage.getItem('item' + j);
      const it = ite?.split('+');
      const nm = it![0];
      // console.log(nm);
      if (nm == event) {
        const value = it![0] + '+' + it![1];
        sessionStorage.setItem('food' + i, value);

        i = i + 1;
        sessionStorage.setItem('Useritem', i.toString());
        console.log(sessionStorage.length);
      }
    }
  }
  order(event: any) {
    sessionStorage.removeItem("searchInfo");

    const index = parseInt(localStorage.getItem('index') || '{}');
    for (let j = 0; j < index; j++) {
      const ite = localStorage.getItem('item' + j);
      const it = ite?.split('+');
      const nm = it![0];
      // console.log(nm);
      if (nm == event) {
        const value = it![0] + '+' + it![1];
        sessionStorage.setItem('OrderItem', value);
      }
    }
    this.router.navigate(['./OrderItem']);

  }
}
