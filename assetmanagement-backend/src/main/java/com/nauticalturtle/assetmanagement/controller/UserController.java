package com.nauticalturtle.assetmanagement.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nauticalturtle.assetmanagement.exception.ResourceNotFoundException;
import com.nauticalturtle.assetmanagement.model.User;
import com.nauticalturtle.assetmanagement.repository.UserRepository;

@RestController
@RequestMapping("/api/v1/users")
public class UserController {
	
	 private final UserRepository userRepository;

	    @Autowired
	    public UserController(UserRepository userRepository) {
	        this.userRepository = userRepository;
	    }

	    // get all users
	    @GetMapping
	    public List<User> getAllUsers() {
	        return userRepository.findAll();
	    }

	    // create user rest api
	    @PostMapping
	    public ResponseEntity<User> createUser(@RequestBody User user) {
	        // Validation logic can be added here before saving the user
	        User createdUser = userRepository.save(user);
	        return ResponseEntity.status(HttpStatus.CREATED).body(createdUser);
	    }


	    // get user by id from rest api
	    @GetMapping("/{userId}")
	    public ResponseEntity<User> getUserById(@PathVariable Long userId) {
	    	User user = userRepository.findById(userId)
				.orElseThrow(() -> new ResourceNotFoundException("User Id does not exist" + userId));
	    	return ResponseEntity.ok(user);
	    }

	    // update user rest api
	    @PutMapping("/{userId}")
	    public ResponseEntity<User> updateUser(@PathVariable Long userId, @RequestBody User updatedUser) {
  
	    	User existingUser = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + userId));

	    	// Update the existing user with new data
	    	existingUser.setFirstName(updatedUser.getFirstName());
	    	existingUser.setLastName(updatedUser.getLastName());
	    	existingUser.setEmail(updatedUser.getEmail());
	    	existingUser.setUsername(updatedUser.getUsername());
	    	existingUser.setPassword(updatedUser.getPassword());

	    	User savedUser = userRepository.save(existingUser); // Save the updated user

	    	// Return the updated user in the response
	    	return ResponseEntity.ok(savedUser);
   
	    }


	    // delete user rest api
	    @DeleteMapping("/{userId}")
	    public ResponseEntity<Map<String, Boolean>> deleteUser(@PathVariable Long userId) {
	    	User user = userRepository.findById(userId)
				.orElseThrow(() -> new ResourceNotFoundException("User not exist with id :" + userId));
	    	userRepository.delete(user);
	    	Map<String, Boolean> response = new HashMap<>();
	    	response.put("deleted", Boolean.TRUE);
	    	return ResponseEntity.ok(response);
	    }

}
