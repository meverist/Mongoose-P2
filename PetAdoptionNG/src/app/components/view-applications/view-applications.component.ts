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

  ngOnInit(): void {
    var hold;
    this.data.userCurrentMessage.subscribe(info => hold = info);
    this.user = JSON.parse(hold);
    this.person = JSON.parse(hold).name;
    
    if(this.user.userRole == 'Employee') {
      this.isEmployee = true;
      this.viewEApps();
    } else {
      this.isEmployee = false;
      this.viewAApps();
    }
  }
  user :Adopter;
 
  applications :Array<Application>=[];

  isEmployee :boolean;
  view :boolean = false;
  person :string;

  message1 :string; //for employee message
  message2 :string; //for adopter message

  //Variable so that the adopter can change information
  appReferences :string;
  appPetsOwned :string;
  appChildren :string;
  appComments :string;

  //Testing funciton, can remove once databse functionality has been brought in.
  viewEApps() {
    this.callService.allApplication().subscribe(
      (response) => {
        this.applications = response;
        //console.log(this.applications);
      },
      (response) => {
        console.log("Cannot retrieve applications")
      }
    )
  }

  viewAApps() {
    this.callService.userApplication(this.user.userId).subscribe(
      (response) => {
        this.applications = response;
      },
      (response) => {
        console.log("Cannot retrieve applications")
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
    if(rejApp.appstatus != 'approved') {
     this.callService.deleteApplicaiton(rejApp.appId).subscribe(
      (response) =>{
        console.log("Deletion was successful");
        this.message1 = "Application was successful deleted";
        this.message2 = "Application was successful deleted";
        },
        (response) => {
          console.log(response);
        }
     );
    } else {
      this.message1 = "Can not remove!";
      this.message2 = "Can not remove!";
      console.log("Cannot remove");
    }
  }

  //Used to display the update boxes or not
  updateApp() {
    this.view = !this.view;
  }

  submitApp(upjApp :Application) {
    upjApp.appChildren = this.appChildren;
    upjApp.appPetsOwned = this.appPetsOwned;
    upjApp.appReference = this.appReferences;
    upjApp.appComment = this.appComments; 

    console.log(upjApp);

    this.callService.makeApplication(upjApp).subscribe(
      (resp) => {
        console.log("Application was sent");
        this.message2 = "Application updated successfully!";
      },
      (resp) => {
        console.log("Failed to add application");
        this.message2 = "Failed to add application";
      }
    );
  }

  //basic navigation functions
  viewApp() {
    this.router.navigate(['/view-applications']);
  }

  addPet() {
    this.router.navigate(['/employee-add-pet']);
  }

  viewPets() {
    this.router.navigate(['/pet-view']);
  }

  account() {
    this.router.navigate(['/account']);
  }

  logOut() {
    this.data.changeUserMessage(null);
    this.data.changePetMessage(null);
    this.router.navigate(['/welcome']);
  }
}
