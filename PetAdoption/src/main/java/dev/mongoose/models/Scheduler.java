package dev.mongoose.models;
/**
 * Scheduler Class, Required two foreign keys to the pet and person
 * 
 * @author TBD
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

private String pet;

private String user;
	
}
