/**
 * Francisco Radilla Greer 
 * This typescript file is to change between all the componets for the Employee.
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserinfoService } from 'src/app/services/userinfo.service';

@Component({
  selector: 'app-emplscreen',
  templateUrl: './emplscreen.component.html',
  styleUrls: ['./emplscreen.component.css']
})
export class EmplscreenComponent implements OnInit {

  constructor(public router: Router,
              private data :UserinfoService) { }

  ngOnInit(): void {
    var hold;
    this.data.userCurrentMessage.subscribe(info => hold = info);
    console.log(hold);
    if (hold == "User message") {
      var data = localStorage.getItem('Pass');
      this.person = JSON.parse(data).userName;
    } else {
      this.person = JSON.parse(hold).userName;
    }
  }

  person :string;

  viewApp() {
    this.router.navigate(['/view-applications']);
  }

  addPet() {
    this.router.navigate(['/employee-add-pet']);
  }

  viewPets() {
    this.router.navigate(['/pet-view']);
  }

  account() {
    this.router.navigate(['/account']);
  }

  logOut() {
    this.data.changeUserMessage(null);
    this.data.changePetMessage(null);
    this.router.navigate(['/welcome']);
  }
}
