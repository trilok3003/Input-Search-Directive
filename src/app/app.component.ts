import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  searchItem;
  search(event) {
    this.searchItem = event.target.value
      console.log( this.searchItem );
    }
}
