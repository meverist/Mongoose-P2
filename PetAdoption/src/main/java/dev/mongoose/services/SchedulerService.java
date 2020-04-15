package dev.mongoose.services;

import java.util.List;


import dev.mongoose.models.Scheduler;

public interface SchedulerService {
	public Scheduler createScheduler(Scheduler Scheduler);
	public Scheduler getSchedulerId(Integer id);
	public List<Scheduler> allScheduler();
	public Scheduler updateScheduler(Scheduler change);
	public boolean deleteScheduler(Scheduler delete);
	
	
	//public Scheduler getSchedulerByUser(Integer userid);
	//public Scheduler getSchedulerByPet(Integer petid);
}
