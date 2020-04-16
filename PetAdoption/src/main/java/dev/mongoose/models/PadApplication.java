package dev.mongoose.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
/**
 * Applications for the users to adopt pets, requires a pet and user to create. 
 * Private vars(appReference,appPetsOwned,appChildren,appComment,user,pet)
 * 
 * @author Mat/Francisco
 *
 */
@Entity
@Table(name="padapplication")
public class PadApplication {

	@Id
	@Column(name="appid")
	@GeneratedValue()
	private int appId;
	@Column(name="appreference")
	private String appReference;
	@Column(name="apppetsowned")
	private String appPetsOwned;
	@Column(name="appchildren")
	private String appChildren;
	@Column(name="appcomment")
	private String appComment;
	
	@ManyToOne
	@JoinColumn(name="userId")
	private PadUser user;
	@ManyToOne
	@OnDelete(action = OnDeleteAction.CASCADE)
	@JoinColumn(name="petId")
	private Pet pet;
	
	public PadApplication() {
		super();
		// TODO Auto-generated constructor stub
	}

	public PadApplication(int appId, String appReference, String appPetsOwned, String appChildren, String appComment,
			PadUser user, Pet pet) {
		super();
		this.appId = appId;
		this.appReference = appReference;
		this.appPetsOwned = appPetsOwned;
		this.appChildren = appChildren;
		this.appComment = appComment;
		this.user = user;
		this.pet = pet;
	}

	public PadApplication(String appReference, String appPetsOwned, String appChildren, String appComment, PadUser user,
			Pet pet) {
		super();
		this.appReference = appReference;
		this.appPetsOwned = appPetsOwned;
		this.appChildren = appChildren;
		this.appComment = appComment;
		this.user = user;
		this.pet = pet;
	}

	public int getAppId() {
		return appId;
	}

	public void setAppId(int appId) {
		this.appId = appId;
	}

	public String getAppReference() {
		return appReference;
	}

	public void setAppReference(String appReference) {
		this.appReference = appReference;
	}

	public String getAppPetsOwned() {
		return appPetsOwned;
	}

	public void setAppPetsOwned(String appPetsOwned) {
		this.appPetsOwned = appPetsOwned;
	}

	public String getAppChildren() {
		return appChildren;
	}

	public void setAppChildren(String appChildren) {
		this.appChildren = appChildren;
	}

	public String getAppComment() {
		return appComment;
	}

	public void setAppComment(String appComment) {
		this.appComment = appComment;
	}

	public PadUser getUser() {
		return user;
	}

	public void setUser(PadUser user) {
		this.user = user;
	}

	public Pet getPet() {
		return pet;
	}

	public void setPet(Pet pet) {
		this.pet = pet;
	}

	@Override
	public String toString() {
		return "Application [appId=" + appId + ", appReference=" + appReference + ", appPetsOwned=" + appPetsOwned
				+ ", appChildren=" + appChildren + ", appComment=" + appComment + ", user=" + user + ", pet=" + pet
				+ "]";
	}

	
	
}