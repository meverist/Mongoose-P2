package dev.mongoose.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
/***
 * Pets in the shelter(petID,petName,petBreed,petAge,petWeight,petMedInfo,petAboutMe,petOwner)
 * Model for the pets, owners should either reflect a staff member if the pet has yet to be adopted
 * or an adopter. If adopted pets can be dropped if wished. 
 * Age is in years, weight is in lbs
 * @author Mat/Francisco
 *
 */
@Entity
@Table(name="pet")
public class Pet {
	
	@Id
	@Column(name="petid", updatable=false)
	@GeneratedValue()
	private int petId;
	@Column(name="petname")
	private String petName;
	@Column(name="pettype")
	private String petType;
	@Column(name="petbreed")
	private String petBreed;
	@Column(name="petage")
	private int petAge;
	@Column(name="petweight")
	private int petWeight;
	@Column(name="petmedinfo")
	private String petMedInfo;
	@Column(name="petaboutme")
	private String petAboutMe;
//	@Column(name="petOwner")
//	private int petOwner;
//	Testing to see if join column works if everything is working delete these lines
	@ManyToOne
	@OnDelete(action = OnDeleteAction.CASCADE)
	@JoinColumn(name="userId")
	private PadUser petOwner;
	
	public Pet() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Pet(int petId, String petName, String petType, String petBreed, int petAge, int petWeight, String petMedInfo,
			String petAboutMe, PadUser petOwner) {
		super();
		this.petId = petId;
		this.petName = petName;
		this.petType = petType;
		this.petBreed = petBreed;
		this.petAge = petAge;
		this.petWeight = petWeight;
		this.petMedInfo = petMedInfo;
		this.petAboutMe = petAboutMe;
		this.petOwner = petOwner;
	}

	public Pet(String petName, String petType, String petBreed, int petAge, int petWeight, String petMedInfo,
			String petAboutMe, PadUser petOwner) {
		super();
		this.petName = petName;
		this.petType = petType;
		this.petBreed = petBreed;
		this.petAge = petAge;
		this.petWeight = petWeight;
		this.petMedInfo = petMedInfo;
		this.petAboutMe = petAboutMe;
		this.petOwner = petOwner;
	}

	public Pet(String petName, String petType, String petBreed, int petAge, int petWeight, String petMedInfo,
			String petAboutMe) {
		super();
		this.petName = petName;
		this.petType = petType;
		this.petBreed = petBreed;
		this.petAge = petAge;
		this.petWeight = petWeight;
		this.petMedInfo = petMedInfo;
		this.petAboutMe = petAboutMe;
	}

	public int getPetId() {
		return petId;
	}

	public void setPetId(int petId) {
		this.petId = petId;
	}

	public String getPetName() {
		return petName;
	}

	public void setPetName(String petName) {
		this.petName = petName;
	}

	public String getPetType() {
		return petType;
	}

	public void setPetType(String petType) {
		this.petType = petType;
	}

	public String getPetBreed() {
		return petBreed;
	}

	public void setPetBreed(String petBreed) {
		this.petBreed = petBreed;
	}

	public int getPetAge() {
		return petAge;
	}

	public void setPetAge(int petAge) {
		this.petAge = petAge;
	}

	public int getPetWeight() {
		return petWeight;
	}

	public void setPetWeight(int petWeight) {
		this.petWeight = petWeight;
	}

	public String getPetMedInfo() {
		return petMedInfo;
	}

	public void setPetMedInfo(String petMedInfo) {
		this.petMedInfo = petMedInfo;
	}

	public String getPetAboutMe() {
		return petAboutMe;
	}

	public void setPetAboutMe(String petAboutMe) {
		this.petAboutMe = petAboutMe;
	}

	public PadUser getPetOwner() {
		return petOwner;
	}

	public void setPetOwner(PadUser petOwner) {
		this.petOwner = petOwner;
	}

	@Override
	public String toString() {
		return "Pet [petId=" + petId + ", petName=" + petName + ", petType=" + petType + ", petBreed=" + petBreed
				+ ", petAge=" + petAge + ", petWeight=" + petWeight + ", petMedInfo=" + petMedInfo + ", petAboutMe="
				+ petAboutMe + ", petOwner=" + petOwner + "]";
	}
	
	
}