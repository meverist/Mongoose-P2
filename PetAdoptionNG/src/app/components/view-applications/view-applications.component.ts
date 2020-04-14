import { Component, OnInit, ApplicationInitStatus } from '@angular/core';
import { Application } from '../../models/application';
import {LogInService } from '../../services/log-in.service';

@Component({
  selector: 'app-view-applications',
  templateUrl: './view-applications.component.html',
  styleUrls: ['./view-applications.component.css']
})
export class ViewApplicationsComponent implements OnInit {

  constructor(private callService: LogInService) { }

  ngOnInit(): void {

    this.createApps();
  }

  applications :Array<Application>=[];

  //Testing funciton, can remove once databse functionality has been brought in.
  createApps() {

    this.callService.allApplication().subscribe(
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

    this.callService.deleteAllButApplication(appAcc.petID, appAcc.userID).subscribe(

      (response) =>{
      console.log(response);
      },
      (response) => {
        console.log(response);
      }
    )

  }
  //Takes the current application in the list and rejects it. 
  rejectApp(rejApp :Application){

     this.callService.deleteApplicaiton(rejApp.appId).subscribe(
      (response) =>{
        console.log(response);
        },
        (response) => {
          console.log(response);
        }


     )

  }

}
