import { Pet } from './Pet';
import { Adopter } from './Adoptor';


export class Application {
//Aplication model, PetName and Username are foreign keys
appReference :string;
appPetsOwned :string;
appChildren :string;
appComment :string;
user :Adopter;
pet :Pet;

constructor(appReferences :string, appPetsOwned :string, appChildren :string, appComments :string, user :Adopter, pet :Pet){

this.appReference = appReferences;
this.appPetsOwned = appPetsOwned;
this.appChildren = appChildren;
this.appComment = appComments;
this.user = user;
this.pet = pet;
}




}