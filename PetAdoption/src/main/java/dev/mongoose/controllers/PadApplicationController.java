package dev.mongoose.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import dev.mongoose.models.PadApplication;
import dev.mongoose.services.PadApplicationService;

@RestController
public class PadApplicationController {
	
	@Autowired
	PadApplicationService pas;
	
	@PostMapping(value="/padapplication", consumes="application/json")
	public PadApplication createPadApplication(@RequestBody PadApplication padApp) {
		return pas.createPadApplication(padApp);
		
	}
	
	@GetMapping(value="/padapplication")
	public List<PadApplication> getAllPadApplication() {
		return pas.getAllPadApplications();
	}
	@GetMapping(value="/padapplication/{padId}")
	public PadApplication getPadApplicationById(@PathVariable int padId) {
		return pas.getPadApplicationById(padId);
	}
	@GetMapping(value="/padapplication/")
	public PadApplication getPadAppByPetIdUserId(@RequestParam Integer petId, Integer userId) {
		return pas.getPadApplicationBypetIdAnduserId(petId, userId);
		
	}

}
