import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ERP';

  name="Alfredo Calderon";

  test(){
    console.log("you Clicked!!!");
    this.name="Changed Name!!";
  }
}
