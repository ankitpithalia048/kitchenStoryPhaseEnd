import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemModule } from './ItemModule';

@Component({
  selector: 'app-searchlist-user',
  templateUrl: './searchlist-user.component.html',
  styleUrls: ['./searchlist-user.component.css']
})
export class SearchlistUserComponent implements OnInit {
  constructor(private router: Router) {}

  i: number = 0;
  info!: ItemModule[];
  searchItem!:string;
  rinfo:any;

  ngOnInit(): void {
    
    this.searchItem = sessionStorage.getItem("searchItemName")||'{}';
    console.log(this.searchItem);
    this.itemsPresent();
    // sessionStorage.removeItem("searchItemName");
    
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

     
      
      
      console.log(this.searchItem);
      
      if(sitem[0].includes(this.searchItem)){
        console.log("under if- "+sitem[0]);
        
        const item1 = new ItemModule(sitem[0], parseInt(sitem[1]), sitem[2]);
        items.push(item1);
        this.info = items;
      }
        
      
      
       console.log(this.info);
      
      // console.log("item"+j+"- "+sitem[0]);
    }
    //console.log(this.info);
    
  }

  addtocart(event: any) {
    sessionStorage.removeItem("searchItemName");
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
    sessionStorage.removeItem("searchItemName");


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
