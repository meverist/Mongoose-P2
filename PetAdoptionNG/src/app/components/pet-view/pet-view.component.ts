import { Component, OnInit } from '@angular/core';
import {Pet} from '../../models/Pet';
import {LogInService} from '../../services/log-in.service';

@Component({
  selector: 'app-pet-view',
  templateUrl: './pet-view.component.html',
  styleUrls: ['./pet-view.component.css']
})
export class PetViewComponent implements OnInit {

  constructor(private serviceCaller: LogInService) { }
 
  ngOnInit(): void {

    this.popPetArray();
  }
  index: number = 0;
  pets: Array<Pet> = [];
  hideNext = true;
  hidePrev = true;


    nextPet() {
   if(this.index==this.pets.length-1){
     this.hideNext=false;
   }else{
      ++this.index;
      this.hidePrev=true;
   }

  }
   prevPet(){
    if(this.index==0){
      this.hidePrev=false;
    }else{
    --this.index;
      this.hideNext=true;
    }
   }

   popPetArray() {

    this.serviceCaller.retrieveAllPets().subscribe(
      (response) => {
        this.pets = response;
      },
      (response) => {
        console.log("server error");
      }
    )
   }
}