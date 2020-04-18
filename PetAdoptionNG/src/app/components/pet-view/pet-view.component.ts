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
    this.data.userCurrentMessage.subscribe((info) => (hold = info));
    console.log(hold);
    this.user = JSON.parse(hold);
    this.person = JSON.parse(hold).userName;
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

  //Code to populate pet pic array with null values
  //That was you can implement a base picture if not imported correctly
  // petPicx: PetPic[] = [];
  // defaultPetPic: PetPic = new PetPic(
  //   1,
  //   "https://developers.google.com/maps/documentation/maps-static/images/error-image-generic.png",
  //   "comment",
  //   null
  // );

  person:string;

  adoptMe() {
    this.data.changePetMessage(this.pets[this.index]);
    this.router.navigate(["/create-application"]);
  }

  reject() {
    this.serviceCaller.deletePet(this.pets[this.index].petId).subscribe(
      (response) => {
        console.log(response);
        this.message = "Deletion successful";
      },
      (response) => {
        console.log("Deletion error");
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
          console.log("system error");
        }
      );
    }
    console.log(this.petPics);
  }
  retrievePicByPet(pet: Pet): string {
    let index: number = this.pets.indexOf(pet);

    return this.petPics[index][0].piclink;
  }

  popPetArray() {
    this.serviceCaller.retrieveAllPetsNoOwner().subscribe(
      (response) => {
        this.pets = response;
        console.log(this.pets);
        this.popPetPics(this.pets);
        console.log(this.petPics);
      },
      (response) => {
        console.log("server error");
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
}
