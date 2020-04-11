import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emplscreen',
  templateUrl: './emplscreen.component.html',
  styleUrls: ['./emplscreen.component.css']
})
export class EmplscreenComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  viewApp() {
    this.router.navigate(['/view-applications']);
  }

  addPet() {
    this.router.navigate(['/employee-add-pet']);
  }

  viewPets() {
    this.router.navigate(['/pet-view']);
  }
}
