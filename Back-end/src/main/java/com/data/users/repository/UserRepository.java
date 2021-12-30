package com.data.users.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.data.users.model.User;

@Repository
public interface UserRepository extends CrudRepository<User,Integer> {

}
