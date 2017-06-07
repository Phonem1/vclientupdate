import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html'
})
export class PersonalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
     console.log('Personal is loaded');
  }

}
