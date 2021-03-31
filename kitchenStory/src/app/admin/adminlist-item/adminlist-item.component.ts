import { Component, OnInit } from '@angular/core';
import { ItemModle } from './list-modle';
import {Router, ɵROUTER_PROVIDERS} from '@angular/router';


@Component({
  selector: 'adminlist-item',
  templateUrl: './adminlist-item.component.html',
  styleUrls: ['./adminlist-item.component.css'],
})
export class AdminlistItemComponent implements OnInit {
  constructor(private router: Router) {}


  i: number = 0;
  info!: ItemModle[];


  ngOnInit(): void {
    this.itemsPresent();
    console.log(this.info);
    
  }

  //items present
  itemsPresent() {
    const items = new Array<ItemModle>();
    this.i = parseInt(localStorage.getItem('index') || '{}');
    console.log('length loal storage- ' + localStorage.length);
    console.log('length index storage- ' + this.i);
    for (let j = 0; j < this.i; j++) {
      const ite = localStorage.getItem('item' + j);
      const sitem = ite!.split('+');

      const item1 = new ItemModle(sitem[0], parseInt(sitem[1]), sitem[2]);
      items.push(item1);
      this.info = items;

      // console.log("item"+j+"- "+sitem[0]);
    }
  }

  // remove this line 
  remitem(event:any){
    // console.log(this.value);
    
    console.log(event);
    this.i = parseInt(localStorage.getItem("index")||'{}');
    console.log(this.i);
    
    for(let j=0;j<this.i;j++){
      const fname = localStorage.getItem("item"+j);
      const sitem = fname!.split('+');
      const nm = sitem[0];
      if(nm==event){
        localStorage.removeItem("item"+j);
        const index = parseInt(localStorage.getItem("index")||'{}');
        localStorage.setItem("index",(index-1).toString());
        for(let k =j;k<this.i;k++){
          const gval = localStorage.getItem("item"+(k+1)) || '{}';
          localStorage.setItem("item"+k, gval);
        }
        break;
      }
      else {
        continue;
      }


    }
    window.location.reload();
    
    
  }
}
