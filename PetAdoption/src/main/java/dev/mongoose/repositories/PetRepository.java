package dev.mongoose.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import dev.mongoose.models.PadUser;
import dev.mongoose.models.Pet;

public interface PetRepository extends CrudRepository<Pet, Integer>{

	List<Pet> findPetByPetOwner(PadUser owner);
	
	
}
