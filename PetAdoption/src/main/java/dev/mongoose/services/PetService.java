package dev.mongoose.services;

import java.util.List;

import dev.mongoose.models.Pet;

public interface PetService {

	
	public Pet createOrUpdatePet(Pet pet);
	public Pet getPet(Integer petId);
	public List<Pet> getAllPets();
	public boolean deletePet(Pet pet);
	
	
}
