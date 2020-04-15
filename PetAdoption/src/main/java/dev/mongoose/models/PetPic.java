package dev.mongoose.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Id;



/**
 * One foreign key to pet; A pet should be able to be created without a picture.
 * A pet's picture can be updated and changed later.
 * 
 * @author Jacen
 *
 */
@Entity
@Table(name = "petpics")
public class PetPic {

    @Id
    @Column(name = "petpicID", updatable = false)
    @GeneratedValue()
    private int petpicID;
    @Column(name = "piclink")
    private String piclink;
    @Column(name = "piccomments")
    private String piccomments;

    @ManyToOne
    @JoinColumn(name = "petid")
    private Pet pet;

    public PetPic() {
	super();
    }

    public PetPic(String piclink, String piccomments, Pet pet) {
	super();
	this.piclink = piclink;
	this.piccomments = piccomments;
	this.pet = pet;
    }

    public PetPic(int petpicID, String piclink, String piccomments, Pet pet) {
	super();
	this.petpicID = petpicID;
	this.piclink = piclink;
	this.piccomments = piccomments;
	this.pet = pet;
    }

    public int getPetPicID() {
	return petpicID;
    }

    public int getPetpicID() {
	return petpicID;
    }

    public void setPetpicID(int petpicID) {
	this.petpicID = petpicID;
    }

    public String getPiclink() {
	return piclink;
    }

    public void setPiclink(String piclink) {
	this.piclink = piclink;
    }

    public String getPiccomments() {
	return piccomments;
    }

    public void setPiccomments(String piccomments) {
	this.piccomments = piccomments;
    }

    public Pet getPet() {
	return pet;
    }

    public void setPet(Pet pet) {
	this.pet = pet;
    }

    @Override
    public String toString() {
	return "PetPic [petpicID=" + petpicID + ", piclink=" + piclink + ", piccomments=" + piccomments + ", pet=" + pet
		+ "]";
    }

}
