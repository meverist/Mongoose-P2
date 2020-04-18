import { Component, OnInit } from '@angular/core';
import { Application } from '../../models/application';
import { Adopter } from 'src/app/models/Adoptor';
import { Pet } from 'src/app/models/Pet';

import { Router } from '@angular/router';

import { UserinfoService } from 'src/app/services/userinfo.service';
import { LogInService } from 'src/app/services/log-in.service';


@Component({
  selector: 'app-create-application',
  templateUrl: './create-application.component.html',
  styleUrls: ['./create-application.component.css']
})
export class CreateApplicationComponent implements OnInit {

  constructor(private data :UserinfoService, public router: Router, private logService :LogInService) { }

  ngOnInit(): void {
    var hold;
    this.data.petCurrentMessage.subscribe(info => hold = info);
    
    if (hold == "Pet message") {
      var data = localStorage.getItem('Pet');
      this.peti= JSON.parse(data);
    } else {
      this.peti = JSON.parse(hold);
    }
    
    this.data.userCurrentMessage.subscribe(info => hold = info);
   
    if (hold == "User message") {
      var data = localStorage.getItem('Pass');
      this.user = JSON.parse(data);
      this.person = JSON.parse(data).userName;
    } else {
      this.user = JSON.parse(hold);
      this.person = JSON.parse(hold).userName;
    }


  }

  userApp :Application ;

  appReferences :string;
  appPetsOwned :string;
  appChildren :string;
  appComments :string;
  user :Adopter;
  peti :Pet;

  person:string;
  message :string;

  submitApp(){
    this.userApp = new Application(null,
                                   this.appReferences,
                                   this.appPetsOwned,
                                   this.appChildren,
                                   this.appComments,
                                   "pending",
                                   this.user,
                                   this.peti);
    

    this.logService.makeApplication(this.userApp).subscribe(
      (resp) => {
        
        if (this.user.userRole == 'Adopter') {
          this.router.navigate(['/adop-screen']);
        } else {
          this.router.navigate(['/empl-screen']);
        }
      },
      (resp) => {
        
        this.message = "Failed to add application";
      }
    );
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

  viewApplications() {
    this.router.navigate(['/view-applications']);
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
