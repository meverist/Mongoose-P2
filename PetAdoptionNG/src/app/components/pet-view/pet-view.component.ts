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

    if (this.user.userRole == "Employee") {
      this.isEmployee = true;
    } else {
      this.isEmployee = false;
    }
    this.petPicx.push(this.defaultPetPic);
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

  petPicx: PetPic[] = [];
  defaultPetPic: PetPic = new PetPic(
    1,
    "https://developers.google.com/maps/documentation/maps-static/images/error-image-generic.png",
    "comment",
    null
  );

  nextPet() {
    if (this.index == this.pets.length - 1) {
      //this.hideNext=false;
      this.index = 0;
    } else {
      ++this.index;
      this.hidePrev = true;
    }
  }

  adoptMe() {
    this.data.changePetMessage(this.pets[this.index]);
    this.router.navigate(["/create-application"]);
  }

  prevPet() {
    if (this.index == 0) {
      //this.hidePrev=false;
      this.index = this.pets.length - 1;
    } else {
      --this.index;
      this.hideNext = true;
    }
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

    console.log(this.petPicx);

    for (let i = 0; i < pet.length; i++) {
      console.log(pet[i]);
      this.serviceCaller.retrievePetPics(pet[i].petId).subscribe(
        
        (result) => {
          if (Object.keys(result).length === 0) {
            this.petPics.unshift(this.petPicx);
          } else {
            this.petPics.unshift(result);
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
}
