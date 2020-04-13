import { Component, OnInit } from '@angular/core';
import { Application } from '../../models/application';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-create-application',
  templateUrl: './create-application.component.html',
  styleUrls: ['./create-application.component.css']
})
export class CreateApplicationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  userApp :Application;

  petID: number;
  references :string;
  currentPets :string;
  children :string;
  comments :string;

  //Changes the userApp variable to contain the application details
  //Will need to be sent to the backend
  submitApp(){

    this.userApp = new Application(this.petID,null,0,null,this.references,this.currentPets,this.children,this.comments);

    console.log(this.userApp);

  }
  //Probably will need to be deleted later, this validates the pet
  //your creating the ID for
  petIDValidator(){

    this.petID = Math.round(this.petID);

    if(this.petID <= 0 ){
      
      this.petID = 1;
    }

  }
}
