/**
 * Francisco Radilla Greer
 * This typescript file is to change between all the componets for the Adopter
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserinfoService } from 'src/app/services/userinfo.service';

@Component({
  selector: 'app-adop-screen',
  templateUrl: './adop-screen.component.html',
  styleUrls: ['./adop-screen.component.css']
})
export class AdopScreenComponent implements OnInit {

  person :string;

  constructor(public router: Router,
              private data :UserinfoService) { }

  ngOnInit(): void {
    var hold;
    this.data.currentMessage.subscribe(info => hold = info);
    //console.log(hold);
    this.person = JSON.parse(hold).userName;
  }

  createApplication() {
    this.router.navigate(['/create-application']);
  } 

  petView() {
    this.router.navigate(['/pet-view']);
  }

  createAppointment() {
    //WOP
  }

}
