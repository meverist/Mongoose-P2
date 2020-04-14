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
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="scheduler")
public class Scheduler {

@Column(name="time")	
private String time;
@Column(name="date")
private String date;
@ManyToOne
@JoinColumn(name="petid")
private int petID;
@ManyToOne
@JoinColumn(name="userid")
private int userID;




public Scheduler(String time, String date, int petID, int userID) {
	super();
	this.time = time;
	this.date = date;
	this.petID = petID;
	this.userID = userID;
}
public Scheduler(String date, int petID, int userID) {
	super();
	this.date = date;
	this.petID = petID;
	this.userID = userID;
}
public Scheduler() {
	super();
	
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
public int getPetID() {
	return petID;
}
public void setPetID(int petID) {
	this.petID = petID;
}
public int getUserID() {
	return userID;
}
public void setUserID(int userID) {
	this.userID = userID;
}
@Override
public String toString() {
	return "Scheduler [time=" + time + ", date=" + date + ", petID=" + petID + ", userID=" + userID + "]";
}
	
}
