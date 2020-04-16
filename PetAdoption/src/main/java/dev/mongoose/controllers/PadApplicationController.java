package dev.mongoose.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import dev.mongoose.models.PadApplication;
import dev.mongoose.models.Pet;
import dev.mongoose.services.PadApplicationService;

@RestController
public class PadApplicationController {
	
	@Autowired
	PadApplicationService pas;
	
	@CrossOrigin
	@PostMapping(value="/padapplication", consumes="application/json")
	public PadApplication createPadApplication(@RequestBody PadApplication padApp) {
		return pas.createPadApplication(padApp);
	}
	
	@CrossOrigin
	@GetMapping(value="/padapplication")
	public List<PadApplication> getAllPadApplication() {
		return pas.getAllPadApplications();
	}
	
	@CrossOrigin
	@GetMapping(value="/padapplication/{padId}")
	public PadApplication getPadApplicationById(@PathVariable int padId) {
		return pas.getPadApplicationById(padId);
	}
	
	@CrossOrigin
	@GetMapping(value="/padapplication/userid/{userId}")
	public List<PadApplication> getPadApplicationByUser(@PathVariable Integer userId){
		return pas.getPadApplicationByUserId(userId);
	}
	
	@CrossOrigin
	@GetMapping(value="/padapplication/")
	public PadApplication getPadAppByPetIdUserId(@RequestParam Integer petId, Integer userId) {
		return pas.getPadApplicationBypetIdAnduserId(petId, userId);
		
	}
	
	@CrossOrigin
	@PostMapping(value="/padapplication/update")
	public PadApplication updatePet(@RequestBody PadApplication app) {
		return pas.createPadApplication(app);
	}
	
	@CrossOrigin
	@DeleteMapping(value="/padapplication/{padId}")
	public boolean deleteApplication(@PathVariable Integer padId) {
		return pas.deletePadApplication(pas.getPadApplicationById(padId));	
	}
	
	@CrossOrigin
	@DeleteMapping(value="/padapplication/excluding")
	public boolean deleteApplicationsByPet(@RequestParam Integer petId, Integer userId) {
		return pas.deleteAppByPetExceptUser(pas.getPadApplicationBypetIdAnduserId(petId, userId));	
	}
	
	@CrossOrigin
	@GetMapping(value="/padapplication/find")
	public List<PadApplication> getAppbyStatus(@RequestParam String appstatus) {
		System.out.println("entered app by status " + appstatus);
		return pas.getAppByStatus(appstatus);
	}

}
