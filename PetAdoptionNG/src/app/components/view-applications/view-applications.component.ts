import { Component, OnInit, ApplicationInitStatus } from '@angular/core';
import { Application } from '../../models/application';
import { Router } from '@angular/router';

import { LogInService } from '../../services/log-in.service';
import { UserinfoService } from 'src/app/services/userinfo.service';
import { Adopter } from 'src/app/models/Adoptor';

@Component({
  selector: 'app-view-applications',
  templateUrl: './view-applications.component.html',
  styleUrls: ['./view-applications.component.css']
})
export class ViewApplicationsComponent implements OnInit {

  constructor(private data :UserinfoService,
              public router: Router,
              private callService: LogInService) { }

  user :Adopter;
  isEmployee :boolean;

  ngOnInit(): void {
    var hold;
    this.data.userCurrentMessage.subscribe(info => hold = info);
    this.user = JSON.parse(hold);
    
    if(this.user.userRole == 'Employee') {
      this.isEmployee = true;
      this.viewEApps();
    } else {
      this.isEmployee = false;
      this.viewAApps();
    }

    
  }

  applications :Array<Application>=[];

  //Testing funciton, can remove once databse functionality has been brought in.
  viewEApps() {
    this.callService.allApplication().subscribe(
      (response) => {
        this.applications = response;
      },
      (response) => {
        console.log("Cannot retrieve applicaitons")
      }
    )
  }

  viewAApps() {
    this.callService.userApplication(this.user.userId).subscribe(
      (response) => {
        this.applications = response;
      },
      (response) => {
        console.log("Cannot retrieve applicaitons")
      }
    )
  }

  //Takes the current applicaiton in the list that was accepted
  acceptApp(appAcc :Application){
    this.callService.deleteAllButApplication(appAcc.pet.petId, appAcc.user.userId).subscribe(
      (response) =>{
        console.log("Successfully deleted");
      },
      (response) => {
        console.log(response);
      }
    );

    var user = appAcc.user;
    var pet = appAcc.pet;

    pet.petOwner = user;

    this.callService.updatePet(pet).subscribe(
      (response) =>{
        console.log(response);
      },
      (response) => {
        console.log(response);
      }
    );

    appAcc.appstatus = "approved";

    this.callService.updateApp(appAcc).subscribe(
      (response) =>{
        console.log(response);
      },
      (response) => {
        console.log(response);
      }
    );
  }

  //Takes the current application in the list and rejects it. 
  rejectApp(rejApp :Application){

     this.callService.deleteApplicaiton(rejApp.appId).subscribe(
      (response) =>{
        console.log("Deletion was successful");
        //location.reload();
        },
        (response) => {
          console.log(response);
        }
     )

  }

}
