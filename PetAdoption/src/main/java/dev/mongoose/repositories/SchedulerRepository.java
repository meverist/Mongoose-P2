package dev.mongoose.repositories;

import org.springframework.data.repository.CrudRepository;

import dev.mongoose.models.Scheduler;

public interface SchedulerRepository extends CrudRepository<Scheduler,Integer> {
	Scheduler findByUserId(Integer userid);
	Scheduler findByPetId(Integer petid);
	
}
