import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
search = false ;
  constructor(
    private router: Router,
  ) {}


   viewDrone(){
   this.router.navigate(['viewDrone']);
  }
}
