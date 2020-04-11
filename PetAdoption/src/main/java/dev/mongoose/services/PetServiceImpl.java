package dev.mongoose.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dev.mongoose.models.Pet;
import dev.mongoose.repositories.PetRepository;

@Service
public class PetServiceImpl implements PetService {

	@Autowired
	PetRepository pr;
	
	
	@Override
	public Pet createOrUpdatePet(Pet pet) {
		return pr.save(pet);
	}

	@Override
	public Pet getPet(Integer petId) {
		return pr.findById(petId).get();
	}

	@Override
	public List<Pet> getAllPets() {
		return (List<Pet>) pr.findAll();
	}

	@Override
	public boolean deletePet(Pet pet) {
		
		try {
			
			pr.delete(pet);
			return true;
			
		}catch(IllegalArgumentException e) {
			e.printStackTrace();
			return false;
		}
		
		
	}

}
