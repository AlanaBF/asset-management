package com.nauticalturtle.assetmanagement.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
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

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/v1")
public class UserController {
	private static final Logger logger = LoggerFactory.getLogger(UserController.class);
	@Autowired
	private UserRepository userRepository;

	// get all users
	@GetMapping("/users")
	public List<User> getAllUsers() {
		logger.info("Handling getAllUsers request");
		try {
			return userRepository.findAll();
		} catch (Exception e) {
			logger.error("Error handling getAllUsers request", e);
			throw e;
		}
	}

 // create user rest api
    @PostMapping("/users")
    public ResponseEntity<User> createUser(@RequestBody User user) {
        logger.info("Handling createUser request");
        try {
            User createdUser = userRepository.save(user);

            // Include userId in the response
            return ResponseEntity.status(HttpStatus.CREATED).body(createdUser);
        } catch (Exception e) {
            logger.error("Error handling createUser request", e);
            throw e;
        }
    }


	// get user by id from rest api
	@GetMapping("/users/{userId}")
	public ResponseEntity<User> getUserById(@PathVariable Long userId) {
		User user = userRepository.findById(userId)
				.orElseThrow(() -> new ResourceNotFoundException("User Id does not exist" + userId));
		return ResponseEntity.ok(user);
	}

// update user rest api
@PutMapping("/users/{userId}")
public ResponseEntity<User> updateUser(@PathVariable Long userId, @RequestBody User updatedUser) {
    logger.info("Handling updateUser request");
    try {
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
    } catch (Exception e) {
        logger.error("Error handling updateUser request", e);
        throw e;
    }
}


	// delete user rest api
	@DeleteMapping("/users/{userId}")
	public ResponseEntity<Map<String, Boolean>> deleteUser(@PathVariable Long userId) {
		User user = userRepository.findById(userId)
				.orElseThrow(() -> new ResourceNotFoundException("User not exist with id :" + userId));
		userRepository.delete(user);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}

}
