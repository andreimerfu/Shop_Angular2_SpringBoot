package com.bookstore.resource;

import java.util.Collections;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.bookstore.service.UserService;

@RestController
public class LoginResource {
	@Autowired
	private UserService userService;
	
	@RequestMapping("/token")
	public Map<String, String> token(HttpSession session, HttpServletRequest request) {
		System.out.println(request.getRemoteHost());
		
		String remoteHost = request.getRemoteHost();
		int portNumber = request.getRemotePort();
		
		System.out.println(remoteHost+":"+portNumber);
		System.out.println(request.getRemoteAddr());
		
		return Collections.singletonMap("token", session.getId());
	}

	@RequestMapping("/checkSession")
	public ResponseEntity checkSession() {
		return new ResponseEntity("Session Active !", HttpStatus.OK);
	}

	@RequestMapping(value = "/user/logout", method = RequestMethod.POST)
	public ResponseEntity logout() {
		SecurityContextHolder.clearContext();
		return new ResponseEntity("Logout Successfully!", HttpStatus.OK);
	}
}
