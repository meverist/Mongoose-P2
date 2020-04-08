export class Application {

petID :number;
petName :string;
adoptorID :number;
adoptorName :string;
references :string;
currentPets :string;
children :string;
comments :string;

constructor(petID :number,petName :string, adoptorID :number, adoptorName :string, references :string, currentPets :string,children :string, comments :string){

this.petID = petID;
this.petName = petName;
this.adoptorID = adoptorID;
this.adoptorName = adoptorName;
this.references = references;
this.currentPets = currentPets;
this.children = children;
this.comments = comments;

}




}