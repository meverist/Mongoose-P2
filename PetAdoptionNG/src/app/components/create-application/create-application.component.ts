import { Component, OnInit } from '@angular/core';
import { Application } from '../../models/application';
import { NgModel } from '@angular/forms';
import { LogInService } from '../../services/log-in.service';

@Component({
  selector: 'app-create-application',
  templateUrl: './create-application.component.html',
  styleUrls: ['./create-application.component.css']
})
export class CreateApplicationComponent implements OnInit {

  constructor(private callService: LogInService) { }

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

    this.userApp = new Application(undefined,this.petID,null,0,null,this.references,this.currentPets,this.children,this.comments);

    this.callService.makeApplication(this.userApp).subscribe(
      (response) => {this.userApp = response},
      (response) => {console.log("error")}


    )

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
