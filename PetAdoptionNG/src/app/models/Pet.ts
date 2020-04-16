import { Adopter } from './Adoptor'

export class Pet{
    
    petId:number;
    petName: string;
    petType: string;
    petBreed: string;
    petAge: number;
    petWeight: number;
    petMedInfo: string;
    petAboutMe: string;
    petPic: string;
    petOwner: Adopter;

    constructor(petID:number, petName: string, petType: string, petBreed: string,petAge: number, petWeight: number,petMedInfo: string, petAboutMe: string, petPic:string, owner:Adopter)
    {
    this.petId = petID;
    this.petName = petName;
    this.petType = petType;
    this.petBreed = petBreed;
    this.petAge = petAge;
    this.petWeight = petWeight;
    this.petMedInfo = petMedInfo;
    this.petAboutMe = petAboutMe;
    this.petPic = petPic;
    this.petOwner = owner;
    }

}