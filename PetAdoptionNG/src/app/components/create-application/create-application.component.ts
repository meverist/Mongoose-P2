import { Component, OnInit } from '@angular/core';
import { Application } from '../../models/application';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-create-application',
  templateUrl: './create-application.component.html',
  styleUrls: ['./create-application.component.css']
})
export class CreateApplicationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  userApp :Application;

  petID: number;
  references :string;
  currentPets :string;
  children :string;
  comments :string;

  submitApp(){

    this.userApp = new Application(this.petID,null,0,null,this.references,this.currentPets,this.children,this.comments);

    console.log(this.userApp);

  }


}
