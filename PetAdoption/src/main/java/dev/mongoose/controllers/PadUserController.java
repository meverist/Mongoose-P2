package dev.mongoose.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import dev.mongoose.models.PadUser;
import dev.mongoose.services.PadUserService;

@RestController
public class PadUserController {

	@Autowired
	PadUserService us;
	
	@RequestMapping(value="/padusers", method=RequestMethod.POST, consumes="application/json")
	public PadUser createPadUser(@RequestBody PadUser padUser) {
		System.out.println(padUser);
		return us.createPadUser(padUser);
	}
}
