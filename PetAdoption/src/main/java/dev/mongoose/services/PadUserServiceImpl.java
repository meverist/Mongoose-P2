package dev.mongoose.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dev.mongoose.models.PadUser;
import dev.mongoose.repositories.PadUserRespository;

@Service
public class PadUserServiceImpl implements PadUserService {
	
	@Autowired
	PadUserRespository pur;
	
	@Override
	public PadUser createPadUser(PadUser padUser) {
		return pur.save(padUser);
	}

	@Override
	public PadUser getPadUserById(int id) {
		return pur.findById(id).get();
	}

	@Override
	public List<PadUser> allPadUsers() {
		return (List<PadUser>) pur.findAll();
	}

	@Override
	public PadUser updatePadUser(PadUser change) {
		return pur.save(change);
	}

	@Override
	public boolean deletePadUser(PadUser delete) {
		try {
			
			pur.delete(delete);
			return true;
		}catch(IllegalArgumentException e) {
			e.printStackTrace();
			return false;
		}
	}

	@Override
	public PadUser getByuserEmail(String userEmail) {
		return pur.findByuserEmail(userEmail);
	}

	@Override
	public boolean validateUser(String userEmail, String userPassword) {

		PadUser valUser = pur.findByuserEmail(userEmail);
		
		if(valUser.getUserPassword()!= null && valUser.getUserPassword().equalsIgnoreCase(userPassword)) {
			return true;
		}else {
			return false;
		}
		
		
	}

}
