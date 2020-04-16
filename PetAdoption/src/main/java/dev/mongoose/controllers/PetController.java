package dev.mongoose.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import dev.mongoose.models.Pet;
import dev.mongoose.services.PetService;

@RestController
public class PetController {

	@Autowired
	PetService ps;
	
	@CrossOrigin
	@PostMapping(value="/pet", consumes="application/json")
	public Pet createPet(@RequestBody Pet pet) {
		
		return ps.createOrUpdatePet(pet);
		
	}
	@CrossOrigin
	@GetMapping(value="/pet")
	public List<Pet> getAllPets(){
		
		return ps.getAllPets();
	}
	@CrossOrigin
	@GetMapping(value="/pet/{petId}")
	public Pet getPetById(@PathVariable Integer petId) {
		
		if(petId==null) {
			return null;
		}else {
			return ps.getPet(petId);
		}
		
	}
	@CrossOrigin
	@PostMapping(value="/pet/update")
	public Pet adoptPet(@RequestBody Pet pet) {
		
		return ps.createOrUpdatePet(pet);
	}
	@CrossOrigin
	@DeleteMapping(value="/pet/{petId}")
	public boolean petDeletePed(@PathVariable Integer petId) {
		
		return ps.deletePet(ps.getPet(petId));
	}
	@CrossOrigin
	@GetMapping(value="/pet/get")
	public List<Pet> getPetByOwner(){
		return ps.getPetsByOwner(null);
	}
	
}
