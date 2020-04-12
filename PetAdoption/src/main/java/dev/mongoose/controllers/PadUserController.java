package dev.mongoose.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.CrossOrigin;
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
	@CrossOrigin
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
	
	@CrossOrigin
	@PostMapping(value="/paduser/login", consumes="application/json")
	public PadUser getPadUser(@RequestBody PadUser padUser) {
		System.out.println(padUser);
		if(!us.validateUser(padUser.getUserEmail(), padUser.getUserPassword())) {
			return null;
		}else {
			PadUser loginUser = us.getByuserEmail(padUser.getUserEmail());
		return loginUser;
		}
	}
	/**
	 * Function to update user profiles
	 */
	@PostMapping(value="/paduser/update", consumes="application/json")
	public PadUser updatePadUser(@RequestBody PadUser change) {
		return us.updatePadUser(change);
	}
	
}
