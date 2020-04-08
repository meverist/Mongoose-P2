import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Pet } from '../models/Pet';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetServiceService {

  constructor(private http:HttpClient) { }
  private headers = new HttpHeaders({'Content-Type':'application/json'})

  addPet(p:Pet):Observable<Pet>{
    return this.http.post<Pet>("http://localhost:8080/Mongoose/employeeAddPet",p,{headers:this.headers})
  }
}

