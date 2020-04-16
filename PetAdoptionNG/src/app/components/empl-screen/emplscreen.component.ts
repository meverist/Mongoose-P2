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

  person :string;

  constructor(public router: Router,
              private data :UserinfoService) { }

  ngOnInit(): void {
    var hold;
    this.data.userCurrentMessage.subscribe(info => hold = info);
    this.person = JSON.parse(hold).userName;
  }

  viewApp() {
    this.router.navigate(['/view-applications']);
  }

  addPet() {
    this.router.navigate(['/employee-add-pet']);
  }

  viewPets() {
    this.router.navigate(['/pet-view']);
  }

  logOut() {
    this.data.changeUserMessage(null);
    this.data.changePetMessage(null);
    this.router.navigate(['/welcome']);
  }
}
