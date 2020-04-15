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
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';

import { Adopter } from '../models/Adoptor'
import { Application } from '../models/application'
import { Pet } from '../models/Pet'

@Injectable({
  providedIn: 'root'
})
export class LogInService {

  url: string;

  constructor(private http :HttpClient) {
    this.url = "http://localhost:8080";
   }

  private headers = new HttpHeaders({'content-Type':'application/json'});

  //Log in  -- Tested 4/13/2020
  checkAdopter(adop: Adopter) :Observable<Adopter> {
    return this.http.post<Adopter>(this.url+"/paduser/login", adop, {headers: this.headers});
  }

  //Register -- Tested 4/13/2020
  addAdopter(adop: Adopter) :Observable<Adopter> {
    return this.http.post<Adopter>(this.url+"/paduser", adop, {headers: this.headers});
  }
  //Get all applications  -- Untested 4/13/2020
  allApplication() :Observable<Application[]> {
    return this.http.get<Application[]>(this.url+"/padapplication");
  }
  //Get application by User -- Untested 4/13/2020
  userApplication(userId: number) :Observable<Application[]>{
    return this.http.get<Application[]>(this.url+"/padapplication/"+userId)

  }
  //NOT GOING TO WORK HOW I HAVE IT SETUP BACKEND, NEEDS A REWORK
  //Untested 4/13/2020
  deleteApplicaiton(padId: number) :Observable<Object>{
    return this.http.delete(this.url+"/padapplicaiton/"+padId);
  }
  //Delete application by userID and petID
  //Untested 4/13/2020
  deleteAllButApplication(petId: number, userId: number) :Observable<Object> {
    
    let params = new HttpParams;
    params = params.append('petId', petId.toString());
    params = params.append('userId', userId.toString());
    
    return this.http.delete(this.url+"/padapplication/excluding", {params: params});
  }

  //Successful Test 4/14/2020
  makeApplication(app: Application) :Observable<Application>{

    return this.http.post<Application>(this.url+'/padapplication',app,{headers: this.headers});

  }

  //Successful Test 4/14/2020
  createPet(pet: Pet) :Observable<Pet>{

    return this.http.post<Pet>(this.url+"/pet", pet, {headers: this.headers});

  }
  //WIP
  retrievePet(petId: number) :Observable<Pet> {
    return this.http.get<Pet>(this.url+"/pet/"+petId);
  }

  //Untested 4/13/2020
  updatePet(pet: Pet) :Observable<Pet> {

    return this.http.post<Pet>(this.url+"/pet/update",pet, {headers: this.headers});

  }

  //Successful Test 4/14/2020
  retrieveAllPets() :Observable<Pet[]> {


    return this.http.get<Pet[]>(this.url+"/pet");

  }





}
