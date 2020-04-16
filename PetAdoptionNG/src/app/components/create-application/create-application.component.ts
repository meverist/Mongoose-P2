import { Component, OnInit } from '@angular/core';
import { Application } from '../../models/application';
import { NgModel } from '@angular/forms';
import { LogInService } from '../../services/log-in.service';

import { UserinfoService } from 'src/app/services/userinfo.service';

@Component({
  selector: 'app-create-application',
  templateUrl: './create-application.component.html',
  styleUrls: ['./create-application.component.css']
})
export class CreateApplicationComponent implements OnInit {

  constructor(private callService: LogInService, private data :UserinfoService) { }

  ngOnInit(): void {
    var hold;
    this.data.petCurrentMessage.subscribe(info => hold = info);
    this.petID = JSON.parse(hold).petID;
    this.pet = JSON.parse(hold).petName;
  }

  userApp :Application ;

  petID: number;
  references :string;
  currentPets :string;
  children :string;
  comments :string;
  pet :string;
  //Changes the userApp variable to contain the application details
  //Will need to be sent to the backend
  



  submitApp(){
    var hold;
    this.data.petCurrentMessage.subscribe(info => hold = info);
    //this.userApp = new Application(undefined,this.petID,undefined,userid,username,appreferences,apppetsowned,appchildre,appcomments);



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
