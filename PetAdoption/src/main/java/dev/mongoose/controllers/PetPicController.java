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

import dev.mongoose.models.PetPic;
import dev.mongoose.services.PetPicService;

@RestController
public class PetPicController {

    @Autowired
    PetPicService pps;

    @CrossOrigin
    @PostMapping(value = "/petpic", consumes = "application/json")
    public PetPic createPetPic(@RequestBody PetPic petPic) {

	System.out.println("Receiving Post Request");
	return pps.createOrUpdatePetPic(petPic);
    }


    @CrossOrigin
    @GetMapping(value = "/petpic/search/{petId}")
    public List<PetPic> getAllPetsPic(@PathVariable Integer petId) {

	return pps.getAllPetsPic(petId);
    }

    @CrossOrigin
    @GetMapping(value = "/petpic/{petId}")
    public PetPic getPetPicById(@PathVariable Integer petId) {

	if (petId == null) {
	    return null;
	} else {
	    return pps.getPetPic(petId);
	}
    }

    @CrossOrigin
    @DeleteMapping(value = "/petPic")
    public boolean deletePetPic(@RequestBody PetPic petPic) {
	return pps.deletePetPic(petPic);

    }
}
