package com.nauticalturtle.assetmanagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nauticalturtle.assetmanagement.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

	
	
	
}
