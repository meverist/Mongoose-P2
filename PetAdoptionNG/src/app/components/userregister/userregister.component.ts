/**
 * Francisco Radilla Greer
 * This will be used to register a new adotper
 */

import { Component, OnInit } from '@angular/core';
import { Adopter } from '../../models/Adoptor';
import { LogInService } from 'src/app/services/log-in.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.css']
})
export class UserregisterComponent implements OnInit {

  constructor(public router: Router,
    private logService :LogInService) { }

  ngOnInit(): void {
  }

  username :string;
  useremail :string;
  userpassword :string;
  password2 :string;
  //There are two roles user and employee
  userrole :string = "Adopter";
  userinfo :string = "empty";
  
  invalid :boolean = false;
  result :string;

  //Displays what the outcome of the input is.
  createAdopter() {
    if(this.validateInputFields() == 1) {
      this.result = "Missing Information!";
    } else if(this.validateInputFields() == 2) {
      this.result = "Passwords do not match!";
    } else if(this.validateInputFields() == 3) {
      let adopter = new Adopter(this.useremail, this.userinfo, this.username, this.userpassword, this.userrole);
      console.log(adopter);
      this.logService.addAdopter(adopter).subscribe(
        (resp) => {
          console.log("Was sent");
          console.log(resp);
          this.router.navigate(['/login']);
        },
        (resp) => {
          this.result = "Failed to Register!";
          console.log(resp);
        }
      );
    }
  }

  //Makes sure the input fields have to correct input. Including the password checkers
  validateInputFields() :number {

    if(this.username == undefined || this.username == "" ||
       this.useremail == undefined || this.useremail == "" ||
       this.userpassword == undefined || this.userpassword == "" ||
       this.password2 == undefined || this.password2 == "" 
       ) {
        this.invalid = false;
        console.log("invalid");
        return 1;
       } else if (this.userpassword != this.password2){
        console.log("pass no match");
        this.invalid = false;
        return 2;
       } else {
        console.log("good");
        this.invalid = true; 
        return 3;
       }

    return null;
  }
}
