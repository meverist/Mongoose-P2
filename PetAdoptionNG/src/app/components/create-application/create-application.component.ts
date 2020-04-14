import { Component, OnInit } from '@angular/core';
import { Application } from '../../models/application';

import { UserinfoService } from 'src/app/services/userinfo.service';

@Component({
  selector: 'app-create-application',
  templateUrl: './create-application.component.html',
  styleUrls: ['./create-application.component.css']
})
export class CreateApplicationComponent implements OnInit {

  pet :string;

  constructor(private data :UserinfoService) { }

  ngOnInit(): void {
    var hold;
    this.data.petCurrentMessage.subscribe(info => hold = info);
    this.petID = JSON.parse(hold).petID;
    this.pet = JSON.parse(hold).petName;
  }

  userApp :Application;

  petID: number;
  references :string;
  currentPets :string;
  children :string;
  comments :string;

  submitApp(){
    var hold;
    this.data.petCurrentMessage.subscribe(info => hold = info);
    this.userApp = new Application(this.petID,null,0,null,this.references,this.currentPets,this.children,this.comments);

    console.log(this.userApp);

  }


}
