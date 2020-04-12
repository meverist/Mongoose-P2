package dev.mongoose.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import dev.mongoose.models.PetPic;
import dev.mongoose.repositories.PetPicRepository;

public class PetPicServiceImpl implements PetPicService {

    @Autowired
    PetPicRepository ppr;

    @Override
    public PetPic createOrUpdatePetPic(PetPic petPic) {
	return ppr.save(petPic);
    }
    @Override
    public PetPic getPetPic(int petId) {
	return ppr.findById(petId).get();
    }
    @Override
    public List<PetPic> getAllPetsPic()
    {
	return (List<PetPic>) ppr.findAll();
    }
    @Override
    public boolean deletePetPic(PetPic petPic)
    {
	try {
	    ppr.delete(petPic);
	    return true;
	} catch (IllegalArgumentException e) {
	    e.printStackTrace();
	    return false;
	}
    }
}
