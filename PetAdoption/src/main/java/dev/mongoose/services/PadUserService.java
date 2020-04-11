package dev.mongoose.services;

import java.util.List;

import dev.mongoose.models.PadUser;

public interface PadUserService{
	
	public PadUser createPadUser(PadUser padUser);
	public PadUser getPadUserById(int id);
	public List<PadUser> allPadUsers();
	public PadUser updatePadUser(PadUser change);
	public boolean deletePadUser(PadUser delete);
	
	//Custom
	public PadUser getByuserEmail(String userEmail);
	public boolean validateUser(String userEmail, String userPassword);

}
