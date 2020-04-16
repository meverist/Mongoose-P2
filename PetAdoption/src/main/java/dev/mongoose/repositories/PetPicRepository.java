package dev.mongoose.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import dev.mongoose.models.PetPic;

@Repository
public interface PetPicRepository extends CrudRepository<PetPic, Integer> {

    PetPic findPetPicByPetPetId(Integer petId);
    List<PetPic> findAllByPetPetId(Integer petId);
}
