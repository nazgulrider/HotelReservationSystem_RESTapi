package com.avempra.hotelreservation.controller;

import com.avempra.hotelreservation.entities.User;
import com.avempra.hotelreservation.resources.UserResource;
import com.avempra.hotelreservation.service.UserService;
import org.springframework.hateoas.Resources;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/users", produces = "application/hal+json")
public class UserController {
    private UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public ResponseEntity<Resources<UserResource>> getAllUsers(){
        return new ResponseEntity<>(
                userService.findAllUsers(), HttpStatus.OK
        );
    }

    @GetMapping("/{userId}")
    public ResponseEntity<UserResource> getUserWithId(@PathVariable("userId") final long userId){
        return new ResponseEntity<>(
                userService.findUserById(userId), HttpStatus.OK
        );
    }

    @PostMapping
    public ResponseEntity<UserResource> createUser(@RequestBody User user){
        return new ResponseEntity<>(
                userService.saveUser(user), HttpStatus.CREATED
        );
    }

    @PatchMapping("/{userId}")
    public ResponseEntity<UserResource> updateUser(@PathVariable("userId") final long userId,
                                                   @RequestBody User user ){
        return new ResponseEntity<>(
                userService.updateUser(userId, user), HttpStatus.CREATED
        );
    }

    @DeleteMapping("/{userId}")
    public ResponseEntity delete(@PathVariable("userId") final long userId){
        userService.deleteUserById(userId);
        return new ResponseEntity(HttpStatus.OK);
    }

}
