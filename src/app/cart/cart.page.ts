import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
count = 1 ;
  constructor(
    private location: Location
  ) { }

  ngOnInit() {
  }
  back() {
    this.location.back()
  }
  getCount(){
    return this.count ;
  }
  addCount(){
    this.count ++;
  }
  minusCount(){
    if(this.count > 1){
      this.count -- ;
    }
  }
}
