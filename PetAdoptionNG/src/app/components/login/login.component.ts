import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Adopter } from '../../models/Adoptor';
import {  Router } from '@angular/router'   //allow for component to change component step 1
import { LogInService } from '../../services/log-in.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  /**
   * With this constructor we needed to add two parameters to make certain features 
   * work.
   * @param router Router allows us to switch components using typescript
   * @param logService This service transfers information using http and returns info 
   */
  constructor(
    public router: Router,     //step 2
    private logService :LogInService
  ) { }

  ngOnInit(): void {
  }

  /**
   * These variable are used to create a fake Adopter object so that we can 
   * easily send over the user email and password.
   */
  username :string;
  useremail :string;
  userpassword :string;
  userrole :string;
  userinfo :string;
  
  invalid :boolean = false;
  result :string;

  @Output() sendToParent = new EventEmitter<Adopter>();

  goAdopter() {
    this.router.navigate(['/adop-screen']);   //step 3
  }

  goEmployee() {
    this.router.navigate(['/empl-screen']);
  }

  /**
   * This method will be used to get the input from the web page and sent it to the backend.
   * Once a object reuslt is returned we use that to send it to the next component.
   */
  logIn() {

    if(!this.valid()) {
      this.result = "Your email or password does not exist. Try again!";
    } else {
      var adopter = new Adopter("sending", this.useremail, this.userpassword, "Adopter", "sending");
      console.log(adopter);
      this.sendToParent.emit(adopter);
      // this.logService.checkAdopter(adopter).subscribe(
      //   (resp) => {
      //     console.log(resp);

      //     adopter = resp;
      //     if(adopter.userrole == 'employee') {
      //       this.router.navigate(['/empl-screen']);
      //     } else {
      //       this.router.navigate(['/adop-screen']);
      //     }
      //   },
      //   (resp) => {
      //     console.log("Failed to add Auzorithe the user!");
      //     console.log(resp);
      //   }
      // );
    }
  }

  /**
   * This function is used for input validation. It makes sure that every field is
   * not empty and is not undefined.
   */
  valid() :boolean {
    if(this.useremail == undefined || this.useremail == "" ||
    this.userpassword == undefined || this.userpassword == "") {
      console.log(this.userpassword);
      console.log(this.useremail);
      this.invalid = false;
      return this.invalid;
    } else {
      this.invalid = true;
      return this.invalid;
    }
  }

}
