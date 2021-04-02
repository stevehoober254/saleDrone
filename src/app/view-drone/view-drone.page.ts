import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-drone',
  templateUrl: './view-drone.page.html',
  styleUrls: ['./view-drone.page.scss'],
})
export class ViewDronePage implements OnInit {
  slideOpts = {
    initialSlide: 1,
    speed: 400,
  };
  constructor(
    private location: Location,
    private router: Router
  ) { }

  ngOnInit() {
  }
  back() {
    this.location.back()
  }
  goToCart(){
    this.router.navigate(['/cart']);
  }

}
