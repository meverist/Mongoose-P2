package dev.mongoose.services;

import java.util.List;

import dev.mongoose.models.PetPic;

public interface PetPicService {

    public PetPic createOrUpdatePetPic(PetPic petPic);

    public PetPic getPetPic(int petId);

    public List<PetPic> getAllPetsPic();

    public boolean deletePetPic(PetPic petPic);
}
