package com.data.users.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.data.users.model.User;
import com.data.users.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	public User addUser(User user) {
		return userRepository.save(user);
	}
	
	public List<User> getUser(){
		return (List<User>)userRepository.findAll();
	}
	
	public void deleteUser(Integer id) {
		userRepository.deleteById(id);
	}
	
	public User updateUser(User user) {
		Integer id = user.getId();
		User usr= userRepository.findById(id).get();
		usr.setFname(user.getFname());
		usr.setLname(user.getLname());
		usr.setCity(user.getCity());
		usr.setDob(user.getDob());
		usr.setMnumber(user.getMnumber());
		return userRepository.save(usr);
	}
}



