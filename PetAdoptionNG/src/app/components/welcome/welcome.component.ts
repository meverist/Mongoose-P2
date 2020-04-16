import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(public router: Router) { 
    
  }

  ngOnInit(): void {
  }
  login()
  {
    this.router.navigate(['/login']);
  }
  userregister()
  {
    this.router.navigate(['/userregister']);
  }

}
