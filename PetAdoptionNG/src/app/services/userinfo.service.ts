import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Adopter } from '../models/Adoptor';

@Injectable({
  providedIn: 'root'
})
export class UserinfoService {

  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(info :Adopter) {
    this.messageSource.next(JSON.stringify(info));
  }
}
