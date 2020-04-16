package dev.mongoose.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import dev.mongoose.models.PetPic;
import dev.mongoose.services.PetPicService;

@RestController
public class PetPicController {

    @Autowired
    PetPicService pps;

    @PostMapping(value = "/petpic", consumes = "application/json")
    public PetPic createPetPic(@RequestBody PetPic petPic) {

	return pps.createOrUpdatePetPic(petPic);
    }

    @GetMapping(value = "/petpics/search/{petId}")
    public List<PetPic> getAllPetsPic(@PathVariable Integer petId) {

	
	return pps.getAllPetsPic(petId);
    }
    @GetMapping(value = "/petpic/{petId}")
    public PetPic getPetPicById(@PathVariable Integer petId) {

	if (petId == null) {
	    return null;
	} else {
	    return pps.getPetPic(petId);
	}
    }
    @DeleteMapping(value = "/petPic")
    public boolean deletePetPic(@RequestBody PetPic petPic) {
	return pps.deletePetPic(petPic);

    }
}
