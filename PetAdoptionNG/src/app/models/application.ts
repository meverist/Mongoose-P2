import { Pet } from './Pet';
import { Adopter } from './Adoptor';


export class Application {
//Aplication model, PetName and Username are foreign keys
appId :number;
appReference :string;
appPetsOwned :string;
appChildren :string;
appComment :string;
appstatus :string;
user :Adopter;
pet :Pet;

constructor(appId :number, appReferences :string, appPetsOwned :string, appChildren :string, appComments :string, appStatus :string, user :Adopter, pet :Pet){
    this.appId = appId;
    this.appReference = appReferences;
    this.appPetsOwned = appPetsOwned;
    this.appChildren = appChildren;
    this.appComment = appComments;
    this.appstatus = appStatus;
    this.user = user;
    this.pet = pet;
}




}