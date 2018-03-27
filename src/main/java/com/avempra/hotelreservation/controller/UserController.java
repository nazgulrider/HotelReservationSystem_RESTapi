package com.avempra.hotelreservation.controller;

import com.avempra.hotelreservation.entities.User;
import com.avempra.hotelreservation.repositories.UserRepository;
import com.avempra.hotelreservation.resources.UserResource;
import org.springframework.hateoas.Resources;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/users", produces = "application/hal+json")
public class UserController {
    private UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping
    public ResponseEntity<Resources<UserResource>> getAllUsers(){
        //TODO Implement GET for all users
        return null;
    }

    @GetMapping("/{userId}")
    public ResponseEntity<UserResource> getUserWithId(@PathVariable("userId") final long userId){
        //TODO Implement GET for all users
        return null;
    }

    @PostMapping
    public ResponseEntity<UserResource> createUser(@RequestBody User user){
        //TODO Implement POST for all users
        return null;
    }

    @PatchMapping("/{userId}")
    public ResponseEntity<UserResource> updateUser(@PathVariable("userId") final long userId,
                                                   @RequestBody User user ){
        //TODO Implement PATCH for a user
        return null;
    }

    @DeleteMapping("/{userId}")
    public ResponseEntity delete(@PathVariable("userId") final long userId){
        //TODO Implement DELETE for all users
        return null;
    }

}
