package dev.mongoose.repositories;

import org.springframework.data.repository.CrudRepository;

import dev.mongoose.models.Scheduler;

public interface SchedulerRepository extends CrudRepository<Scheduler,Integer> {
    //Scheduler findByUserIduserid(Integer userid);
	//Scheduler findByPetIdpetid(Integer petid);
	
}
