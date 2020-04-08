import { Component, OnInit, ApplicationInitStatus } from '@angular/core';
import { Application } from '../../models/application';

@Component({
  selector: 'app-view-applications',
  templateUrl: './view-applications.component.html',
  styleUrls: ['./view-applications.component.css']
})
export class ViewApplicationsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  applications :Array<Application>=[];


  createApps() {

    let app1 :Application = new Application(1,"Pepper",1,"Mat","Everyone","none","none", "I need 1 dog");

    
    let app2 :Application = new Application(1,"Missy",1,"Own1","Everyone","cats","2", "I need 2 dog");
    let app3 :Application = new Application(1,"Tanner",1,"Own2","Everyone","birds","3", "I need 3 dog");
    let app4 :Application = new Application(1,"Zoey",1,"Own3","Everyone","none","5", "I need 4 dog");
    let app5 :Application = new Application(1,"Raya",1,"Own4","Everyone","none","10", "I need 5 dog");

    this.applications.push(app1,app2,app3,app4,app5);



  }

  acceptApp(appAcc :Application){

    console.log(appAcc);

  }

  rejectApp(rejApp :Application){

      console.log(rejApp);

  }

}
