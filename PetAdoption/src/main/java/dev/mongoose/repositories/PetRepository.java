package dev.mongoose.repositories;

import org.springframework.data.repository.CrudRepository;

import dev.mongoose.models.Pet;

public interface PetRepository extends CrudRepository<Pet, Integer>{

}
