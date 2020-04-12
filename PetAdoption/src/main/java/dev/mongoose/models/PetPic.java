package dev.mongoose.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

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
    @Column(name = "petID", updatable = false)
    int petID;
    @Column(name = "piclink")
    String piclink;
    @Column(name = "piccomments")
    String piccomments;

    public int getPetID() {
	return petID;
    }
    public void setPetID(int petID) {
	this.petID = petID;
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
    public PetPic(String piclink, String piccomments) {
	super();
	this.piclink = piclink;
	this.piccomments = piccomments;
    }
    public PetPic() {
	super();
    }
    public PetPic(int petID, String piclink, String piccomments) {
	super();
	this.petID = petID;
	this.piclink = piclink;
	this.piccomments = piccomments;
    }
    @Override
    public String toString() {
	return "PetPics [petID=" + petID + ", piclink=" + piclink + ", piccomments=" + piccomments + "]";
    }
}
