package com.avempra.hotelreservation.service;

import com.avempra.hotelreservation.entities.User;
import com.avempra.hotelreservation.exceptions.DataNotFoundException;
import com.avempra.hotelreservation.repositories.UserRepository;
import com.avempra.hotelreservation.resources.UserResource;
import org.springframework.hateoas.Resources;
import org.springframework.stereotype.Service;

import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService {
    private UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public Resources<UserResource> findAllUsers() {
        return new Resources<>(userRepository.findAll()
                .stream()
                .map(UserResource::new)
                .collect(Collectors.toList())
        );
    }

    @Override
    public UserResource findUserById(Long userId) {
        return userRepository.findById(userId)
                .map(UserResource::new)
                .orElseThrow(DataNotFoundException::new);
    }

    @Override
    public UserResource saveUser(User user) {
        return new UserResource(userRepository.save(user));
    }

    @Override
    public UserResource updateUser(Long userId, User user) {
        if(userRepository.existsById(userId)){
            user.setId(userId);
            return new UserResource(userRepository.save(user));
        }else{
            throw new DataNotFoundException("User with Id "+userId+" was not updated because the User could not be found");
        }
    }

    @Override
    public void deleteUserById(Long userId) {
        if (userRepository.existsById(userId)){
            userRepository.deleteById(userId);
        }else {
            throw new DataNotFoundException("User with Id "+userId+" was not deleted because User could not be found");
        }
    }

    @Override
    public UserResource findUserByUsername(String username) {
        return userRepository.findByLogin_UserName(username)
                .map(UserResource::new)
                .orElseThrow(DataNotFoundException::new);
    }


}
