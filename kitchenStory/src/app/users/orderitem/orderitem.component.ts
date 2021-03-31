import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orderitem',
  templateUrl: './orderitem.component.html',
  styleUrls: ['./orderitem.component.css'],
})
export class OrderitemComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  orderplaced() {
    const order = sessionStorage.getItem('OrderItem');
    const it = order?.split('+');
    alert(
      'Your ' +
        it![0] +
        ' is Successfully Placed! Delivery boy will soon deliver the food on the specified address.'
    );
    this.router.navigate(['./List']);
  }
}
