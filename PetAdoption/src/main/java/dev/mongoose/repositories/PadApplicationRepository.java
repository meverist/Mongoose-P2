package dev.mongoose.repositories;

import org.springframework.data.repository.CrudRepository;

import dev.mongoose.models.PadApplication;
import dev.mongoose.models.PadUser;
import dev.mongoose.models.Pet;

public interface PadApplicationRepository extends CrudRepository<PadApplication, Integer>{
	
	PadApplication findPadApplicationByPetPetIdAndUserUserId(Integer petId,Integer userId);
	PadApplication findPadApplicationByPetPetId(Integer petId);
	PadApplication findPadApplicationByUserUserId(Integer userId);
	PadApplication findPadApplicationByappstatus(String status);
}
