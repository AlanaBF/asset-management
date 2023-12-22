package com.nauticalturtle.assetmanagement.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.nauticalturtle.assetmanagement.model.User;
import com.nauticalturtle.assetmanagement.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    // Other methods in your service...

    public User getUserByUsername(String username) {
        return userRepository.findByUsername(username);
    }
}
