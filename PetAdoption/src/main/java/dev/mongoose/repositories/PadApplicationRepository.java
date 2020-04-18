package dev.mongoose.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import dev.mongoose.models.PadApplication;

public interface PadApplicationRepository extends CrudRepository<PadApplication, Integer>{
	
	PadApplication findPadApplicationByPetPetIdAndUserUserId(Integer petId,Integer userId);
	List<PadApplication> findPadApplicationByPetPetId(Integer petId);
	List<PadApplication> findPadApplicationByUserUserId(Integer userId);
	List<PadApplication> findPadApplicationByappstatus(String status);
}
