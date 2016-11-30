import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `<div class="container">
    <h1>Hello This Is Foodingo Kitchen Module App</h1>
</div>`
  // templateUrl: 'app.component.html'
})
export class AppComponent  { 
  name = 'Angular'; 

}
