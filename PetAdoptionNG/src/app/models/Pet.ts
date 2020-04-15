import { Adopter } from './Adoptor'

export class Pet{
    
    petID:number;
    petName: string;
    petType: string;
    petBreed: string;
    petAge: number;
    petWeight: number;
    petMedInfo: string;
    petAboutMe: string;
    petPic: string;
    owner: Adopter;

    constructor(petID:number, petName: string, petType: string, petBreed: string,petAge: number, petWeight: number,petMedInfo: string, petAboutMe: string, petPic:string, owner:Adopter)
    {
    this.petID = petID;
    this.petName = petName;
    this.petType = petType;
    this.petBreed = petBreed;
    this.petAge = petAge;
    this.petWeight = petWeight;
    this.petMedInfo = petMedInfo;
    this.petAboutMe = petAboutMe;
    this.petPic = petPic;
    this.owner = owner;
    }

}