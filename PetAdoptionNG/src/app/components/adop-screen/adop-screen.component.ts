/**
 * Francisco Radilla Greer
 * This typescript file is to change between all the componets for the Adopter
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adop-screen',
  templateUrl: './adop-screen.component.html',
  styleUrls: ['./adop-screen.component.css']
})
export class AdopScreenComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
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
