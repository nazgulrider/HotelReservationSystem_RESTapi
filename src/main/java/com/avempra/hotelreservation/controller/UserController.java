package com.avempra.hotelreservation.controller;

import com.avempra.hotelreservation.repositories.UserRepository;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
    private UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }


    //TODO Implement GET for all users
    //TODO Implement POST for all users
    //TODO Implement DELETE for all users
    //TODO Implement PATCH for a user
    //TODO Implement DELETE for a user
    //TODO Implement GET for all reservations belonging to user
    //TODO Implement POST for all reservations belonging to user

}
