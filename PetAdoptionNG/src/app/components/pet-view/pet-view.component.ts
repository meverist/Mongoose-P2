import { Component, OnInit } from '@angular/core';

import {Pet} from '../../models/Pet';
import { UserinfoService } from 'src/app/services/userinfo.service';

@Component({
  selector: 'app-pet-view',
  templateUrl: './pet-view.component.html',
  styleUrls: ['./pet-view.component.css']
})

export class PetViewComponent implements OnInit {
  index: number = 0;
  pets: Array<Pet> = [];
  hideNext = true;
  hidePrev = true;
  constructor(private data :UserinfoService) { }
 
  ngOnInit(): void {
    let pet1: Pet = new Pet(1,"Bo","dog","lab",3,50,"healthy","I love to play",1,"pic.com");
    let pet2: Pet = new Pet(1,"Zo","doog","laab",30,55,"healthys","I love to plays",1,"pic.coms");
    let pet3: Pet = new Pet(1,"Lo","dooog","laaab",31,56,"healthyss","I love to playss",1,"pic.comss");

    this.pets.push(pet1,pet2,pet3);
  }

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
  }

  prevPet(){
    if(this.index==0){
      this.hidePrev=false;
    }else{
    --this.index;
      this.hideNext=true;
    }
   }
}