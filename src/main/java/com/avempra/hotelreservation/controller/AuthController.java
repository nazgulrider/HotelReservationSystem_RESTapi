package com.avempra.hotelreservation.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

/**
 * This endpoint checks the authentication status of a user
 */
@RestController
public class AuthController {

    @RequestMapping("/api/auth")
    public Principal user(Principal user) {
        return user;
    }
}
