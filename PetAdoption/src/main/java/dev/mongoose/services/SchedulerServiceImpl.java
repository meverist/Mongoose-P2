package dev.mongoose.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dev.mongoose.models.Scheduler;
import dev.mongoose.repositories.SchedulerRepository;
@Service
public class SchedulerServiceImpl implements SchedulerService {

@Autowired 
SchedulerRepository sr;
	
	public SchedulerServiceImpl() {

	}

	@Override
	public Scheduler createScheduler(Scheduler scheduler) {

		return sr.save(scheduler);
	}

	@Override
	public Scheduler getSchedulerId(Integer id) {

		return sr.findById(id).get();
	}

	@Override
	public List<Scheduler> allScheduler() {
		
		return (List<Scheduler>) sr.findAll();
	}

	@Override
	public Scheduler updateScheduler(Scheduler change) {
		
		return sr.save(change);
	}

	@Override
	public boolean deleteScheduler(Scheduler delete) {
try {
			
			sr.delete(delete);
			return true;
		}catch(IllegalArgumentException e) {
			e.printStackTrace();
			return false;
		}
	}
}		
	
//
//	@Override
//	public Scheduler getSchedulerByUser(Integer userid) {
//		
//		return sr.findByUserId(userid);
//	}
//
//	@Override
//	public Scheduler getSchedulerByPet(Integer petid) {
//		
//		return sr.findByPetId(petid);
//	}
//
//}
