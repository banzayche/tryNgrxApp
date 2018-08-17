import { Component } from '@angular/core';

class Initialize {
  getFuck() {
    console.log('fucking fuck');
  }
}
// TODO write composition decorator
function Composition(, params:  any): any {
  return params;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Composition([Initialize]);
export class AppComponent {
  constructor() {

  }
  title = 'tryNgrxStore';
}
