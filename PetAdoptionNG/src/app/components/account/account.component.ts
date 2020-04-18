import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { UserinfoService } from 'src/app/services/userinfo.service';
import { LogInService } from 'src/app/services/log-in.service';

import { Adopter } from 'src/app/models/Adoptor';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(public router: Router,
              private data :UserinfoService,
              private logService :LogInService) { }

  ngOnInit(): void {
    var hold;
    this.data.userCurrentMessage.subscribe(info => hold = info);
    console.log(hold);
    if (hold == "User message") {
      var data = localStorage.getItem('Pass');
      this.person = JSON.parse(data);
    } else {
      this.person = JSON.parse(hold);
    }
  }

  person :Adopter;

  newPass :string;
  newPass2 :string;
  currPass :string;
  aboutme :string;

  message :string; //Password message
  message2 :string; //Aboutme message

  /*
  * With this method it will test the current password to make sure
  * the current user is the owner. Then make sure the owner remembers 
  * their new password by makeing it type again.
  */
  updatePass() {
    if (this.valid()) {
      
    } else if (this.currPass == this.person.userPassword) {
      this.person.userPassword = this.newPass;
      this.logService.addAdopter(this.person).subscribe(
        (resp) => {
          console.log("Was updated");
          this.message = "The password was changed!";
        },
        (resp) => {
          console.log("Failed to add Adopter");
          this.message = "Failed to change password!";
          console.log(resp);
        }
      );
    } else {
      this.message = "Failed to confirm identity!";
    }
  }

  valid() :boolean {
    if(this.currPass == undefined || this.currPass == "" ||
       this.newPass == undefined || this.newPass == "" ||
       this.newPass2 == undefined || this.newPass2 == "") {
      this.message = "Information not filled out properly";
      return true;
    } else if (this.newPass != this.newPass2) {
      this.message ="Confirmation password no match";
      return true;
    } else {
      return false;
    }
  }

  updateAboutme() {
    if (this.aboutme == undefined || this.aboutme == "") {
      this.message2 = "This text box is empty!";
    } else {
      this.person.userInfo = this.aboutme;
      this.logService.addAdopter(this.person).subscribe(
        (resp) => {
          this.message2 = "Successfully updated";
        },
        (resp) => {
          console.log("Failed to update Adopter");
        }
      );
    }
  }

  logOf() {
    this.data.changeUserMessage(null);
    this.data.changePetMessage(null);
    this.router.navigate(['/welcome']);
  }

  return() {
    if(this.person.userRole == 'Employee') {
      this.router.navigate(['/empl-screen']);
    } else {
      this.router.navigate(['/adop-screen']);
    }

  }

}
