package dev.mongoose.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import dev.mongoose.services.SchedulerService;

@RestController
public class SchedulerController {
	
	@Autowired
	SchedulerService ss;
	
	
      SchedulerController() {
		
	}

}
