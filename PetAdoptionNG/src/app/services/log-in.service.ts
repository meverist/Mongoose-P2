/**
 * Francisco Radilla Greer
 * 
 * Note I will be using this service for log in and registration.
 */
import { Injectable } from '@angular/core';

/**
 * HTTP setup
 * 1. Inside app.module.ts need to import HttpClientModule and add it to imports
 * 2. Also need to add this service to the providers in app.module.ts
 * 3. Import HttpClient, HttpHeaders and Observable
 * 4. Add HttpClient to the constructor must be private 
 * 5. Add a private variable that creates a HttpHeaders object with a content type of json
 * 6. Create the method of your choosing based on the HTTP method 
 */
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

import { Adopter } from '../models/Adoptor'

@Injectable({
  providedIn: 'root'
})
export class LogInService {

  constructor(private http :HttpClient) { }

  private headers = new HttpHeaders({'content-Type':'application/json'});

  //Log in 
  checkAdopter(adop: Adopter) :Observable<Adopter> {
    return this.http.post<Adopter>("", adop, {headers: this.headers});
  }

  //Register
  addAdopter(adop: Adopter) :Observable<Adopter> {
    return this.http.post<Adopter>("", adop, {headers: this.headers});
  }

}
