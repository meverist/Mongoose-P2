import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Router } from '@angular/router';

import { Pet } from "src/app/models/Pet";
import { Adopter } from "src/app/models/Adoptor";

import { LogInService } from "../../services/log-in.service";

@Component({
  selector: "app-employee-add-pet",
  templateUrl: "./employee-add-pet.component.html",
  styleUrls: ["./employee-add-pet.component.css"],
})
export class EmployeeAddPetComponent implements OnInit {
  constructor(public router: Router, private callService: LogInService) {}

  ngOnInit(): void {}

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

  message :string;

  addPet() {
    console.log("called add pet");
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
        this.petOwner,
        this.petPic);

        


 
        this.addPetSend(p).subscribe(
          (response)=>{
            console.log(response);
          },
        (response)=>{
          console.log("something went !#@$");

        this.petPic,
        null
      )

      this.callService.createPet(p).subscribe(
        (response) => {
          console.log(response);
          this.router.navigate(['/empl-screen']);

        },
        (response) => {
          console.log("failure " + response);
          this.message = "Failed to add pet";

        }
      );
    }
  }

  validateInputFields(): boolean {
    if (
      this.petName == "" ||
      this.petName == undefined ||
      this.petType == undefined ||
      this.petType == "" ||
      this.petBreed == undefined ||
      this.petBreed == "" ||
      this.petAge == undefined ||
      this.petWeight == undefined ||
      this.petMedInfo == undefined ||
      this.petMedInfo == "" ||
      this.petAboutMe == undefined ||
      this.petAboutMe == ""
    ) 
    {
      console.log("Invalid Inputs");
      return false;
    } else{
    console.log("valid Inputs");
    return true;
    }
  }
}
