import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'  
})
export class AppComponent implements OnInit{
  title = 'Multi-Step Wizard';

  constructor() {}

  ngOnInit() {
    console.log(this.title + 'loaded');
  }
}
