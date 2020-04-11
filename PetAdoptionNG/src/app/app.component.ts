import { Component, ApplicationInitStatus } from '@angular/core';
import { Adopter } from './models/Adoptor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PetAdoptionNG';

  displayAdop :boolean = false;
  displayEmpl :boolean = false;

  display :boolean;

  displaylog :boolean = false;

  displayLog() {
    console.log(this.displaylog);
    this.displaylog = !this.displaylog;
  }

  //This function will act like a listener for the emit value
  GetLogVal(person :Adopter) {
    console.log("Hello");
    if(person) {
      console.log("Data sent to parent!");
      console.log(person)
    }
  }
}

