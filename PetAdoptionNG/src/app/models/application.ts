export class Application {
//Aplication model, PetName and Username are foreign keys
petID :number;
petName :string;
userID :number;
userName :string;
appReferences :string;
appPetsOwned :string;
appChildren :string;
appComments :string;

constructor(petID :number,petName :string, userID :number, userName :string, appReferences :string,
    appPetsOwned :string,appChildren :string, appComments :string){

this.petID = petID;
this.petName = petName;
this.userID = userID;
this.userName = userName;
this.appReferences = appReferences;
this.appPetsOwned = appPetsOwned;
this.appChildren = appChildren;
this.appComments = appComments;

}




}