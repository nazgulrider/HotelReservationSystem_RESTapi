package com.avempra.hotelreservation.service;

import com.avempra.hotelreservation.entities.User;
import com.avempra.hotelreservation.resources.UserResource;
import org.springframework.hateoas.Resources;

public interface UserService {
    Resources<UserResource> findAllUsers();

    UserResource findUserById(Long userId);

    UserResource saveUser(User user);

    UserResource updateUser(Long userId, User user);

    void deleteUserById(Long userId);
}
