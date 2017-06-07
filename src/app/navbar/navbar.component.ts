import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'msw-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('Navbar is loaded');
  }

}
