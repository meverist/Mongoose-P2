package dev.mongoose.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dev.mongoose.models.PadApplication;
import dev.mongoose.repositories.PadApplicationRepository;

@Service
public class PadApplicationServiceImpl implements PadApplicationService {

	@Autowired
	PadApplicationRepository par;
	
	@Override
	public PadApplication createPadApplication(PadApplication padApp) {
		return par.save(padApp);
	}

	@Override
	public PadApplication getPadApplicationById(Integer id) {
		return par.findById(id).get();
	}

	@Override
	public List<PadApplication> getAllPadApplications() {
		return (List<PadApplication>) par.findAll();
	}

	@Override
	public PadApplication updatePadApplication(PadApplication change) {
		return par.save(change);
	}

	@Override
	public boolean deletePadApplication(PadApplication delete) {
		try {
			
			par.delete(delete);
			return true;
		}catch(IllegalArgumentException e) {
			e.printStackTrace();
			return false;
		}
	}

	@Override
	public PadApplication getPadApplicationBypetIdAnduserId(Integer petId, Integer userId) {
		return par.findPadApplicationByPetPetIdAndUserUserId(petId, userId);
	}

	@Override
	public boolean deleteAppByPetExceptUser(PadApplication padApplication) {

		int petId = padApplication.getPet().getPetId();
				
		List<PadApplication> petList = this.getPadApplicationByPetId(petId);
		
		
		for(PadApplication pa : petList) {
			
				if(!(pa.equals(padApplication))) {
					try {
					par.delete(pa);
					}catch(IllegalArgumentException e) {
						e.printStackTrace();
						return false;
					}
				}
			
			
		}
		return true;
		
	}

	@Override
	public List<PadApplication> getPadApplicationByPetId(Integer petId) {
		return (List<PadApplication>) par.findPadApplicationByPetPetId(petId);
	}

	@Override
	public List<PadApplication> getPadApplicationByUserId(Integer userId) {
		return (List<PadApplication>) par.findPadApplicationByUserUserId(userId);
	}

	@Override
	public List<PadApplication> getPadAppByStatus(String status) {
		return (List<PadApplication>) par.findPadApplicationByappstatus(status);
	}
	

}
