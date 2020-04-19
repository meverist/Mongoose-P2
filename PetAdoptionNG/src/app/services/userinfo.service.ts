import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { Adopter } from '../models/Adoptor';
import { Pet } from '../models/Pet';

@Injectable({
  providedIn: 'root'
})
export class UserinfoService {

  private userSource = new BehaviorSubject('User message');
  userCurrentMessage = this.userSource.asObservable();

  private petSource = new BehaviorSubject('Pet message');
  petCurrentMessage = this.petSource.asObservable();

  constructor() { }

  changeUserMessage(info :Adopter) {
    this.userSource.next(JSON.stringify(info));
    
  }

  changePetMessage(info :Pet) {
    this.petSource.next(JSON.stringify(info));
    
  }
}
