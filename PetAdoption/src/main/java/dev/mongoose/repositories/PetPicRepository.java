package dev.mongoose.repositories;
import org.springframework.data.repository.CrudRepository;

import dev.mongoose.models.PetPic;

public interface PetPicRepository extends CrudRepository<PetPic, Integer> {

}
