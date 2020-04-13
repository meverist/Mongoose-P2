import { Component, ApplicationInitStatus } from '@angular/core';
import { UserinfoService } from './services/userinfo.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PetAdoptionNG';

  info :string;
  person :string;

  constructor(private data :UserinfoService) {}

  ngOnit() {
    this.data.currentMessage.subscribe(info => this.info = info);
    console.log(this.info); 
  }

}

