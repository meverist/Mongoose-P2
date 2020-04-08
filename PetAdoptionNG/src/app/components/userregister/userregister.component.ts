import { Component, OnInit } from '@angular/core';
import { Adopter } from 'src/app/models/Adoptor';

@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.css']
})
export class UserregisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  uname :string;
  email :string;
  password :string;
  password2 :string;
  role :string;

  invalid :boolean = false;
  result :string;

  createAdopter() {
    if(this.validateInputFields() == 1) {
      this.result = "You have invalid fields!";
    } else if(this.validateInputFields() == 2) {
      this.result = "You confirmation password does not match!";
    } else if(this.validateInputFields() == 3) {
      let adopter = new Adopter(this.uname, this.email, this.password, this.role);
      console.log("it was created!");
    }
  }

  validateInputFields() :number {
    console.log(this.uname);
    console.log(this.email);
    console.log(this.password);
    console.log(this.password2);
    console.log(this.role);

    if(this.uname == undefined || this.uname == "" ||
       this.email == undefined || this.email == "" ||
       this.password == undefined || this.password == "" ||
       this.password2 == undefined || this.password2 == "" ||
       this.role == undefined || this.role == "") {
        this.invalid = false;
        console.log("invalid");
        return 1;
       } else if (this.password != this.password2){
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
