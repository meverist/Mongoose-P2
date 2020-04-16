package dev.mongoose.repositories;

import org.springframework.data.repository.CrudRepository;

import dev.mongoose.models.Scheduler;

public interface SchedulerRepository extends CrudRepository<Scheduler,Integer> {
    Scheduler findByUserUserId(Integer userid);
	Scheduler findByPetPetId(Integer petid);
	
}
