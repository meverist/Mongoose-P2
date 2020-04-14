package dev.mongoose.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dev.mongoose.models.PetPic;
import dev.mongoose.repositories.PetPicRepository;

@Service
public class PetPicServiceImpl implements PetPicService {

    @Autowired
    PetPicRepository ppr;

    @Override
    public PetPic createOrUpdatePetPic(PetPic petPic) {
	return ppr.save(petPic);
    }

    @Override
    public PetPic getPetPic(int petId) {
	return ppr.findPetPicByPetPetId(petId);
    }

    @Override
    public List<PetPic> getAllPetsPic(Integer petId) {
	return (List<PetPic>) ppr.findAllByPetPetId(petId);
    }

    @Override
    public boolean deletePetPic(PetPic petPic) {
	try {
	    ppr.delete(petPic);
	    return true;
	} catch (IllegalArgumentException e) {
	    e.printStackTrace();
	    return false;
	}
    }
}
