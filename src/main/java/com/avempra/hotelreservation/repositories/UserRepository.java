package com.avempra.hotelreservation.repositories;

import com.avempra.hotelreservation.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User,Long> {
Optional<User> findByLogin_UserName(String userName);
}
