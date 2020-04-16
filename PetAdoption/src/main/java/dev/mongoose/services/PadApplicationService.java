package dev.mongoose.services;

import java.util.List;

import dev.mongoose.models.PadApplication;

public interface PadApplicationService {

	public PadApplication createPadApplication(PadApplication padApp);
	public PadApplication getPadApplicationById(Integer id);
	public List<PadApplication> getAllPadApplications();
	public PadApplication updatePadApplication(PadApplication change);
	public boolean deletePadApplication(PadApplication delete);
	
	//custom
	public PadApplication getPadApplicationBypetIdAnduserId(Integer petId, Integer userId);
	public boolean deleteAppByPetExceptUser(PadApplication padApplication);
	public List<PadApplication> getPadApplicationByPetId(Integer petId);
	public List<PadApplication> getPadApplicationByUserId(Integer userId);
	public List<PadApplication> getPadAppByStatus(String status);

}
