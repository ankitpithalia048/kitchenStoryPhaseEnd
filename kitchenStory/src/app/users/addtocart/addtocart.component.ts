import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css']
})
export class AddtocartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.cart();
  }

  //cart
  cart(){
    var i : any;
   var total = 0;
   console.log(sessionStorage.length);
   var j=0;
   i = parseInt(sessionStorage.getItem("Useritem")||'{}');
   
   var items:Item;
   for(let k=0;k<i;k++)
   {
    
     
     items = new Item();
     var itemInStorage = sessionStorage.getItem("food"+k);
     console.log(itemInStorage);
    var itemSplit = itemInStorage?.split("+");
    items.name = itemSplit![0];
    items.price = parseInt(itemSplit![1]);
    total += parseInt(itemSplit![1]);
     //console.log(it);
     var table = document.getElementById("table") as HTMLTableElement;
     var row = table.insertRow(j+1);
     
     var cell1 = row.insertCell(0);
     var cell2  =row.insertCell(1);
     
     cell1.innerHTML = items.Service;
     cell2.innerHTML = items.Price.toString();
     j+=1;
    
      }
var table = document.getElementById("table") as HTMLTableElement;
var row = table.insertRow(j+1);
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);

cell1.innerHTML = "Total Price";
cell2.innerHTML = "$ "+ total;
  }


  // //button checkout
  // checkout(){
  //   const fooditemindex = parseInt(sessionStorage.getItem("Useritem")||'{}');

  //   for(let j=0;j<fooditemindex;j++){

  //   }
  // }

}


class Item{
  name! : string;
  price! : number;
  
  public get Service() : string {
      return this.name;
  }
  
  public set Service(Service : string) {
      this.name = Service;
  }
  
  public set Price(Price : number) {
      this.price = Price;
  }
  
  public get Price() : number {
      return this.price;
  }
  
  
}
