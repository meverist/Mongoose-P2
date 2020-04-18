import { Component, OnInit } from "@angular/core";

import { Router } from "@angular/router";

import { Pet } from "../../models/Pet";

import { LogInService } from "../../services/log-in.service";
import { UserinfoService } from "src/app/services/userinfo.service";
import { Adopter } from "../../models/Adoptor";
import { PetPic } from "../../models/PetPic";

@Component({
  selector: "app-pet-view",
  templateUrl: "./pet-view.component.html",
  styleUrls: ["./pet-view.component.css"],
})

export class PetViewComponent implements OnInit {
  constructor(
    private data: UserinfoService,
    public router: Router,
    private serviceCaller: LogInService
  ) {}

  ngOnInit(): void {
    var hold;
    this.data.userCurrentMessage.subscribe(info => hold = info);
   
    if (hold == "User message") {
      var data = localStorage.getItem('Pass');
      this.user = JSON.parse(data);
      this.person = this.user.userName;
    } else {
      this.user = JSON.parse(hold);
      this.person = this.user.userName;
    }
    
    if(this.user.userRole == 'Employee') {
      this.isEmployee = true;
    } else {
      this.isEmployee = false;
    }
    //this.petPicx.push(this.defaultPetPic);
    this.popPetArray();
  }

  index: number = 0;
  pets: Array<Pet> = [];
  petPics: PetPic[][] = [];
  hideNext = true;
  hidePrev = true;

  user: Adopter;
  isEmployee: boolean;
  message: string;

  person:string;

  adoptMe(pet: Pet) {
    localStorage.setItem('Pet', JSON.stringify(pet));
    this.data.changePetMessage(pet);
    this.router.navigate(["/create-application"]);
  }

  reject(pet: Pet) {
    
    this.serviceCaller.deletePet(pet.petId).subscribe(
      (response) => {
        
        this.message = "Deletion successful";
      },
      (response) => {
        
        this.message = "Deletion Failed!";
      }
    );
  }
  popPetPics(pet: Pet[]) {
    //Pet Pics has to return an array of images per pet
    //Default pet pic if nothing is found, is put in the table.

    for (let i = 0; i < pet.length; i++) {
      
      this.serviceCaller.retrievePetPics(pet[i].petId).subscribe(
        
        (result) => {
          
          if (Object.keys(result).length === 0) {
            //This code is being saved for future use creating a pet picture array
            //Do not have the time to create an array now
            //this.petPics.unshift(this.petPicx);
            this.pets[i].petPic = "https://developers.google.com/maps/documentation/maps-static/images/error-image-generic.png"


          } else {
            //this.petPics.unshift(result);
            this.pets[i].petPic = result[0].piclink;

          }
        },
        (result) => {
          
        }
      );
    }
    
  }
  retrievePicByPet(pet: Pet): string {
    let index: number = this.pets.indexOf(pet);

    return this.petPics[index][0].piclink;
  }

  popPetArray() {
    this.serviceCaller.retrieveAllPetsNoOwner().subscribe(
      (response) => {
        this.pets = response;
        
        this.popPetPics(this.pets);
        
      },
      (response) => {
        
      }
    );
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
  account() {
    this.router.navigate(['/account']);
  }
}
