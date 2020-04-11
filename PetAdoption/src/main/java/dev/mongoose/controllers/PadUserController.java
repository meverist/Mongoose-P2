package dev.mongoose.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttributes;

import dev.mongoose.models.PadUser;
import dev.mongoose.services.PadUserService;

@RestController
@SessionAttributes("userId")
public class PadUserController {

	@Autowired
	PadUserService us;
	/**
	 * Function to create a user in the system
	 * @param padUser
	 * @return PadUser
	 */
	@RequestMapping(value="/paduser", method=RequestMethod.POST, consumes="application/json")
	public PadUser createPadUser(@RequestBody PadUser padUser) {
		System.out.println(padUser);
		return us.createPadUser(padUser);
	}
	/**
	 * Function to log in a user, put mapped for secrecy
	 */
	@GetMapping(value="paduser")
	public List<PadUser> getAllPadUser() {
		
		return us.allPadUsers();
	}
	
	@PostMapping(value="/paduser/login", consumes="application/json")
	public String getPadUser(@RequestBody String userEmail, String userPassword, ModelMap model) {
		
		if(!us.validateUser(userEmail, userPassword)) {
			model.put("errorMessage", "Invalid Credentials");
			return "paduser/login";
		}

		PadUser loginUser = us.getByuserEmail(userEmail);
		
		if(model.getAttribute("userId")==null) {
			model.addAttribute("userId", loginUser.getUserId());
		}else {
			model.replace("userId", loginUser.getUserId());
		}
		
		
		
		return "Welcome";
	}
	/**
	 * Function to update user profiles
	 */
	@PostMapping(value="/paduser/update", consumes="application/json")
	public PadUser updatePadUser(@RequestBody PadUser change) {
		return us.updatePadUser(change);
	}
	
}
