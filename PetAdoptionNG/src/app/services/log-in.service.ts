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
import { PetPic } from '../models/PetPic'

@Injectable({
  providedIn: 'root'
})
export class LogInService {

  url: string;

  constructor(private http :HttpClient) {
    this.url = "http://ec2-18-219-236-61.us-east-2.compute.amazonaws.com:8080/PetAdoption";
    //this.url = "http://localhost:8080";

    //Server URL
    //  http://ec2-18-219-236-61.us-east-2.compute.amazonaws.com:8080/
    //http://localhost:8080/PetAdoption
  }

  private headers = new HttpHeaders({'content-Type':'application/json'});
  private headerImgur = new HttpHeaders({'Authorization': 'Client-ID 3c09ec7282cf370'}); 

  //Log in  -- Tested 4/13/2020
  checkAdopter(adop: Adopter) :Observable<Adopter> {
    return this.http.post<Adopter>(this.url+"/paduser/login", adop, {headers: this.headers});
  }

  //Register -- Tested 4/13/2020
  //Will be using to update and change the user info
  addAdopter(adop: Adopter) :Observable<Adopter> {
    return this.http.post<Adopter>(this.url+"/paduser", adop, {headers: this.headers});
  }

  //Get all applications  -- tested 4/15/2020
  allApplication() :Observable<Application[]> {
    //return this.http.get<Application[]>(this.url+"/padapplication");
    //updated version so that it only gets applications that are pending
    return this.http.get<Application[]>(this.url+"/padapplication/find/?appstatus=pending")
  }

  //Get application by User -- tested 4/15/2020
  userApplication(userId: number) :Observable<Application[]>{
    return this.http.get<Application[]>(this.url+"/padapplication/userid/"+userId)

  }

  //Successful tested 4/15/2020
  deleteApplicaiton(padId: number) :Observable<Object>{
    return this.http.delete(this.url+"/padapplication/"+padId);
  }

  //Delete all applications that have this pet id but does not have both the pet id and user id.
  //Successfull tested 4/15/2020
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

  //Is calling the same thing as make app, Added by Mat, didnt come though in git pull for some reason
  updateApp(app: Application) :Observable<Application>{
    return this.http.post<Application>(this.url+"/padapplication",app,{headers: this.headers});
  }

  //Successful Test 4/14/2020
  createPet(pet: Pet) :Observable<Pet>{
    return this.http.post<Pet>(this.url+"/pet", pet, {headers: this.headers});
  }

  //WIP
  retrievePet(petId: number) :Observable<Pet> {
    return this.http.get<Pet>(this.url+"/pet/"+petId);
  }

  //Successful tested 4/13/2020
  updatePet(pet: Pet) :Observable<Pet> {
    return this.http.post<Pet>(this.url+"/pet/update",pet, {headers: this.headers});
  }

  //Successful Test 4/14/2020
  retrieveAllPets() :Observable<Pet[]> {  
    return this.http.get<Pet[]>(this.url+"/pet");
  }

  //Goal is to create a new pet album when creating a pet
  createAlbum(petId :number) :Observable<Object> {

    let obj :string =  "{'title':"+petId+"}";
    
    return this.http.post<Object>("https://api.imgur.com/3/album", obj ,{headers: this.headerImgur})

  }

  retrieveAllPetsNoOwner() :Observable<Pet[]> {
    return this.http.get<Pet[]>(this.url+"/pet/get");
  }

  //2 test 1 successful 1 failed when a application is all ready connected to pet
  deletePet(petId :number) :Observable<Object> {
    console.log(this.url);
    return this.http.delete(this.url + "/pet/"+petId);
  }

  uploadImg(string :any) :Observable<Object>{

    return this.http.post<Object>("https://api.imgur.com/3/image/", string , {headers: this.headerImgur})
  }

  createPetPic(petpic :PetPic) :Observable<PetPic> {

    return this.http.post<PetPic>(this.url+"/petpic", petpic, {headers: this.headers})


  }

  retrievePetPics(petId :number) :Observable<PetPic[]> {
    return this.http.get<PetPic[]>(this.url+"/petpic/search/"+petId);
  }


}
