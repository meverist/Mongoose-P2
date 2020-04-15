package dev.mongoose.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import dev.mongoose.models.Scheduler;
import dev.mongoose.services.SchedulerService;

@RestController
public class SchedulerController {
	
	@Autowired
	SchedulerService ss;
     
	
	SchedulerController() {
		
	}
	@CrossOrigin
	@PostMapping(value="/petscheduler", consumes="application/json")
	public Scheduler createSceduler(@RequestBody Scheduler scheduler) {
		
		
		
		return ss.createScheduler(scheduler);
		
	}
	@CrossOrigin
	@GetMapping(value="/allpetscheduler")
      public List<Scheduler> getAllScheduler(){
    	  return ss.allScheduler();
     }
//	  @CrossOrigin
//      @GetMapping(value="/petscheduler/{petid}")
//      public Scheduler getByPetId(@PathVariable Integer petid) {
//    	  return ss.getSchedulerByPet(petid);
//      }
//	  @CrossOrigin
//      @GetMapping(value="/petscheduler/{userid}")
//      public Scheduler getByUserId(@PathVariable Integer userid) {
//    	  return ss.getSchedulerByUser(userid);
//      }
	  @CrossOrigin
      @DeleteMapping(value="/petscheduler")
      public boolean deleteScheduler(Scheduler delete) {
		return ss.deleteScheduler(delete);
    	  }
	  @CrossOrigin
      @PutMapping(value="/petscheduler")
      public Scheduler updateScehuler(Scheduler change) {
    	  
    	 return ss.updateScheduler(change);
      }
      
}


