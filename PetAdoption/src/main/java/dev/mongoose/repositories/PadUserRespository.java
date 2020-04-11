package dev.mongoose.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import dev.mongoose.models.PadUser;

@Repository
public interface PadUserRespository extends CrudRepository<PadUser, Integer> {

	PadUser findByuserEmail(String userEmail);
	
}
