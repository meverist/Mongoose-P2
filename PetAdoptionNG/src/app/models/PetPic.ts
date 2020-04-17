import {Pet} from './Pet';

export class PetPic {

petpicID :number;
piclink :string;
piccomments :string;
pet :Pet;

constructor(petpicID :number, piclink :string,piccomments :string,  pet :Pet){

 this.pet = pet;
 this.petpicID =petpicID;
 this.piclink = piclink;
 this.piccomments = piccomments;   


}








}
