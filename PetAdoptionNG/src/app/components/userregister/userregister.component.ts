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
      
      this.logService.addAdopter(adopter).subscribe(
        (resp) => {
          
          this.router.navigate(['/login']);
        },
        (resp) => {
          this.result = "Failed to Register!";
          
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
       
        return 1;
       } else if (this.userpassword != this.password2){
        
        this.invalid = false;
        return 2;
       } else {
        
        this.invalid = true; 
        return 3;
       }

    return null;
  }
}
