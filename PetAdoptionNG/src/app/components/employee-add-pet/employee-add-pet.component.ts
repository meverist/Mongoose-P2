import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Router } from '@angular/router';

import { Pet } from "src/app/models/Pet";
import { Adopter } from "src/app/models/Adoptor";
import { UserinfoService } from 'src/app/services/userinfo.service';
import { LogInService } from "../../services/log-in.service";
import { PetPic } from "src/app/models/PetPic";
import { createComponent } from '@angular/compiler/src/core';

@Component({
  selector: "app-employee-add-pet",
  templateUrl: "./employee-add-pet.component.html",
  styleUrls: ["./employee-add-pet.component.css"],
})
export class EmployeeAddPetComponent implements OnInit {
  constructor(public router: Router, private callService: LogInService,
    private data :UserinfoService) {}

  ngOnInit(): void {

    var hold;
    this.data.userCurrentMessage.subscribe(info => hold = info);
    
    if (hold == "User message") {
      var data = localStorage.getItem('Pass');
      this.person = JSON.parse(data).userName;
    } else {
      this.person = JSON.parse(hold).userName;
    }
  }

  petpicture: PetPic;
  petRet: Pet;
  file: Blob;
  imgurPic: Object;

  petID: number;
  petName: string;
  petType: string;
  petBreed: string;
  petAge: number;
  petWeight: number;
  petMedInfo: string;
  petAboutMe: string;
  petOwner: number;
  petPic: string;
  owner: Adopter;

  person :string;
  message: string;

  fileEvent(fileInput) {
    var file = fileInput.target.files[0];
    this.file = file;

    var reader = new FileReader();
    var result;
    reader.readAsBinaryString(file);

    reader.onload = function () {
      result = reader.result;
    };
  }

  CreatePet(){

    if (this.validateInputFields()) {
      let p = new Pet(
        this.petID,
        this.petName,
        this.petType,
        this.petBreed,
        this.petAge,
        this.petWeight,
        this.petMedInfo,
        this.petAboutMe,
        this.petPic,
        this.owner
      );

      this.callService.createPet(p).subscribe(
        (response) => {
          this.petRet = response;
         
          if(this.file == undefined) {
            this.message = "Pet was added but no picture!";
          } else {
            this.uploadFile();
          }
          
        },
        (response) => {
         
          
        }
      );
    }
  }

  uploadFile() {
    this.callService.uploadImg(this.file).subscribe(
      (result) => {
        this.imgurPic = result;
        this.addPetPic();
        
      },
      (result) => {
        
        this.imgurPic = result; 
      }
    );
  }

  addPetPic(){
    if(this.petRet != undefined){
      this.petpicture = new PetPic(
        undefined,
        this.imgurPic["data"]["link"],
        null,
        this.petRet
      );
        this.callService.createPetPic(this.petpicture).subscribe(
          (result) => {
            this.message = "Successfully added pet";
          },(result)=>{
            
            this.message = "Could not add pet";
          }
        );
    }
  }

  validateInputFields(): boolean {
    if (
      this.petName == undefined || this.petName == "" ||
      this.petType == undefined || this.petType == "" ||
      this.petBreed == undefined || this.petBreed == "" ||
      this.petAge == undefined ||
      this.petWeight == undefined ||
      this.petMedInfo == undefined || this.petMedInfo == "" ||
      this.petAboutMe == undefined || this.petAboutMe == "") {
      this.message = "Not all fields filled!";
      
      return false;
    } else {
      
      return true;
    }
  }

  viewApp() {
    this.router.navigate(['/view-applications']);
  }

  addPets() {
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
