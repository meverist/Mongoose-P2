import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { Pet } from '../../models/Pet';

import {LogInService} from '../../services/log-in.service';
import { UserinfoService } from 'src/app/services/userinfo.service';
import { Adopter } from 'src/app/models/Adoptor';

@Component({
  selector: 'app-pet-view',
  templateUrl: './pet-view.component.html',
  styleUrls: ['./pet-view.component.css']
})

export class PetViewComponent implements OnInit {

  constructor(private data :UserinfoService, public router: Router, private serviceCaller: LogInService) { }
 
  ngOnInit(): void {
    var hold;
    this.data.userCurrentMessage.subscribe(info => hold = info);
    this.user = JSON.parse(hold);
    this.person = JSON.parse(hold).userName;
    if(this.user.userRole == 'Employee') {
      console.log("Yep employee");
      this.isEmployee = true;
    } else {
      this.isEmployee = false;
    }

    this.popPetArray();
  }

  index: number = 0;
  pets: Array<Pet> = [];
  hideNext = true;
  hidePrev = true;

  user :Adopter;
  isEmployee :boolean;
  message :string;
  person:string;

  nextPet() {
   if(this.index==this.pets.length-1){
     this.hideNext=false;
   }else{
      ++this.index;
      this.hidePrev=true;
   }
  }

  adoptMe() {
    this.data.changePetMessage(this.pets[this.index]);
    this.router.navigate(['/create-application']);
  }

  prevPet(){
    if(this.index==0){
      this.hidePrev=false;
    }else{
    --this.index;
      this.hideNext=true;
    }
   }

   reject() {
    
    this.serviceCaller.deletePet(this.pets[this.index].petId).subscribe(
      
      (response) => {
        console.log(response);
        this.message = "Deletion successful"
      },
      (response) => {
        console.log("Deletion error");
        this.message = "Deletion Failed!";
      }
    )
   }

   popPetArray() {
    this.serviceCaller.retrieveAllPetsNoOwner().subscribe(
      (response) => {
        this.pets = response;
        console.log(this.pets);
      },
      (response) => {
        console.log("server error");
      }
    )
   }
   viewApp() {
    this.router.navigate(['/view-applications']);
  }

  addPet() {
    this.router.navigate(['/employee-add-pet']);
  }

  viewPets() {
    this.router.navigate(['/pet-view']);
  }

  logOut() {
    this.data.changeUserMessage(null);
    this.data.changePetMessage(null);
    this.router.navigate(['/welcome']);
  }
  createAppointment() {
    //WOP
  }
}