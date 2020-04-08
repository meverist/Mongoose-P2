import { Component, OnInit } from '@angular/core';
import { Pet } from 'src/app/models/Pet';
import {HttpClient} from '@angular/common/http';
import { PetServiceService } from 'src/app/Services/pet-service.service';
@Component({
  selector: 'app-employee-add-pet',
  templateUrl: './employee-add-pet.component.html',
  styleUrls: ['./employee-add-pet.component.css']
})
export class EmployeeAddPetComponent implements OnInit {

  constructor(private petService: PetServiceService) { }

  petID:number;
  petName: string;
  petType: string;
  petBreed: string;
  petAge: number;
  petWeight: number;
  petMedInfo: string;
  petAboutMe: string;
  petOwner: number;
  ngOnInit(): void {
  }
  addPet()
  {
    if (this.validateInputFields)
    {
      let p = new Pet(this.petID,
        this.petName,
        this.petType,
        this.petBreed,
        this.petAge,
        this.petWeight,
        this.petMedInfo,
        this.petAboutMe,
        this.petOwner);
      this.petService.addPet(p).subscribe(
        (response)=>{
          console.log(response);
        },
      (response)=>{
        console.log("something went !#@$");
      }
      );
    }
  }
  validateInputFields(): boolean{

    if (this.petID == undefined || 
      this.petName == "" ||  this.petName == undefined ||
      this.petType == undefined || this.petType == "" ||
      this.petBreed== undefined || this.petBreed== "" ||
      this.petAge== undefined ||
      this.petWeight== undefined ||
      this.petMedInfo == undefined || this.petMedInfo == "" ||
      this.petAboutMe == undefined || this.petAboutMe == "" ||
    this.petOwner == undefined)
    {
      return false;
    }
    return true;
  }
}
