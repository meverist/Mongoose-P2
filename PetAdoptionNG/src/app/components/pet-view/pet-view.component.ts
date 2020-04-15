import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { Pet } from '../../models/Pet';

import {LogInService} from '../../services/log-in.service';
import { UserinfoService } from 'src/app/services/userinfo.service';

@Component({
  selector: 'app-pet-view',
  templateUrl: './pet-view.component.html',
  styleUrls: ['./pet-view.component.css']
})

export class PetViewComponent implements OnInit {

  constructor(private data :UserinfoService, public router: Router, private serviceCaller: LogInService) { }
 
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

   popPetArray() {
    this.serviceCaller.retrieveAllPets().subscribe(
      (response) => {
        this.pets = response;
        console.log(this.pets);
      },
      (response) => {
        console.log("server error");
      }
    )
   }
}