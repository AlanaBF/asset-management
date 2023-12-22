package com.nauticalturtle.assetmanagement.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.nauticalturtle.assetmanagement.model.User;
import com.nauticalturtle.assetmanagement.service.UserService;


@RestController
public class LoginController {

    @Autowired
    private UserService userService;
    
  
    @PostMapping("/api/v1/users/login")
    public ResponseEntity<String> login(@RequestBody User loginUser) {
        // Perform user authentication logic here
        // You might fetch the user by username from the database and compare passwords
        // For simplicity, let's assume a basic login using username and password

        User user = userService.getUserByUsername(loginUser.getUsername());

        if (user != null && user.getPassword().equals(loginUser.getPassword())) {
            // Authentication successful
            return ResponseEntity.ok("Login successful");
        } else {
            // Authentication failed
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }
    }

    
}
