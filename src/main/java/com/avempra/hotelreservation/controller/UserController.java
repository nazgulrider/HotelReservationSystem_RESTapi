package com.avempra.hotelreservation.controller;

import com.avempra.hotelreservation.entities.User;
import com.avempra.hotelreservation.resources.ReservationResource;
import com.avempra.hotelreservation.resources.UserResource;
import com.avempra.hotelreservation.service.ReservationService;
import com.avempra.hotelreservation.service.UserService;
import org.springframework.hateoas.Resources;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api/users", produces = "application/hal+json")
public class UserController {
    private UserService userService;
    private ReservationService reservationService;


    public UserController(UserService userService, ReservationService reservationService) {
        this.userService = userService;
        this.reservationService = reservationService;
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

    //-------------------------------------------------------------------------------
    @GetMapping("/{userId}/reservations")
    public ResponseEntity<Resources<ReservationResource>> getAllReservations(@PathVariable("userId") final long userId){
        return new ResponseEntity<>(
                reservationService.findReservationByUser(userId), HttpStatus.OK
        );
    }

    @GetMapping("/user/{username}")
    public ResponseEntity<UserResource> getUserByUsername(@PathVariable("username") final String username) {
        return new ResponseEntity<>(
                userService.findUserByUsername(username), HttpStatus.OK
        );
    }

}
