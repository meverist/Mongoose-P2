package dev.mongoose.models;

/**
 * Scheduler Class, Required two foreign keys to the pet and person
 * 
 * @author Robert TBD
 *
 */
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="scheduler")
public class Scheduler {
@Id
@GeneratedValue()
@Column(name="schid",updatable =false)
private int schId;
@Column(name="timee")	
private String time;
@Column(name="datee")
private String date;
@ManyToOne
@JoinColumn(name="petid")
private Pet petId;
@ManyToOne
@JoinColumn(name="userid")
private PadUser userId;

public Scheduler(int schId, String time, String date, Pet petId, PadUser userId) {
	super();
	this.schId = schId;
	this.time = time;
	this.date = date;
	this.petId = petId;
	this.userId = userId;
}

public Scheduler(String time, String date, Pet petId, PadUser userId) {
	super();
	this.time = time;
	this.date = date;
	this.petId = petId;
	this.userId = userId;
}

public Scheduler() {
	super();
	
}

public int getSchId() {
	return schId;
}

public void setSchId(int schId) {
	this.schId = schId;
}

public String getTime() {
	return time;
}

public void setTime(String time) {
	this.time = time;
}

public String getDate() {
	return date;
}

public void setDate(String date) {
	this.date = date;
}

public Pet getPetId() {
	return petId;
}

public void setPetId(Pet petId) {
	this.petId = petId;
}

public PadUser getUserId() {
	return userId;
}

public void setUserId(PadUser userId) {
	this.userId = userId;
}

@Override
public String toString() {
	return "Scheduler [schId=" + schId + ", time=" + time + ", date=" + date + ", petId=" + petId + ", userId=" + userId
			+ "]";
}




}
